using FluentScheduler;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Threading.Tasks;
using WheelOfFate.API.Config;
using WheelOfFate.API.FluentScheduler;
using WheelOfFate.Data.Context;
using WheelOfFate.Data.IdentityModels;
using WheelOfFate.Data.Repositories;
using WheelOfFate.Domain.Repositories;
using WheelOfFate.Domain.Services;
using WheelOfFate.Domain.Services.Contracts;
using WheelOfFate.Messaging.Services;

namespace WheelOfFate.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<WheelOfFateContext>(options => options.UseSqlServer(Configuration.GetConnectionString("WheelOfFate")));
            services.AddDefaultIdentity<ApplicationUser>().AddEntityFrameworkStores<WheelOfFateContext>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddScoped<IWheelOfFateService, WheelOfFateService>();
            services.AddScoped<INotifierService, AmazonAppSyncNotifierService>();
            
            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<SeedDatabase>();

            services.AddCors();

            services.AddApiSecurity(Configuration);

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, Microsoft.AspNetCore.Hosting.IApplicationLifetime applicationLifetime, Microsoft.AspNetCore.Hosting.IHostingEnvironment env, SeedDatabase seeder)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(b =>
            {
                b.AllowAnyHeader()
                .AllowAnyMethod()
                .AllowAnyOrigin()
                .AllowCredentials();
            });

            applicationLifetime.ApplicationStarted.Register(() =>
            {
                JobManager.Initialize(new WheelOfFateRegistry(app.ApplicationServices));
            });

            applicationLifetime.ApplicationStopping.Register(() =>
            {
                JobManager.StopAndBlock();
            });
            
            app.UseMvc();

            Task.Run(async () => await SeedDatabase.Seed(app.ApplicationServices)).GetAwaiter().GetResult();
            
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WheelOfFate.Data.IdentityModels;
using WheelOfFate.Data.Context;
using Microsoft.AspNetCore.Http;
using WheelOfFate.Domain.Services.Contracts;
using WheelOfFate.Domain.Services;
using WheelOfFate.Messaging.Services;
using WheelOfFate.Domain.Repositories;
using WheelOfFate.Data.Repositories;
using WheelOfFate.API.Config;
using WheelOfFate.API.FluentScheduler;
using FluentScheduler;

namespace WheelOfFate.API
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<WheelOfFateContext>(options => options.UseSqlServer(Configuration.GetConnectionString("WheelOfFate")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<WheelOfFateContext>()
                .AddDefaultTokenProviders();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddScoped<IWheelOfFateService, WheelOfFateService>();
            services.AddScoped<INotifierService, SignalRNotifierService>();

            services.AddScoped<ITeamRepository, TeamRepository>();
            services.AddScoped<SeedDatabase>();

            services.AddCors();

            services.AddApiSecurity(Configuration);

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IApplicationLifetime applicationLifetime, IHostingEnvironment env)
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

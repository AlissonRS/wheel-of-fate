using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace WheelOfFate.Data.Context
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<WheelOfFateContext>
    {
        public WheelOfFateContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            var builder = new DbContextOptionsBuilder<WheelOfFateContext>();
            var connectionString = configuration.GetConnectionString("WheelOfFate");
            builder.UseSqlServer(connectionString);
            return new WheelOfFateContext(builder.Options);
        }
    }
}

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using WheelOfFate.Data.IdentityModels;
using WheelOfFate.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using RandomNameGeneratorLibrary;
using System.Threading.Tasks;
using System.Threading;
using System.Reflection;
using System;
using Microsoft.EntityFrameworkCore.Design;

namespace WheelOfFate.Data.Context
{
    public class WheelOfFateContext: IdentityDbContext<ApplicationUser>
    {
        public DbSet<Engineer> Engineers { get; set; }
        public DbSet<Shift> Shifts { get; set; }
        public DbSet<Team> Teams { get; set; }

        private string userId;

        public WheelOfFateContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            foreach (var pb in builder.Model
                .GetEntityTypes()
                .SelectMany(t => t.GetProperties())
                .Where(p => p.ClrType == typeof(string))
                .Select(p => builder.Entity(p.DeclaringEntityType.ClrType).Property(p.Name)))
            {
                pb.HasMaxLength(100);
            }

            builder.Entity<ApplicationUser>().HasOne(u => u.User).WithOne().HasForeignKey<ApplicationUser>(a => a.Id);

        }

        public int SaveChanges(string userId)
        {
            this.userId = userId;
            SetModifiedInformation();
            return base.SaveChanges();
        }

        public async Task<int> SaveChangesAsync(string userId, CancellationToken cancellationToken = new CancellationToken())
        {
            this.userId = userId;
            SetModifiedInformation();
            return await base.SaveChangesAsync(cancellationToken);
        }

        private void SetModifiedInformation()
        {
            if (string.IsNullOrWhiteSpace(userId))
                throw new ArgumentNullException("userId");
            foreach (var entityEntries in ChangeTracker.Entries<BaseEntity>())
            {
                if (entityEntries.State == EntityState.Modified)
                {
                    var entity = entityEntries.Entity;
                    entity.GetType().GetProperty("ModifiedBy", BindingFlags.NonPublic | BindingFlags.Instance)?.SetValue(entity, userId);
                    entity.GetType().GetProperty("ModifiedAt", BindingFlags.NonPublic | BindingFlags.Instance)?.SetValue(entity, DateTime.Now);
                }
                if (entityEntries.State == EntityState.Added)
                {
                    var entity = entityEntries.Entity;
                    entity.GetType().GetProperty("CreatedBy", BindingFlags.NonPublic | BindingFlags.Instance)?.SetValue(entity, userId);
                    entity.GetType().GetProperty("CreatedAt", BindingFlags.NonPublic | BindingFlags.Instance)?.SetValue(entity, DateTime.Now);
                }
            }
        }
        
    }
}

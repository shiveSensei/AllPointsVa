using Microsoft.EntityFrameworkCore;
using VaHelpDesk.Core.Features.Categories;
using VaHelpDesk.Core.Features.Facilities;
using VaHelpDesk.Core.Features.Hardwares;
using VaHelpDesk.Core.Features.Shared;
using VaHelpDesk.Core.Features.TaskItem;
using VaHelpDesk.Core.Features.Users;

namespace VaHelpDesk.Web.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Hardware> Hardwares { get; set; }
        public DbSet<Kind> Kinds { get; set; }
        public DbSet<Facility> Facilities { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<PartNum> PartNums { get; set; }
        public DbSet<TaskItem> TaskItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Hardware>().ToTable("Hardware");
            modelBuilder.Entity<Kind>().ToTable("Kind");
            modelBuilder.Entity<Facility>().ToTable("Facility");
            modelBuilder.Entity<Category>().ToTable("Category");
            modelBuilder.Entity<PartNum>().ToTable("Part Numbers");
            modelBuilder.Entity<TaskItem>().ToTable("Task Items");

            // modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new TaskItemConfiguration());
            modelBuilder.ApplyConfiguration(new FacilityConfiguration());
            //modelBuilder.ApplyConfiguration(new HardwareConfiguration());
            //modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            //modelBuilder.ApplyConfiguration(new PartNumConfiguration());
            //modelBuilder.ApplyConfiguration(new KindConfiguration());




        }
        
    }
}

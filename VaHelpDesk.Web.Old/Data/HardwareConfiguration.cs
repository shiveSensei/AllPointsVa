using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using VaHelpDesk.Core.Features.Hardwares;

namespace VaHelpDesk.Web.Data
{
    public class HardwareConfiguration : IEntityTypeConfiguration<Hardware>
    {
        public void Configure(EntityTypeBuilder<Hardware> builder)
        {
            builder.Property(x => x.Name).HasMaxLength(64);
           // builder.HasOne(b => b.Category);
          //  builder.HasOne(b => b.PartNum)
           //     .WithMany(p => p.Hardwares)
           //     .HasForeignKey(b => b.PartNumId).OnDelete(DeleteBehavior.Restrict);
           // builder.HasOne(b => b.Kind);
           // builder.HasOne(b => b.Facility);



        }
    }
}
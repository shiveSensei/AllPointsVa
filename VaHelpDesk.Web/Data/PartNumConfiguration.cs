 using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using VaHelpDesk.Core.Features.Shared;

namespace VaHelpDesk.Web.Data
{
    public class PartNumConfiguration : IEntityTypeConfiguration<PartNum>
    {
        public void Configure(EntityTypeBuilder<PartNum> builder)
        {
            //set one to many relationship with Hardwares
            builder.HasMany(p => p.Hardwares)
                .WithOne(h => h.PartNum).OnDelete(DeleteBehavior.SetNull);

            //set one to many relationship with Kind
            //builder.HasOne(p => p.Kind)
            //    .WithMany(k => k.PartNums);
            //set as primary key
          // builder.HasIndex(p => p.ProdN).IsUnique();
           // builder.HasKey(p => p.Num);
        
        }
    }
}
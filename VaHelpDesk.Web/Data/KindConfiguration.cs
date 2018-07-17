using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using VaHelpDesk.Core.Features.Hardwares;
using VaHelpDesk.Core.Features.Shared;

namespace VaHelpDesk.Web.Data
{
    public class KindConfiguration : IEntityTypeConfiguration<Kind>
    {
        public void Configure(EntityTypeBuilder<Kind> builder)
        {
            builder.Property(x => x.Name).HasMaxLength(64);
            builder.HasIndex(x => x.Name).IsUnique();
            builder.Property(x => x.Name).IsRequired();

       
        }
    }
}
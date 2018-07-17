using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using VaHelpDesk.Core.Features.Facilities;
using VaHelpDesk.Web.Extensions;

namespace VaHelpDesk.Web.Data
{
    public class FacilityConfiguration : IEntityTypeConfiguration<Facility>
    {
        public void Configure(EntityTypeBuilder<Facility> builder)
        {
            builder.OwnsAddress(x => x.PhysicalAddress);
            builder.Property(x => x.Name).HasMaxLength(64);

        }
    }
}
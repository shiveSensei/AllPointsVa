using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using VaHelpDesk.Core.Features.Users;
using VaHelpDesk.Web.Extensions;

namespace VaHelpDesk.Web.Data
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(x => x.Email).HasMaxLength(64);
            builder.HasIndex(x => x.Email).IsUnique();
        }
    }
}
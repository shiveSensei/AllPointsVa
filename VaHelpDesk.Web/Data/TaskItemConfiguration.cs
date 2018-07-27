using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using VaHelpDesk.Core.Features.TaskItem;

namespace VaHelpDesk.Web.Data
{
    public class TaskItemConfiguration : IEntityTypeConfiguration<TaskItem>
    {
        public void Configure(EntityTypeBuilder<TaskItem> builder)
        {

            builder
                .Property(t => t.List)
                .HasConversion<string>();
        }
    }
}
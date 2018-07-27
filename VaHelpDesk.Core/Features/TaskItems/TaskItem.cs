using System;
using VaHelpDesk.Core.Features.Shared;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace VaHelpDesk.Core.Features.TaskItem
{
    public class TaskItem
    {
        [Required]
        public string Name { get; set; }
        public string Details { get; set; }
        public int Id { get; set; }
        public bool IsComplete { get; set; }
        public TaskList List { get; set; }
    }

    public enum TaskList {
        SysAdmin,
        WebDev,
        VaHelpDesk

    }
}
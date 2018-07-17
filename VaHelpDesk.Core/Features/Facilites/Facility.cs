using System;
using VaHelpDesk.Core.Features.Shared;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace VaHelpDesk.Core.Features.Facilities
{
    public class Facility
    {
        [Required]
        public string Name { get; set; }
        public int Id { get; set; }

        public Address PhysicalAddress { get; set; }

        public string Description { get; set; }
    }
}
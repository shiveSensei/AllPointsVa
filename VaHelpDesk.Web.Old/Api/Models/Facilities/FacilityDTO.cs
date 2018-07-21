using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using VaHelpDesk.Core.Features.Shared;

namespace VaHelpDesk.Web.Api.Models.Facilities
{
    public class FacilityDTO
    {
        [Required]
        public string Name { get; set; }
        public int Id { get; set; }

        public Address PhysicalAddress { get; set; }

        public string Description { get; set; }
    }
}

using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using VaHelpDesk.Core.Features.Shared;

namespace VaHelpDesk.Web.Api.Models.Hardwares
{
    public class HardwareDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public int Serial { get; set; }

        [DefaultValue("hardware")]
        public string Class { get; set; } //class is always hardware

        [DefaultValue(false)]
        public bool InService { get; set; }
        [DefaultValue(true)]
        public bool Warranty { get; set; } //out of warranty if set to false

        public int PartNumId { get; set; }
        public virtual PartNum PartNum { get; set; }

     
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTime DeliveryDate { get; set; } //Call this the start of the warranty. Put expected delivery date, update if necessary

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTime WarrantyEnd { get; set; } // 365 days after delivery date

        public int FacilityId { get; set; }
        public int CategoryId { get; set; }
        public int KindId { get; set; }

    }
}

using System;
using VaHelpDesk.Core.Features.Categories;
using VaHelpDesk.Core.Features.Facilities;
using VaHelpDesk.Core.Features.Shared;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace VaHelpDesk.Core.Features.Hardwares
{
    public class Hardware
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public int Serial { get; set; }
        //public string Description { get; set; }

        public string Class { get; set; } //class is always hardware

        [DefaultValue(false)]
        public bool InService { get; set; }
        [DefaultValue(true)]
        public bool Warranty { get; set; } //out of warranty if set to false

        public int PartNumId { get; set; }
        public virtual PartNum PartNum { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTime ShipDate { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTime DeliveryDate { get; set; } //Call this the start of the warranty. Put expected delivery date, update if necessary

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:d}")]
        public DateTime WarrantyEnd { get; set; } // 365 days after delivery date

        public int TrackingNum { get; set; }

        public int FacilityId { get; set; }
        public int CategoryId { get; set; }
        public int KindId { get; set; }
       
        public virtual Facility Facility { get; set; }
        public virtual Category Category { get; set; }
        public virtual Kind Kind { get; set; }
    }
}
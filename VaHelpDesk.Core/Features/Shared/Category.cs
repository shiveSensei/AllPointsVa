using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using VaHelpDesk.Core.Features.Shared;

namespace VaHelpDesk.Core.Features.Categories
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

      //  public ICollection<PartNum> PartNums { get; set; } // all part numbers that are in this Category type
              
    }
}
using VaHelpDesk.Core.Features.Hardwares;
using System.ComponentModel;
using System.Collections;
using System.Collections.Generic;

namespace VaHelpDesk.Core.Features.Shared
{
    public class PartNum
    {
        public int Id { get; set; }
        public string ProdN { get; set; }
        public string Name { get; set; }

        public int CategoryId { get; set; }
        public int KindId { get; set; }

        public ICollection<Hardware> Hardwares { get; set; }
        
    }
}
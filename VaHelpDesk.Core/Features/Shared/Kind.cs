using VaHelpDesk.Core.Features.Categories;
using System.Collections.Generic;
using System.ComponentModel;

namespace VaHelpDesk.Core.Features.Shared
{
    //sub for Type, since Type is needed in our data set, but is a key word in this archetechure.
    public class Kind
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int CategoryId { get; set; }
        public virtual Category Category { get; set; }

    }
}
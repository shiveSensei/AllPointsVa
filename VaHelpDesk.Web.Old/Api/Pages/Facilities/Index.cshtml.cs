using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using VaHelpDesk.Core.Features.Facilities;
using VaHelpDesk.Web.Data;

namespace VaHelpDesk.Web.Api.Pages.Facilities
{
    public class IndexModel : PageModel
    {
        private readonly VaHelpDesk.Web.Data.DataContext _context;

        public IndexModel(VaHelpDesk.Web.Data.DataContext context)
        {
            _context = context;
        }

        public IList<Facility> Facility { get;set; }

        public async Task OnGetAsync()
        {
            Facility = await _context.Facilities.ToListAsync();
        }
    }
}

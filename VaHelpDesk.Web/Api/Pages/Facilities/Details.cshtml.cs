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
    public class DetailsModel : PageModel
    {
        private readonly VaHelpDesk.Web.Data.DataContext _context;

        public DetailsModel(VaHelpDesk.Web.Data.DataContext context)
        {
            _context = context;
        }

        public Facility Facility { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Facility = await _context.Facilities.FirstOrDefaultAsync(m => m.Id == id);

            if (Facility == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}

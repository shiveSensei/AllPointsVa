using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using VaHelpDesk.Core.Features.Facilities;
using VaHelpDesk.Web.Data;

namespace VaHelpDesk.Web.Api.Pages.Facilities
{
    public class CreateModel : PageModel
    {
        private readonly VaHelpDesk.Web.Data.DataContext _context;

        public CreateModel(VaHelpDesk.Web.Data.DataContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Facility Facility { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Facilities.Add(Facility);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
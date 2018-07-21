using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VaHelpDesk.Core.Features.Shared;
using VaHelpDesk.Web.Data;

namespace VaHelpDesk.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KindsController : ControllerBase
    {
        private readonly DataContext _context;

        public KindsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Kinds
        [HttpGet]
        public IEnumerable<Kind> GetKinds()
        {
            return _context.Kinds;
        }

        // GET: api/Kinds/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetKind([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var kind = await _context.Kinds.FindAsync(id);

            if (kind == null)
            {
                return NotFound();
            }

            return Ok(kind);
        }

        // PUT: api/Kinds/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKind([FromRoute] int id, [FromBody] Kind kind)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != kind.Id)
            {
                return BadRequest();
            }

            _context.Entry(kind).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KindExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Kinds
        [HttpPost]
        public async Task<IActionResult> PostKind([FromBody] Kind kind)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Kinds.Add(kind);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKind", new { id = kind.Id }, kind);
        }

        // DELETE: api/Kinds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKind([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var kind = await _context.Kinds.FindAsync(id);
            if (kind == null)
            {
                return NotFound();
            }

            _context.Kinds.Remove(kind);
            await _context.SaveChangesAsync();

            return Ok(kind);
        }

        private bool KindExists(int id)
        {
            return _context.Kinds.Any(e => e.Id == id);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VaHelpDesk.Core.Features.Hardwares;
using VaHelpDesk.Web.Data;

namespace VaHelpDesk.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HardwaresController : ControllerBase
    {
        private readonly DataContext _context;

        public HardwaresController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Hardwares
        [HttpGet]
        public IEnumerable<Hardware> GetHardwares()
        {
            return _context.Hardwares;
        }

        // GET: api/Hardwares/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetHardware([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hardware = await _context.Hardwares.FindAsync(id);

            if (hardware == null)
            {
                return NotFound();
            }

            return Ok(hardware);
        }

        // PUT: api/Hardwares/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHardware([FromRoute] int id, [FromBody] Hardware hardware)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != hardware.Id)
            {
                return BadRequest();
            }

            _context.Entry(hardware).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HardwareExists(id))
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

        // POST: api/Hardwares
        [HttpPost]
        public async Task<IActionResult> PostHardware([FromBody] Hardware hardware)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Hardwares.Add(hardware);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHardware", new { id = hardware.Id }, hardware);
        }

        // DELETE: api/Hardwares/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHardware([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var hardware = await _context.Hardwares.FindAsync(id);
            if (hardware == null)
            {
                return NotFound();
            }

            _context.Hardwares.Remove(hardware);
            await _context.SaveChangesAsync();

            return Ok(hardware);
        }

        private bool HardwareExists(int id)
        {
            return _context.Hardwares.Any(e => e.Id == id);
        }
    }
}
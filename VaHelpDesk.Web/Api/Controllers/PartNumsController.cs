using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VaHelpDesk.Core.Features.Shared;
using VaHelpDesk.Web.Data;

namespace VaHelpDesk.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartNumsController : ControllerBase
    {
        private readonly DataContext _context;

        public PartNumsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/PartNums
        [HttpGet]
        public IEnumerable<PartNum> GetPartNums()
        {
            return _context.PartNums;
        }

        // GET: api/PartNums/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPartNum([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var partNum = await _context.PartNums.FindAsync(id);

            if (partNum == null)
            {
                return NotFound();
            }

            return Ok(partNum);
        }

        // PUT: api/PartNums/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPartNum([FromRoute] int id, [FromBody] PartNum partNum)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != partNum.Id)
            {
                return BadRequest();
            }

            _context.Entry(partNum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PartNumExists(id))
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

        // POST: api/PartNums
        [HttpPost]
        public async Task<IActionResult> PostPartNum([FromBody] PartNum partNum)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.PartNums.Add(partNum);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPartNum", new { id = partNum.Id }, partNum);
        }

        // DELETE: api/PartNums/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePartNum([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var partNum = await _context.PartNums.FindAsync(id);
            if (partNum == null)
            {
                return NotFound();
            }

            _context.PartNums.Remove(partNum);
            await _context.SaveChangesAsync();

            return Ok(partNum);
        }

        private bool PartNumExists(int id)
        {
            return _context.PartNums.Any(e => e.Id == id);
        }
    }
}
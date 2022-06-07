using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LabCourse.models;

namespace LabCourse.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PiketProvimitController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public PiketProvimitController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api/PiketProvimit
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PiketProvimit>>> GetPiketProvimit()
        {
            return await _context.PiketProvimit.Include(p => p.Lenda).ToListAsync();
        }

        // GET: api/PiketProvimit/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PiketProvimit>> GetPiketProvimit(int id)
        {
            var piketProvimit = await _context.PiketProvimit.FindAsync(id);

            if (piketProvimit == null)
            {
                return NotFound();
            }

            return piketProvimit;
        }

        // PUT: api/PiketProvimit/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPiketProvimit(int id, PiketProvimit piketProvimit)
        {
            if (id != piketProvimit.id)
            {
                return BadRequest();
            }

            _context.Entry(piketProvimit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PiketProvimitExists(id))
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

        // POST: api/PiketProvimit
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PiketProvimit>> PostPiketProvimit(PiketProvimit piketProvimit)
        {
            _context.PiketProvimit.Add(piketProvimit);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPiketProvimit", new { id = piketProvimit.id }, piketProvimit);
        }

        // DELETE: api/PiketProvimit/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePiketProvimit(int id)
        {
            var piketProvimit = await _context.PiketProvimit.FindAsync(id);
            if (piketProvimit == null)
            {
                return NotFound();
            }

            _context.PiketProvimit.Remove(piketProvimit);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PiketProvimitExists(int id)
        {
            return _context.PiketProvimit.Any(e => e.id == id);
        }
    }
}

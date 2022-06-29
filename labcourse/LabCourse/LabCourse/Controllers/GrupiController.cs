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
    public class GrupiController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public GrupiController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api/Grupi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Grupi>>> GetGrupi()
        {
            return await _context.Grupi.Include(g => g.Studenti).ToListAsync();
        }

        // GET: api/Grupi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Grupi>> GetGrupi(int id)
        {
            var grupi = await _context.Grupi.FindAsync(id);

            if (grupi == null)
            {
                return NotFound();
            }

            return grupi;
        }

        // PUT: api/Grupi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrupi(int id, Grupi grupi)
        {
            if (id != grupi.id)
            {
                return BadRequest();
            }

            _context.Entry(grupi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GrupiExists(id))
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

        // POST: api/Grupi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Grupi>> PostGrupi(Grupi grupi)
        {
            _context.Grupi.Add(grupi);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGrupi", new { id = grupi.id }, grupi);
        }

        // DELETE: api/Grupi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGrupi(int id)
        {
            var grupi = await _context.Grupi.FindAsync(id);
            if (grupi == null)
            {
                return NotFound();
            }

            _context.Grupi.Remove(grupi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GrupiExists(int id)
        {
            return _context.Grupi.Any(e => e.id == id);
        }
    }
}

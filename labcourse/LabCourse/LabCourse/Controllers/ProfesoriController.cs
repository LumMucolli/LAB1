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
    public class ProfesoriController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public ProfesoriController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api/Profesori
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Profesori>>> GetProfesoret()
        {
            return await _context.Profesoret.ToListAsync();
        }

        // GET: api/Profesori/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Profesori>> GetProfesori(int id)
        {
            var profesori = await _context.Profesoret.FindAsync(id);

            if (profesori == null)
            {
                return NotFound();
            }

            return profesori;
        }

        // PUT: api/Profesori/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfesori(int id, Profesori profesori)
        {
            profesori.id = id;

            _context.Entry(profesori).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfesoriExists(id))
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

        // POST: api/Profesori
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Profesori>> PostProfesori(Profesori profesori)
        {
            _context.Profesoret.Add(profesori);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfesori", new { id = profesori.id }, profesori);
        }

        // DELETE: api/Profesori/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfesori(int id)
        {
            var profesori = await _context.Profesoret.FindAsync(id);
            if (profesori == null)
            {
                return NotFound();
            }

            _context.Profesoret.Remove(profesori);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfesoriExists(int id)
        {
            return _context.Profesoret.Any(e => e.id == id);
        }
    }
}

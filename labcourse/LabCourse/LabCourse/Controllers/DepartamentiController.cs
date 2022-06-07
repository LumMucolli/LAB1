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
    public class DepartamentiController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public DepartamentiController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Departamenti>>> GetDepartamenti()
        {
            return await _context.Departamenti.ToListAsync();
        }

        // GET: api/Departamenti/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Departamenti>> GetDepartamenti(int id)
        {
            var departamenti = await _context.Departamenti.FindAsync(id);

            if (departamenti == null)
            {
                return NotFound();
            }

            return departamenti;
        }

        // PUT: api/Departamenti/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepartamenti(int id, Departamenti departamenti)
        {
            if (id != departamenti.id)
            {
                return BadRequest();
            }

            _context.Entry(departamenti).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartamentiExists(id))
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

        // POST: api/Departamenti
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Departamenti>> PostDepartamenti(Departamenti departamenti)
        {
            _context.Departamenti.Add(departamenti);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepartamenti", new { id = departamenti.id }, departamenti);
        }

        // DELETE: api/Departamenti/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepartamenti(int id)
        {
            var departamenti = await _context.Departamenti.FindAsync(id);
            if (departamenti == null)
            {
                return NotFound();
            }

            _context.Departamenti.Remove(departamenti);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DepartamentiExists(int id)
        {
            return _context.Departamenti.Any(e => e.id == id);
        }
    }
}

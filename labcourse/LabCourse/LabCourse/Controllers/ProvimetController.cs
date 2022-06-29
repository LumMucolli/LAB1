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
    public class ProvimetController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public ProvimetController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api/Provimet
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Provimet>>> GetProvimet()
        {
            return await _context.Provimet.Include(p => p.Lenda).ToListAsync();
        }

        // GET: api/Provimet/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Provimet>> GetProvimet(int id)
        {
            var provimet = await _context.Provimet.FindAsync(id);

            if (provimet == null)
            {
                return NotFound();
            }

            return provimet;
        }

        // PUT: api/Provimet/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProvimet(int id, Provimet provimet)
        {
            if (id != provimet.Id)
            {
                return BadRequest();
            }

            _context.Entry(provimet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProvimetExists(id))
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

        // POST: api/Provimet
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Provimet>> PostProvimet(Provimet provimet)
        {
            _context.Provimet.Add(provimet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProvimet", new { id = provimet.Id }, provimet);
        }

        // DELETE: api/Provimet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProvimet(int id)
        {
            var provimet = await _context.Provimet.FindAsync(id);
            if (provimet == null)
            {
                return NotFound();
            }

            _context.Provimet.Remove(provimet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProvimetExists(int id)
        {
            return _context.Provimet.Any(e => e.Id == id);
        }
    }
}

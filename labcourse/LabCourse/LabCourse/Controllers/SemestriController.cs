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
    public class SemestriController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public SemestriController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api/Semestri
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Semestri>>> GetSemestri()
        {
            return await _context.Semestri.ToListAsync();
        }

        // GET: api/Semestri/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Semestri>> GetSemestri(int id)
        {
            var semestri = await _context.Semestri.FindAsync(id);

            if (semestri == null)
            {
                return NotFound();
            }

            return semestri;
        }

        // PUT: api/Semestri/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSemestri(int id, Semestri semestri)
        {
            if (id != semestri.Id)
            {
                return BadRequest();
            }

            _context.Entry(semestri).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SemestriExists(id))
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

        // POST: api/Semestri
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Semestri>> PostSemestri(Semestri semestri)
        {
            _context.Semestri.Add(semestri);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSemestri", new { id = semestri.Id }, semestri);
        }

        // DELETE: api/Semestri/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSemestri(int id)
        {
            var semestri = await _context.Semestri.FindAsync(id);
            if (semestri == null)
            {
                return NotFound();
            }

            _context.Semestri.Remove(semestri);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SemestriExists(int id)
        {
            return _context.Semestri.Any(e => e.Id == id);
        }
    }
}

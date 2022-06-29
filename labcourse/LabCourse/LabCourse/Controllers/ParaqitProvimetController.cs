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
    public class ParaqitProvimetController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public ParaqitProvimetController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api/ParaqitProvimet
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ParaqitProvimet>>> GetParaqitProvimet()
        {
            return await _context.ParaqitProvimet.Include(p => p.Lenda).ToListAsync();
        }

        // GET: api/ParaqitProvimet/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ParaqitProvimet>> GetParaqitProvimet(int id)
        {
            var paraqitProvimet = await _context.ParaqitProvimet.FindAsync(id);

            if (paraqitProvimet == null)
            {
                return NotFound();
            }

            return paraqitProvimet;
        }

        // PUT: api/ParaqitProvimet/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParaqitProvimet(int id, ParaqitProvimet paraqitProvimet)
        {
            if (id != paraqitProvimet.Id)
            {
                return BadRequest();
            }

            _context.Entry(paraqitProvimet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParaqitProvimetExists(id))
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

        // POST: api/ParaqitProvimet
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ParaqitProvimet>> PostParaqitProvimet(ParaqitProvimet paraqitProvimet)
        {
            _context.ParaqitProvimet.Add(paraqitProvimet);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetParaqitProvimet", new { id = paraqitProvimet.Id }, paraqitProvimet);
        }

        // DELETE: api/ParaqitProvimet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParaqitProvimet(int id)
        {
            var paraqitProvimet = await _context.ParaqitProvimet.FindAsync(id);
            if (paraqitProvimet == null)
            {
                return NotFound();
            }

            _context.ParaqitProvimet.Remove(paraqitProvimet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ParaqitProvimetExists(int id)
        {
            return _context.ParaqitProvimet.Any(e => e.Id == id);
        }
    }
}

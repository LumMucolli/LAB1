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
    public class LendasController : ControllerBase
    {
        private readonly ProfesoriDB _context;

        public LendasController(ProfesoriDB context)
        {
            _context = context;
        }

        // GET: api/Lendas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lenda>>> GetLenda()
        {
            return await _context.Lenda.ToListAsync();
        }

        // GET: api/Lendas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lenda>> GetLenda(int id)
        {
            var lenda = await _context.Lenda.FindAsync(id);

            if (lenda == null)
            {
                return NotFound();
            }

            return lenda;
        }

        // PUT: api/Lendas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLenda(int id, Lenda lenda)
        {
            if (id != lenda.id)
            {
                return BadRequest();
            }

            _context.Entry(lenda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LendaExists(id))
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

        // POST: api/Lendas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Lenda>> PostLenda(Lenda lenda)
        {
            _context.Lenda.Add(lenda);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLenda", new { id = lenda.id }, lenda);
        }

        // DELETE: api/Lendas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLenda(int id)
        {
            var lenda = await _context.Lenda.FindAsync(id);
            if (lenda == null)
            {
                return NotFound();
            }

            _context.Lenda.Remove(lenda);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LendaExists(int id)
        {
            return _context.Lenda.Any(e => e.id == id);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class ProfesoriDB:DbContext
    {
        public ProfesoriDB(DbContextOptions<ProfesoriDB>options):base(options)
        {

        }

        public DbSet<Profesori> Profesoret { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class Grupi
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Zgjedhgrupin { get; set; }
        public int Studentiid { get; set; }
        public Studenti Studenti { get; set; }
    }
}

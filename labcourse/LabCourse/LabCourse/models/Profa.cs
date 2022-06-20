using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class Profa
    {
        [Key]
        public int Id { get; set; }
        public string EmriMbiemri { get; set; }
        public string Email { get; set; }
        public List<Lenda> Lendas { get; set; }
    }
}

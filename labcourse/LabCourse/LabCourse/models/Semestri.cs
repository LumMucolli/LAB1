using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class Semestri
    {
        [Key]
        public int Id { get; set; }
        public string Lokacioni { get; set; }
        public string Semestrat { get; set; }
        public string Orari { get; set; }
    }
}

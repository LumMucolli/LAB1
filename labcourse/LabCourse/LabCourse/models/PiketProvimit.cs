using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class PiketProvimit
    {
        [Key]
        public int id { get; set; }
        public int Piket { get; set; }
        public int Studentiid { get; set; }
        public int Lendaid { get; set; }
        public Lenda Lenda { get; set; }
    }
}

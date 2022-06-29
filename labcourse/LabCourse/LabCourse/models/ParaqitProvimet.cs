using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class ParaqitProvimet
    {
        [Key]
        public int Id { get; set; }
        public int Lendaid { get; set; }
        public Lenda Lenda { get; set; }
    }
}

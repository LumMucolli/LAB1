using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class Provimet
    {
        [Key]
        public int Id { get; set; }
        public int Lendaid { get; set; }
        public Lenda Lenda { get; set; }
        public string Kategoria { get; set; }
        public string Profesori { get; set; }
        public string DataProvimit { get; set; }
        public string KohaProvimit { get; set; }
    }
}

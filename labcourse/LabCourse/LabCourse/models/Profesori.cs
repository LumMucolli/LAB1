using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.models
{
    public class Profesori
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string EmriMbiemri { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }
        public int departamenti { get; set; }
        public int lenda { get; set; }
    }
}

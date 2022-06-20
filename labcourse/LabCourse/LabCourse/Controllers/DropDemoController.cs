using LabCourse.models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LabCourse.Controllers
{
    public class DropDemoController : Controller
    {
        private ProfesoriDB _context;
        public DropDemoController(ProfesoriDB context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            List<Profa> li = new List<Profa>();
            li = _context.Profa.ToList();
            ViewBag.listofitems = li;
            return View();
        }
    }
}

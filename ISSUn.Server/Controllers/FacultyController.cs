using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ISSUn.Server.Models;

namespace ISSUn.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FacultyController : ControllerBase
{
    private readonly Datab _context;
    
    public FacultyController(Datab context)
    {
        _context = context;
    }

    [HttpGet("{id}")]
    public IActionResult GetFaculty(int id)
    {
        var faculty = _context.Faculties.FirstOrDefault(f => f.Id == id);
        var universituImg = _context.Universities.FirstOrDefault(u => u.Id == faculty.IdU).Photo;
        var specialities = _context.Specialities.Where(s => s.IdF == id).ToList();

        var result = new 
        {
            faculty,
            universituImg,
            specialities
        };

        return new JsonResult(result);  
    }
}

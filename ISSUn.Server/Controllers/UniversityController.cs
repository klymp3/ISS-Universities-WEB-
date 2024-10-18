using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ISSUn.Server.Models;

namespace ISSUn.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UniversityController : ControllerBase
{
    private readonly Datab _context;
    
    public UniversityController(Datab context)
    {
        _context = context;
    }

    [HttpGet("{id}")]
    public IActionResult GetUniversity(int id)
    {
        var university = _context.Universities.FirstOrDefault(u => u.Id == id);
        

        var faculties = _context.Faculties.Where(f => f.IdU == id).ToList();

        var result = new 
        {
            university,
            faculties
        };

        return new JsonResult(result);  
    }
}

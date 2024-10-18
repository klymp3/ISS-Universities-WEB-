using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ISSUn.Server.Models;

namespace ISSUn.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UniversitiesController : ControllerBase
{
    private readonly Datab _context;
    
    public UniversitiesController(Datab context)
    {
        _context = context;
    }

    [HttpGet("list")]
    public IActionResult GetUniversities()
    {
        var universities = _context.Universities.Select(university => new 
        {
            id = university.Id,
            nameU = university.NameU,
            photo = university.Photo,
            countS = _context.Faculties
            .Where(faculty => faculty.IdU == university.Id)
            .SelectMany(faculty => _context.Specialities.Where(speciality => speciality.IdF == faculty.Id))
            .Count()
        }).ToList();
        return new JsonResult(universities);
    }
}

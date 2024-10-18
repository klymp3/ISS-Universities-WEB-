using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace ISSUn.Server.Models;

[Table("Faculty")]
public class Faculty
{
    [Key]
    public int Id { get; set; }
    [Column("NameF")]
    public string NameF { get; set; }
    [Column("DescriptionF")]
    public string DescriptionF { get; set; }
    [Column("IdU")]
    public int IdU { get; set; }
    public Faculty() { }
    public Faculty(string nameF, string descriptionF, int idU)
    {
        NameF = nameF;
        DescriptionF = descriptionF;
        IdU = idU;
    }
}

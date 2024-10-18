using Microsoft.EntityFrameworkCore;

namespace ISSUn.Server.Models;

public class Datab : DbContext
{
    string connect = @"Data Source=Klymp3;Initial Catalog=ВУЗЫ;Integrated Security=True;Trust Server Certificate=True";
    public DbSet<University> Universities { get; set; }
    public DbSet<Faculty> Faculties { get; set; }
    public DbSet<Speciality> Specialities { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(connect);
    }
}

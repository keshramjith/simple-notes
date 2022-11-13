using Microsoft.EntityFrameworkCore;
using Npgsql.EntityFrameworkCore;

namespace sn_backend_dotnet6.Models;

public class NoteContext : DbContext
{
  public NoteContext(DbContextOptions<NoteContext> options) : base(options)
  {}

  public DbSet<Note> Notes { get; set; }

  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
  => optionsBuilder.UseNpgsql(@"Server=localhost;Database=postgres;Port=5432;Username=kesh;Password=secret");
}
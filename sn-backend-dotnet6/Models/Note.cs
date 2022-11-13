using System.ComponentModel.DataAnnotations.Schema;
namespace sn_backend_dotnet6.Models;

[Table("note")]
public class Note
{

  public long id { get; set; }

  public string? title { get; set; }

  public string? description { get; set; }
}
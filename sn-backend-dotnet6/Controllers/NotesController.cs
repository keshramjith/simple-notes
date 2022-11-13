using Microsoft.AspNetCore.Mvc;
using sn_backend_dotnet6.Models;

namespace sn_backend_dotnet6.Controllers;

[ApiController]
[Route("[controller]")]
public class NotesController {

  private readonly NoteContext context;

  public NotesController(NoteContext context)
  {
    this.context = context;
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Note>> GetNote(long id)
  {
    var Note = await context.Notes.FindAsync(id);
    if (Note == null) 
    {
      return new Note();
    }
    return Note;
  }

  // [HttpGet]
  // public async Task<ActionResult<Note>> hello() {
  //   var foundNotes = await _noteContext.
  //   return foundNotes;
  // }
}
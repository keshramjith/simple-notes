using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using sn_backend_dotnet6.Models;

namespace sn_backend_dotnet6.Controllers;

[ApiController]
[Route("notes")]
public class NotesController {

  private readonly NoteContext context;

  public NotesController(NoteContext context)
  {
    this.context = context;
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult> deleteNote(long id)
  {
    Note? note = await context.Notes.FindAsync(id);
    if (note == null)
    {
      return new NotFoundResult();
    }
    context.Notes.Remove(note);
    await context.SaveChangesAsync();
    return new NoContentResult();
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Note>> GetNote(long id)
  {
    var note = await context.Notes.FindAsync(id);
    if (note == null) 
    {
      return new NotFoundResult();
    }
    return note;
  }

  [HttpGet]
  public List<Note> GetAllNotes() {
    var foundNotes = context.Notes.ToList();
    return foundNotes;
  }
}
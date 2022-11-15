using Microsoft.AspNetCore.Mvc;
using sn_backend_dotnet6.Models;

namespace sn_backend_dotnet6.Controllers;

[ApiController]
[Route("[controller]")]
public class NotesController : ControllerBase {

  private readonly PostgresContext context;

  public NotesController(PostgresContext context)
  {
    this.context = context;
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult> deleteNote(long id)
  {
    Note? note = await context.Notes.FindAsync(id);
    if (note == null)
    {
      return NotFound();
    }
    context.Notes.Remove(note);
    await context.SaveChangesAsync();
    return NoContent();
  }

  [HttpPut("{id}")]
  public async Task<ActionResult> UpdateNote(Note note)
  {
    var NoteFromDB = await context.Notes.FindAsync(note.Id);
    if (NoteFromDB == null)
    {
      return NotFound();
    }
    NoteFromDB.Title = note.Title;
    NoteFromDB.Description = note.Description;
    await context.SaveChangesAsync();
    return Ok();
  }

  [HttpPost]
  public async Task<ActionResult<Note>> CreateNote(Note note)
  {
    context.Notes.Add(note);
    await context.SaveChangesAsync();
    return Ok(note);
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Note>> GetNote(long id)
  {
    var note = await context.Notes.FindAsync(id);
    if (note == null) 
    {
      return NotFound();
    }
    return Ok(note);
  }

  [HttpGet]
  public List<Note> GetAllNotes() {
    var foundNotes = context.Notes.ToList();
    return foundNotes;
  }
}
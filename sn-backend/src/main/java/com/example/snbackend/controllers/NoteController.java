package com.example.snbackend.controllers;

import com.example.snbackend.objects.Note;
import com.example.snbackend.repository.NoteRepository;
import com.example.snbackend.services.NoteServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/notes")
public class NoteController {

    private final NoteServiceImpl noteService;

    public NoteController(NoteServiceImpl noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Note>> getNotes() {
       return new ResponseEntity<>(noteService.getNotes(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
       return new ResponseEntity<>(noteService.saveNote(note), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Note>> getNote(@PathVariable Long id) {
        return new ResponseEntity<>(noteService.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> putNote(@PathVariable Long id, @RequestBody Note note) {
        return (noteService.doesNoteExist(id)) ?
                new ResponseEntity<>(noteService.saveNote(note), HttpStatus.OK)
                :
                new ResponseEntity<>(noteService.saveNote(note), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }
}

package com.example.snbackend.controllers;

import com.example.snbackend.objects.Note;
import com.example.snbackend.repository.NoteRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/notes")
public class NoteController {
    private final NoteRepository noteRepository;

    public NoteController(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Note>> getNotes() {
       return new ResponseEntity<>(noteRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note) {
       return new ResponseEntity<>(noteRepository.save(note), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Note>> getNote(@PathVariable Long id) {
        return new ResponseEntity<>(noteRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> putNote(@PathVariable Long id, @RequestBody Note note) {
        return (noteRepository.existsById(id)) ?
                new ResponseEntity<>(noteRepository.save(note), HttpStatus.OK) :
                new ResponseEntity<>(noteRepository.save(note), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable Long id) {
        noteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

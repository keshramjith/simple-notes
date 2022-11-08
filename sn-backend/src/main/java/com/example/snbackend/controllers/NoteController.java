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
    public ResponseEntity<Note> getNote(@RequestParam Long id) {
        Optional<Note> foundNote = noteRepository.findById(id);
        if (foundNote.isPresent()) {
            return new ResponseEntity<>(foundNote.get(), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(new Note(), HttpStatus.NOT_FOUND);
        }
    }
}

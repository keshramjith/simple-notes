package com.example.snbackend.services;

import com.example.snbackend.objects.Note;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface NoteService {
    Note saveNote(Note note);

    Optional<Note> findById(Long id);

    Iterable<Note> getNotes();

    void deleteNote(Long id);

    boolean doesNoteExist(Long id);
}

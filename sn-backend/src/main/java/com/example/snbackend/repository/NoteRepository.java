package com.example.snbackend.repository;


import com.example.snbackend.objects.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, Long> {
}
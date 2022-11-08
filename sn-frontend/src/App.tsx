import React, { useState, useEffect } from "react";
import "./App.css";
import NoteComponent from "./components/Note";
import Note from "./types/Note";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const resp = await fetch("http://localhost:8080/notes");
      const notes: Note[] = await resp.json();
      setNotes(notes);
    };
    fetchNotes();
  }, []);

  return (
    <div className="App">
      <h1>List of notes</h1>
      {notes.map(({ id, title, description }) => (
        <NoteComponent
          key={id}
          id={id}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import "./App.css";

type Note = {
  title: string;
  description: string;
};

const App = () => {
  useEffect(() => {
    const fetchNotes = async () => {
      const note: Note = { title: "Test", description: "eahif" };
      const resp = await fetch("http://localhost:8080/notes", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const msg = await resp.json();
      console.log("msg: ", msg);
    };
    fetchNotes();
  }, []);

  return (
    <div className="App">
      <h1>List of notes notes</h1>
    </div>
  );
};

export default App;

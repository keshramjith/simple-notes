import { useNavigate, useLoaderData } from "react-router-dom";

import "./App.css";
import NoteComponent from "./components/Note";
import Note from "./types/Note";

interface NotePromise {
  notes: Note[];
}

export const loader = async (): Promise<NotePromise> => {
  const resp = await fetch("http://localhost:8080/notes");
  const notes: Note[] = await resp.json();
  return { notes };
};

const App = () => {
  const { notes } = useLoaderData() as NotePromise;
  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>List of notes</h1>
      <button onClick={() => navigate("/create")}>Create a note</button>
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

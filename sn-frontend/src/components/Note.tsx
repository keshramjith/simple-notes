import { useNavigate } from "react-router-dom";

import Note from "../types/Note";

const NoteComponent = ({ id, title, description }: Note): JSX.Element => {
  const navigate = useNavigate();

  const deleteNote = async (id: number) => {
    await fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: "1rem",
        padding: "0.5rem",
        width: "20rem",
      }}
    >
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div>
        <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        <button onClick={() => deleteNote(id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteComponent;

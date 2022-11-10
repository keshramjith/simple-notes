import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import NoteForm from "../../types/NoteForm";

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const { register, handleSubmit } = useForm<NoteForm>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async (id: string) => {
      const resp = await fetch(`http://localhost:8080/notes/${id}`);
      const fetchedNote = await resp.json();
      const { title, description } = fetchedNote;
      setTitle(title);
      setDescription(description);
    };
    id && fetchNote(id);
  }, []);

  const editNote = async (formData: NoteForm) => {
    const resp = await fetch("http://localhost:8080/notes", {
      method: "PUT",
      body: JSON.stringify({ id, formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const editedNote = await resp.json();
    editedNote && navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(editNote)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Title:
            <input value={title} {...register("title")} />
          </label>
          <label>
            Description:
            <input value={description} {...register("description")} />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default EditPage;

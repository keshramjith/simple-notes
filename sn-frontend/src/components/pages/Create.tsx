import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NoteForm from "../../types/NoteForm";

const CreatePage = () => {
  const { register, handleSubmit } = useForm<NoteForm>();
  const navigate = useNavigate();

  const createNote = async (formData: NoteForm) => {
    const resp = await fetch("http://localhost:8080/notes", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const createdNote = await resp.json();
    if (createdNote) {
      navigate("/");
    }
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
      <form onSubmit={handleSubmit(createNote)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Title:
            <input {...register("title", { required: true })} />
          </label>
          <label>
            Description:
            <input {...register("description")} />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default CreatePage;

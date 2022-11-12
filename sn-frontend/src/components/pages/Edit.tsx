import {
  LoaderFunction,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useForm } from "react-hook-form";

import NoteForm from "../../types/NoteForm";
import Note from "../../types/Note";

export const loader: LoaderFunction = async ({ request, params }) => {
  const { id } = params;
  const resp = await fetch(`http://localhost:8080/notes/${id}`);
  const fetchedNote = await resp.json();
  return { fetchedNote };
};

const EditPage = () => {
  const { fetchedNote } = useLoaderData() as { fetchedNote: Note };
  const { title, description } = fetchedNote;

  const { id } = useParams();
  const { register, handleSubmit } = useForm<NoteForm>();
  const navigate = useNavigate();

  const editNote = async (formData: NoteForm) => {
    const resp = await fetch(`http://localhost:8080/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify({ id, ...formData }),
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
            <input
              defaultValue={title}
              {...register("title", { required: true })}
            />
          </label>
          <label>
            Description:
            <input defaultValue={description} {...register("description")} />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default EditPage;

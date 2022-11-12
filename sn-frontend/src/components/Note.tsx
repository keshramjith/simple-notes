import { Form, useNavigate } from "react-router-dom";

import Note from "../types/Note";

const NoteComponent = ({ id, title, description }: Note): JSX.Element => {
  const navigate = useNavigate();

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
        <Form method="delete" action={`/delete/${id}`}>
          <button type="submit">Delete</button>
        </Form>
      </div>
    </div>
  );
};

export default NoteComponent;

import Note from "../types/Note";

const NoteComponent = ({ id, title, description }: Note): JSX.Element => {
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
        <button onClick={() => console.log(`move to /${id}`)}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default NoteComponent;

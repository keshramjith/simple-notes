import { ActionFunction, redirect } from "react-router-dom";

export const action: ActionFunction = async ({ params }) => {
  const { id } = params;
  await fetch(`http://localhost:8080/notes/${id}`, {
    method: "DELETE",
  });
  return redirect("/");
};

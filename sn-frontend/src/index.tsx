import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { loader as rootLoader } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePage from "./components/pages/Create";
import EditPage, { loader as editLoader } from "./components/pages/Edit";
import { action as deleteAction } from "./components/pages/Delete";

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <App />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
    loader: editLoader,
  },
  {
    path: "/delete/:id",
    action: deleteAction,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

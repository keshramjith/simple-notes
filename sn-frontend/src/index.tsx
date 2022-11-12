import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { loader as rootLoader } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePage from "./components/pages/Create";
import EditPage from "./components/pages/Edit";

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
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

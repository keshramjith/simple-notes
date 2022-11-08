import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    const fetchNotes = async () => {
      const resp = await fetch("http://localhost:8080/test");
      const msg = await resp.json();
      console.log("msg: ", msg);
    };
    fetchNotes();
  }, []);

  return (
    <div className="App">
      <h1>List of notes notes</h1>
    </div>
  );
};

export default App;

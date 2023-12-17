import { useState, useEffect } from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import Navbar from "./Navbar";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const newNote = (title, desc) => {
    setNotes([...notes, { id: notes.length + 1, title: title, desc: desc }]);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data) {
      setNotes(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <div className="container">
      <Navbar notes={notes} />
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNote newNote={newNote} />
    </div>
  );
};

export default NoteApp;

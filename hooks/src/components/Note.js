import { useContext } from "react";
import {NotesContext} from "../contexts/NotesContext";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  const removeNote = (id) => {
    dispatch({
      type: "REMOVE_NOTE",
      id,
    });
    // setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <li onClick={() => removeNote(note.id)} key={note.id}>
      <h1 className="title"> {note.title}</h1>
      <p className="desc"> {note.desc}</p>
    </li>
  );
};

export default Note;

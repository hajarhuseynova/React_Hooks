import { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Note from "./Note";

const NoteList = () => {
  const { dispatch, notes } = useContext(NotesContext);

  return notes.length > 0 ? (
    <div className="note-list">
      <ul>
        {notes.map((note) => {
          return <Note note={note} key={note.id} dispatch={dispatch} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Empty!</div>
  );
};

export default NoteList;

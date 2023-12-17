import { useState, useEffect } from "react";

const Note = ({ note, removeNote }) => {
  return (
    <li onClick={() => removeNote(note.id)} key={note.id}>
      <h1 className="title"> {note.title}</h1>
      <p className="desc"> {note.desc}</p>
    </li>
  );
};

export default Note;

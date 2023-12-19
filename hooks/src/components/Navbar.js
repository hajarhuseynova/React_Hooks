import { useContext } from "react";
import {NotesContext} from "../contexts/NotesContext";

const Navbar = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="navbar">
      <h1>NoteApp</h1>
      <p>Total:{notes.length}</p>
    </div>
  );
};
export default Navbar;

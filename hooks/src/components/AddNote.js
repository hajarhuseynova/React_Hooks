import { useContext, useState } from "react";
import { NotesContext } from "../contexts/NotesContext";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { dispatch, notes } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      id: notes.length + 1,
      title: title,
      desc: desc,
    });
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input type="submit" value="Add Note" />
    </form>
  );
};

export default AddNote;

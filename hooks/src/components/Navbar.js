import { useState, useEffect } from "react";

const Navbar = ({ notes }) => {
  return (
    <div className="navbar">
      <h1>NoteApp</h1>
      <p>Total:{notes.length}</p>
    </div>
  );
};
export default Navbar;

import React from "react";
import { useReducer, useEffect } from "react";
import NotesReducer from "../reducers/NotesReducer";
export const NotesContext = React.createContext();

const NotesContextProvider = (props) => {
  const [notes, dispatch] = useReducer(NotesReducer, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data) {
      dispatch({
        type: "POPULATE_NOTES",
        notes: data,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ dispatch, notes }}>
      {props.children}
    </NotesContext.Provider>
  );
};
export default NotesContextProvider;

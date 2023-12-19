const NotesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTE":
      return [
        ...state,
        { id: action.id, title: action.title, desc: action.desc },
      ];
    case "REMOVE_NOTE":
      return state.filter((note) => note.id !== action.id);
    default:
      return state;
  }
};
export default NotesReducer;

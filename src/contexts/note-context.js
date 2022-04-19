import { createContext, useContext, useState, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";


const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer,{
    noteInTrash:false
  })
  const [noteState, setNoteState] = useState([]);
  const [input, setInput] = useState({
    title: "",
    desc: "",
    noteInTrash:false,
  });

  const [archiveState, setArchiveState] = useState([]);

  return (
    <NoteContext.Provider
      value={{
        noteState,
        setNoteState,
        input,
        setInput,
        archiveState,
        setArchiveState,
        state,
        dispatch
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };

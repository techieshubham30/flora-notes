import { createContext, useContext, useReducer, useState } from "react";


const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  
  const [noteState, setNoteState] = useState([]);
  const [input, setInput] = useState({
    title: "",
    desc: "",
  });
  
  return (
    <NoteContext.Provider value={{ noteState,setNoteState, input, setInput }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };

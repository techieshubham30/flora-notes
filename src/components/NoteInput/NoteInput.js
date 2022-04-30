import "./note-input.css";
import { useAuth } from "../../contexts/auth-context";
import { useNote } from "../../contexts/note-context";
import { addNoteService } from "../../services/addNoteService";
import { MdOutlineColorLens, MdLabelOutline } from "react-icons/md";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useState } from "react";
const NoteInput = () => {
  const { setNoteState, input, setInput} = useNote();
  const [isColorPalette,setColorPalette] = useState(false)
  const { auth } = useAuth();

  const addNoteHandler = async (token) => {
    try {
      const notes = await addNoteService(token, {
        ...input,
      });
      setNoteState(notes);

      setInput({
        title: "",
        desc: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`note-input-container shadow-box ${input.noteColor}`} >
      <input
        type="text"
        className={`note-title ${input.noteColor}`}
        placeholder="Title"
        value={input.title}
        onChange={(e) =>
          setInput({
            ...input,
            title: e.target.value,
          })
        }
  
      />
      <textarea
        className={`take-notes ${input.noteColor}`}
        placeholder="Take a note..."
        value={input.desc}
        onChange={(e) =>
          setInput({
            ...input,
            desc: e.target.value,
          })
        }

      />
      <div className="btn-grp">
        <div className="tools">
          <div className="color-palette">
            <MdOutlineColorLens onClick={()=>setColorPalette(!isColorPalette)} />
            <ColorPalette
              isColorPalette={isColorPalette}
              setColorPalette={setColorPalette}
              input={input}
              setInput={setInput}
            />
          </div>

          <MdLabelOutline />
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            addNoteHandler(auth.token);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export { NoteInput };

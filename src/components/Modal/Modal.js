import "./modal.css";
import { MdOutlineColorLens, MdLabelOutline } from "react-icons/md";
import { useAuth } from "../../contexts/auth-context";
import { useNote } from "../../contexts/note-context";
import { updateNoteService } from "../../services/updateNoteService";
import { useState } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";

const Modal = ({
  currNote,
  setEditing,
  isEditing,
  updateNote,
  setUpdateNote,
}) => {
  const {
    auth: { token },
  } = useAuth();
  const { setNoteState } = useNote();
  const [isColorPalette, setColorPalette] = useState(false);
  const updateNoteHandler = async (token, note, id) => {
    const res = await updateNoteService(token, note, id);
    setNoteState(res);
  };
  return (
    <div className={`edit-note-container shadow-box ${updateNote.noteColor}`}>
      <input
        type="text"
        className={`note-title ${updateNote.noteColor}`}
        placeholder="Title"
        value={updateNote.title}
        onChange={(e) =>
          setUpdateNote({
            ...updateNote,
            title: e.target.value,
          })
        }
      />
      <textarea
        className={`take-notes  ${updateNote.noteColor}`}
        placeholder="Take a note..."
        value={updateNote.desc}
        onChange={(e) =>
          setUpdateNote({
            ...updateNote,
            desc: e.target.value,
          })
        }
      />

      <div className="btn-grp">
        <div className="tools">
          <div className="color-palette" onClick={()=>setColorPalette(!isColorPalette)}>
            <MdOutlineColorLens />
            <ColorPalette
              isEditing={isEditing}
              setUpdateNote={setUpdateNote}
              isColorPalette={isColorPalette}
              setColorPalette={setColorPalette}
            />
          </div>

          <MdLabelOutline />
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            updateNoteHandler(token, updateNote, updateNote._id);
            setEditing(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export { Modal };

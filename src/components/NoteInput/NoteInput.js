import "./note-input.css";
import { useAuth } from "../../contexts/auth-context";
import { useNote } from "../../contexts/note-context";
import { addNoteService } from "../../services/addNoteService";
const NoteInput = () => {
  const { noteState, setNoteState, input, setInput } = useNote();
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
    <div className="note-input-container shadow-box">
      <input
        type="text"
        className="note-title"
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
        className="take-notes"
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

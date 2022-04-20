import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useNote } from "../../contexts/note-context";
import { CgTrash } from "react-icons/cg";
import "./trash.css";
import { useAuth } from "../../contexts/auth-context";
import { deleteNoteService } from "../../services/deleteNoteService";
const Trash = () => {
  const { noteState, setNoteState } = useNote();
  const {
    auth: { token },
  } = useAuth();
  const deleteNoteHandler = async (id, token) => {
    const notes = await deleteNoteService(id, token);
    setNoteState(notes);
  };
  return (
    <div className="trash-container">
      <Sidebar />
      <div className="trash-notes">
        {noteState.map((item) => {
          return (
            item.noteInTrash && (
              <div className="text-only-card" key={item._id}>
                <div className="card-text-container">
                  <div className="card-title ">
                    <div>{item.title}</div>
                  </div>
                  <div className="about-card ">{item.desc}</div>
                  <div className="card-action-container">
                    <CgTrash
                      className="card-icon"
                      onClick={() => deleteNoteHandler(item._id, token)}
                    />
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export { Trash };

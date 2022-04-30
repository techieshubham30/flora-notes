import "./note-card.css";
import { CgTrash } from "react-icons/cg";
import {
  MdArchive,
  MdOutlineColorLens,
  MdUnarchive,
  MdEdit,
} from "react-icons/md";
import { useNote } from "../../contexts/note-context";
import { useAuth } from "../../contexts/auth-context";
import { archiveNoteService } from "../../services/archiveNoteService";
import { unArchiveNoteService } from "../../services/unArchiveNoteService";
import { restoreArchiveService } from "../../services/restoreArchiveService";
import { updateNoteService } from "../../services/updateNoteService";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
const NoteCard = (item) => {
  const { setNoteState, setArchiveState, archiveState } = useNote();
  const [isEditing, setEditing] = useState(false);
  const {
    auth: { token },
  } = useAuth();
  const [updateNote, setUpdateNote] = useState(item.note);
  const inArchive = archiveState?.find(
    (eachNote) => eachNote._id === item.note._id
  );

  const addArchiveHandler = async (token, note, id) => {
    const res = await archiveNoteService(token, note, id);
    setArchiveState(res.archives);
    setNoteState(res.notes);
  };

  const unArchiveHandler = async (token, id) => {
    const res = await unArchiveNoteService(token, id);

    setArchiveState(res);
  };

  const restoreArchiveHandler = async (token, id) => {
    const res = await restoreArchiveService(token, id);
    setArchiveState(res.archives);
    setNoteState(res.notes);
  };

  const updateNoteHandler = async (token, note, id) => {
    const res = await updateNoteService(token, note, id);
    setNoteState(res);
  };
  console.log(item);

  return (
    <div className={`text-only-card shadow-box ${item.note.noteColor}`}>
      {isEditing && (
        <Modal
          currNote={item.note}
          setEditing={setEditing}
          isEditing={isEditing}
          updateNote={updateNote}
          setUpdateNote={setUpdateNote}
        />
      )}
      <div className="card-text-container">
        <div className="card-title ">
          <div>{item.note.title}</div>
        </div>

        <div className="about-card ">{item.note.desc}</div>
        <div className="card-action-container">
          {!inArchive && (
            <MdEdit
              className="card-icon"
              onClick={() => setEditing((edit) => !edit)}
            />
          )}

          {inArchive ? (
            <MdUnarchive
              className="card-icon"
              onClick={() => restoreArchiveHandler(token, item.note._id)}
            />
          ) : (
            <MdArchive
              className="card-icon"
              onClick={() =>
                addArchiveHandler(token, updateNote, item.note._id)
              }
            />
          )}
          {inArchive ? (
            <CgTrash
              className="card-icon"
              onClick={() => unArchiveHandler(token, item.note._id)}
            />
          ) : (
            <CgTrash
              className="card-icon"
              onClick={() =>
                updateNoteHandler(
                  token,
                  {
                    ...updateNote,
                    noteInTrash: true,
                  },
                  item.note._id
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export { NoteCard };

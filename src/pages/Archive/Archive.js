import "./archive.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useNote } from "../../contexts/note-context";

const Archive = () => {
    const {archiveState} = useNote();
  return (
    <div className="archive-container">
      <Sidebar />
      <div className="archive-notes">
        {archiveState.map((item) => {
          return <NoteCard note={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export { Archive };

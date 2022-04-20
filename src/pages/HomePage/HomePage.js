import { NoteInput } from "../../components/NoteInput/NoteInput";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useNote } from "../../contexts/note-context";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import "./home-page.css";
const HomePage = () => {
  const { noteState } = useNote();

  return (
    <div className="home-page">
      <Sidebar />
      <div className="notes-container">
        <NoteInput />
        <div className="notes-wrapper">
          {noteState.map((item) => {
            return !item.noteInTrash && <NoteCard note={item} key={item._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { HomePage };

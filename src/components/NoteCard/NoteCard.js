import "./note-card.css";
import {CgTrash} from "react-icons/cg";
import {MdArchive,MdOutlineColorLens} from "react-icons/md";
import { deleteNoteService } from "../../services/deleteNoteService";
import { useNote } from "../../contexts/note-context";
import { useAuth } from "../../contexts/auth-context";
const NoteCard = (item) => {
  const {setNoteState} = useNote();
  const {auth:{token}} = useAuth();
  

    const deleteNoteHandler= async (id,token)=>{
        const notes = await deleteNoteService(id,token);
        setNoteState(notes);
    };
   
  return (
    <div className="text-only-card">
      <div className="card-text-container">
        <div className="card-title ">
          <div>{item.note.title}</div>
        </div>

        <div className="about-card ">
          
              {
                  item.note.desc
              }
          
        </div>
        <div className="card-action-container">
           <MdOutlineColorLens className="card-icon"/>
          <MdArchive className="card-icon"/>
          <CgTrash className="card-icon"  onClick={()=>deleteNoteHandler(item.note._id,token)} />
        
        </div>
      </div>
    </div>
  );
};

export { NoteCard };

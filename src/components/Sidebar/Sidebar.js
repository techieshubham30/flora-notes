import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { CgNotes, CgTrash } from "react-icons/cg";
import { MdLabelOutline, MdOutlineArchive } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <NavLink to="/" className="sidebar-item">
          <CgNotes className="icon" />
          <span>Notes</span>
        </NavLink>

        <NavLink to="/" className="sidebar-item">
          <MdLabelOutline />
          <span>Labels</span>
        </NavLink>

        <NavLink to="/" className="sidebar-item">
          <MdOutlineArchive />
          <span>Archive</span>
        </NavLink>
        <NavLink to="/" className="sidebar-item">
          <CgTrash className="icon" />
          <span>Trash</span>
        </NavLink>
      </div>
    </div>
  );
};

export { Sidebar };

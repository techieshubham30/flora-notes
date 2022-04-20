import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { CgNotes, CgTrash } from "react-icons/cg";
import { MdLabelOutline, MdOutlineArchive } from "react-icons/md";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-items">
        <NavLink
          to="/home-page"
          className="sidebar-item"
          activeClassName="active"
        >
          <CgNotes className="icon" />
          <span>Notes</span>
        </NavLink>

        <NavLink to="/" className="sidebar-item" activeClassName="active">
          <MdLabelOutline />
          <span>Labels</span>
        </NavLink>

        <NavLink
          to="/archive"
          className="sidebar-item"
          activeClassName="active"
        >
          <MdOutlineArchive />
          <span>Archive</span>
        </NavLink>
        <NavLink to="/trash" className="sidebar-item" activeClassName="active">
          <CgTrash className="icon" />
          <span>Trash</span>
        </NavLink>
      </div>
    </div>
  );
};

export { Sidebar };

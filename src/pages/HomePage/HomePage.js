import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./home-page.css";
const HomePage=()=>{
    return(
        <div className="main-page">
             <Sidebar/>
            <div className="notes-container">
                <h1>notes</h1>
            </div>
        </div>
    );
}

export {HomePage};
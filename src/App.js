import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import {Routes, Route} from "react-router-dom";
import { Signin } from "./pages/LandingPage/Signin/Signin";
import { Signup } from "./pages/LandingPage/Signup/Signup";


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route path="/" element={<LandingPage/>}/>
         <Route path="/signin" element={<Signin/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;

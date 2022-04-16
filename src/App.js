import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./pages/LandingPage/Signin/Signin";
import { Signup } from "./pages/LandingPage/Signup/Signup";
import { PrivateRoute } from "./privateRoute/PrivateRoute";
import { HomePage } from "./pages/HomePage/HomePage";
import MockmanEs from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<MockmanEs/>}/>
        <Route
          path="/home-page"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

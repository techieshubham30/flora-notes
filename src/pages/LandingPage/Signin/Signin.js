import { Link } from "react-router-dom";
import "./signin.css";
const Signin=()=>{
    return (
        <div className="login-container">
        <h1 className="login-title">LOGIN</h1>
        <form className="display-flex-column">

           <input type="email" className="form-field" placeholder="Enter your email here" required/>
           <input type="password" className="form-field" placeholder="Enter your password here" required/>
           <button className="login-btn">LOGIN</button>
           <p>Not registered yet?<Link to="/signup" className="signup-link">Create your account</Link></p>
        </form>
    </div>
    );
}

export {Signin};
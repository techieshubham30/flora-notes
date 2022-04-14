import "./footer.css";
import {FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">Made by Shubham Singh</div>
      <ul className="social-icons">
        <li className="footer-list-item">
          <a href="https://github.com/techieshubham30" class="github-link">
            <FaGithub className="social-link"/>
          </a>
        </li>
        <li className="footer-list-item">
          <a href="https://twitter.com/shubhamsingh088" class="twitter">
            <FaTwitter className="social-link"/>
          </a>
        </li>
        <li className="footer-list-item">
          <a
            href="https://www.linkedin.com/in/techieshubham/"
            className="linkedin-link"
          >
            <FaLinkedin className="social-link"/>
          </a>
        </li>
      </ul>
      <div className="footer-copy">© 2022 Flora Designs</div>
    </footer>
  );
};

export { Footer };

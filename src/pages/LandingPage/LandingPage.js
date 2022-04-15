import "./landing-page.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <main className="main-container">
      <section className="main-content">
        <div className="page-title">
          Meet your modern{" "}
          <span className="primary-color">Note Taking App</span>{" "}
        </div>
        <div className="page-info">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency without any efforts.
        </div>
        <Link to="/signin">
          <button className="join-now-btn">
            <span> Join Now</span>
            <FaAngleRight className="angle-right-icon" />
          </button>
        </Link>
        <Link to="/signup" className="link">
          Already have an account?
        </Link>
      </section>

      <section className="landing-image">
        <img src="assets/svg/landing-image.svg" alt="image" />
      </section>
    </main>
  );
};

export { LandingPage };

import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginUserModal from "../components/modals/LoginUserModal";
import RegisterUserModal from "../components/modals/RegisterUserModal";

export const ToggleModalContext: any = createContext({});
const LandingPage = () => {
  const [showLoginUserModal, setShowLoginUserModal] = useState(false);
  const [showRegisterUserModal, setShowRegisterUserModal] = useState(false);

  const toggleLoginModal = () => {
      setShowLoginUserModal(showLoginUserModal => !showLoginUserModal);
    },
    toggleRegisterModal = () => {
      setShowRegisterUserModal(showRegisterUserModal => !showRegisterUserModal);
    };

  return (
    <div className="site">
      <div className="site-background-blur">
        <div className="container">
          <header>
            <div className="logo">
              <span className="primary-dark">OVER</span>LOAD
            </div>
            <nav>
              <div
                onClick={toggleLoginModal}
                className="site-nav-link link pointer"
              >
                LOG IN
              </div>
              <ToggleModalContext.Provider
                value={{ toggleLoginModal, toggleRegisterModal }}
              >
                {showLoginUserModal ? <LoginUserModal /> : null}
                {showRegisterUserModal ? <RegisterUserModal /> : null}
              </ToggleModalContext.Provider>
            </nav>
          </header>
          <main>
            <h1 className="site-heading">Your Personal Fitness Database</h1>
            <h2 className="app-details-preview">
              Record your training. View tailor made logs, graphs, diagrams and
              suggestions for your individual data.
            </h2>
            <h3>Plans starting at $3.99/month.</h3>
            <button className="cta-btn" onClick={toggleRegisterModal}>
              START YOUR FREE TRIAL
            </button>
            <h4>Free trial available for new subscribers only.</h4>
            <Link className="learn-more-link link" to="/details">
              View Details
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
                </svg>
              </div>
            </Link>
          </main>
          <footer>
            <a
              className="photo-cred"
              style={{
                backgroundColor: "black",
                color: "white",
                textDecoration: "none",
                padding: "4px 6px",
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: 1.2,
                display: "inline-block",
                borderRadius: "3px"
              }}
              href="https://unsplash.com/@aloragriffiths?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
              target="_blank"
              rel="noopener noreferrer"
              title="Download free do whatever you want high-resolution photos from Alora Griffiths"
            >
              <span style={{ display: "inline-block", padding: "2px 3px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    height: "12px",
                    width: "auto",
                    position: "relative",
                    verticalAlign: "middle",
                    top: "-2px",
                    fill: "white"
                  }}
                  viewBox="0 0 32 32"
                >
                  <title>unsplash-logo</title>
                  <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" />
                </svg>
              </span>
              <span style={{ display: "inline-block", padding: "2px 3px" }}>
                Alora Griffiths
              </span>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

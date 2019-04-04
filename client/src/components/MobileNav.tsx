import React, { useState } from "react";
import { Link } from "react-router-dom";

// This nav will always be rendered and conditionally hidden with css
// classes and queries. It is unclear wether or not this is superior to React's
// conditional rendering pattern. If deemed significant, both conventions
// should be tested against each other for the purpose of optimization.
const MobileNav = () => {
  const [menuHidden, setMenuHidden] = useState(true);

  return (
    <>
      <nav className="exercise-page-nav">
        <div>
          <Link to="/exercises" className="parent-screen-link">
            {"<- Back to Exercises"}
          </Link>
          <svg
            className="right menu-toggle"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setMenuHidden(!menuHidden);
            }}
          >
            <path
              d="M0 0H18V2H0V0ZM0 6H18V8H0V6ZM0 12H18V14H0V12Z"
              fill="#545f75"
            />
          </svg>
        </div>

        <div
          className={menuHidden ? "backdrop hidden" : "backdrop"}
          onClick={() => {
            setMenuHidden(!menuHidden);
          }}
        />
        <div className={menuHidden ? "menu hidden" : "menu"}>
          <ul>
            <li className="li">
              <Link to="/">Home</Link>
            </li>
            <li className="li">
              <Link to="/exercises">Exercises</Link>
            </li>
            <li className="li">
              <Link to="/workouts">Workouts</Link>
            </li>
            <li className="li">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="li">
              <Link to="/graphs">Graphs</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";

// This nav will always be rendered and conditionally hidden with css
// classes and queries. It is unclear wether or not this is superior to React's
// conditional rendering pattern. If deemed significant, both conventions
// should be tested against each other for the purpose of optimization.
const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const MobileNavLink = (props: any) => {
    return (
      <Link to={props.to} onClick={() => setMenuOpen(!menuOpen)}>
        {props.children}
      </Link>
    );
  };

  return (
    <>
      <nav className="page-nav">
        <div className="flex">
          <Link to="/exercises" className="parent-screen-link">
            {"<- Back to Exercises"}
          </Link>
          <svg
            className="menu-toggle"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <path
              d="M0 0H18V2H0V0ZM0 6H18V8H0V6ZM0 12H18V14H0V12Z"
              fill="#545f75"
            />
          </svg>
        </div>

        <div
          className={!menuOpen ? "backdrop hidden" : "backdrop"}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <div className={!menuOpen ? "menu" : "menu open"}>
          <ul>
            <li className="li">
              <MobileNavLink to="/">Home</MobileNavLink>
            </li>
            <li className="li">
              <MobileNavLink to="/exercises">Exercises</MobileNavLink>
            </li>
            <li className="li">
              <MobileNavLink to="/workouts">Workouts</MobileNavLink>
            </li>
            <li className="li">
              <MobileNavLink to="/profile">Profile</MobileNavLink>
            </li>
            <li className="li">
              <MobileNavLink to="/graphs">Graphs</MobileNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;

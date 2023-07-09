import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const collapseRef = useRef(null);

  const handleToggle = () => {
    if (isCollapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(!isCollapsed);
    }
  };

  const handleClickOutside = (event) => {
    if (collapseRef.current && !collapseRef.current.contains(event.target)) {
      setCollapsed(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light ${
          isCollapsed ? "navbar-shadow" : ""
        }`}
      >
        <Link to="/">
          <a className="navbar-logo" href="#">
            Demo&Project
          </a>
        </Link>
        <button
          className={`navbar-toggler ${isCollapsed ? "collapsed" : ""}`}
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isCollapsed ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={collapseRef}
          className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Fornt-end
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all-courses">
                Courses
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="teachersDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teachers
              </a>
              <ul className="dropdown-menu" aria-labelledby="teachersDropdown">
                {/* if teacher already register then */}
                {teacherLoginStatus!='true' &&
                <li>
                    <>
                <li>
                  <Link className="dropdown-item" to="/teacher-register">
                    Register
                  </Link>
                </li>
                  <Link className="dropdown-item" to="/teacher-login">
                    Login
                  </Link>
                  </>
                </li>
                }
                
                <li>
                  <Link className="dropdown-item" to="/teacher-dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/teacher-logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul className="dropdown-menu" aria-labelledby="userDropdown">
                <li>
                  <Link className="dropdown-item" to="/user-register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/user-login">
                    Login
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/user-dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import LogoNav from "../assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";
import { userDetails } from "../store/userSlice";

function Nav() {
  const user = useSelector(userDetails);
  console.log(user);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const isLoggedIn = localStorage.token ? true : false;

  return (
    <header className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          src={LogoNav}
          alt="Argent Bak Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {isLoggedIn ? (
          <>
            <NavLink to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user?.userName}
            </NavLink>

            <NavLink onClick={handleLogout} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign-out
            </NavLink>
          </>
        ) : (
          <NavLink to="/Login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Nav;

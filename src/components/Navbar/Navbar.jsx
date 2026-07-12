import React from "react";
import "./Navbar.css";
import {
  FaFacebook,
  FaHome,
  FaUserFriends,
  FaStore,
  FaBell,
  FaFacebookMessenger,
  FaSearch,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <FaFacebook className="logo" />

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center">
        <div className="nav-icon active">
          <FaHome />
        </div>

        <div className="nav-icon">
          <FaUserFriends />
        </div>

        <div className="nav-icon">
          <FaStore />
        </div>
      </div>

      {/* Right */}
      <div className="navbar-right">
        <div className="right-icon">
          <FaFacebookMessenger />
        </div>

        <div className="right-icon">
          <FaBell />
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-pic"
        />
      </div>
    </nav>
  );
};

export default Navbar;
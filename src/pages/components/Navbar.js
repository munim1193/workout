import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div class="header">
        <Link to="#default" class="logo">Workout Training System</Link>
        <div class="header-right">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Logout</Link>
        </div>
      </div>
    </>
  );
}

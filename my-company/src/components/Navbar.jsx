import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "300px",
          backgroundColor: "#cdcdcd",
          color: "white",
        }}
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Servces</NavLink>
      </div>
    </>
  );
};

export default Navbar;

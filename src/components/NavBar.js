import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <DoneAllIcon className="tick" />
      <div>Tasker</div>
    </div>
  );
};

export default NavBar;

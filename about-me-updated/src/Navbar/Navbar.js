import React from "react";
import Classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={Classes.Navbar}>
      <ul className={Classes.NavigationList}>
        <li className={Classes.Item}>Experience & Skills</li>
        <li className={Classes.Item}>Work Experiences</li>
        <li className={Classes.Item}>Achievements</li>
        <li className={Classes.Item}>Education & Training</li>
      </ul>
    </div>
  );
};

export default Navbar;

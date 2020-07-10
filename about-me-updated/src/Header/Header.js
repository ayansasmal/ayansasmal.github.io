import React from "react";
import Classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className={Classes.MobileBackdrop}>
        <div className={Classes.HeaderMobile}></div>
        <div className={Classes.NameMobile}>Ayan Sasmal</div>
      </div>
      <div className={Classes.Header}>
        <div className={Classes.Details}>
          <span className={Classes.Name}>Ayan Sasmal</span>
          <div className={Classes.ContactDetails}>
            <span>+61 452 299 076</span>
            <span><a href="mailto:ayandelhi@gmail.com">ayandelhi@gmail.com</a></span>
            <span><a href="https://github.com/ayansasmal/">https://github.com/ayansasmal/</a></span>
            <span><a href="https://www.linkedin.com/in/ayan-sasmal/">https://www.linkedin.com/in/ayan-sasmal/</a></span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

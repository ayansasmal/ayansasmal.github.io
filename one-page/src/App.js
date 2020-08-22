import React from "react";
import Classes from "./App.module.css";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import Name from "./components/Name/Name";
import ContactDetails from "./components/ContactDetails/ContactDetails";
import Qualifications from "./components/Qualifications/Qualifications";
import Skills from "./components/Skills/Skills";
import Experiences from "./components/Experiences/Experiences";

function App() {
  return (
    <div className={Classes.App}>
      <main>
        <LeftSide>
          <Name />
          <ContactDetails />
          <Qualifications />
        </LeftSide>
        <RightSide>
          <Skills />
          <Experiences />
        </RightSide>
      </main>
      <footer>
        <div>
          <span>Ayan Sasmal, 2020 | </span>
          <span>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;

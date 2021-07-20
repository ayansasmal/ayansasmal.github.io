import React, { useEffect, useState } from 'react';
import Classes from './App.module.css';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';
import Name from './components/Name/Name';
import ContactDetails from './components/ContactDetails/ContactDetails';
import Qualifications from './components/Qualifications/Qualifications';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions/resume';

function App() {
  const content = useSelector(
    state => state,
    () => {}
  );

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getDetails());
    setLoading(false);
  }, [dispatch]);

  return (
    <div className={Classes.App}>
      {loading && <div>loading...</div>}
      {!loading && (
        <main>
          <LeftSide>
            <Name />
            <ContactDetails data={content.details} />
            <Qualifications data={content.qualification} />
          </LeftSide>
          <RightSide>
            <Skills data={content.skills} />
            <Experiences data={content.experiences} />
          </RightSide>
        </main>
      )}
      <footer>
        <div>
          <span>Ayan Sasmal, 2021 | </span>
          <span>
            Icons made by{' '}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{' '}
            from{' '}
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

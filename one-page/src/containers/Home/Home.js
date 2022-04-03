import React, {useEffect, useState} from 'react';
import QRCode from 'react-qr-code';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../actions/resume';
import AboutMe from '../../components/AboutMe/AboutMe';
import Achievements from '../../components/Achievements/Achievements';
import ContactDetails from '../../components/ContactDetails/ContactDetails';
import Experiences from '../../components/Experiences/Experiences';
import LeftSide from '../../components/LeftSide/LeftSide';
import Name from '../../components/Name/Name';
import RightSide from '../../components/RightSide/RightSide';
import Skills from '../../components/Skills/Skills';
import Classes from './Home.module.css';

function Home() {
  const content = useSelector(
    state => state,
    () => {}
  );

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getDetails());
    dispatch(actions.getFeatures());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className={Classes.App}>
        {loading && <div>loading...</div>}
        {!loading && (
          <main>
            <LeftSide>
              <Name />
              <ContactDetails data={content.details} />
              <AboutMe data={content.aboutMe} />
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
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
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
      <div className={Classes.AppPrint}>
        {loading && <div>loading...</div>}
        {!loading && (
          <main>
            <LeftSide>
              <Name />
              <ContactDetails data={content.details} />
            </LeftSide>
            <RightSide>
              <h2 className={Classes.Header}>About me</h2>
              <AboutMe data={content.aboutMe} />
              <h2 className={Classes.Header}>Skills</h2>
              <Skills data={content.skills} header="Technical Skills" />
              <Skills
                data={content.bestPracticesSkills}
                header="Best Practices"
              />
              <Skills data={content.softSkills} header="Soft Skills" />
              <Experiences data={content.experiences} />
              <h2 className={Classes.Header}>Achievements</h2>
              <Achievements data={content.achievements} />
            </RightSide>
            <div className={Classes.Qrcodes}>
              <div className={Classes.Qrcode}>
                <QRCode value="+61452299076" size={50} fgColor="#6495ed" />
                <div className={Classes.QrcodeDesc}>Phone</div>
              </div>
              <div className={Classes.Qrcode}>
                <QRCode
                  value="mailto:ayan.m.sasmal@gmail.com"
                  size={50}
                  fgColor="#f43f1a"
                />
                <div className={Classes.QrcodeDesc}>Email</div>
              </div>
              <div className={Classes.Qrcode}>
                <QRCode
                  value="https://ayansasmal.github.io/"
                  size={50}
                  fgColor="#507672"
                />
                <div className={Classes.QrcodeDesc}>Profile</div>
              </div>
            </div>
          </main>
        )}
        <footer>
          <div>
            <span>Ayan Sasmal, 2021</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;

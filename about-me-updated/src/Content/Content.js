import React from "react";
import Classes from "./Content.module.css";
import Skills from "./Skills/Skills";
import Qualifications from "./Qualifications/Qualifications";
import Experiences from "./Experiences/Experiences";
import Achievements from "./Achievements/Achievements";
import { backupCMS } from "./cmsSource";

const Content = (props) => {
  // useEffect(() => {
  //   console.log(backupCMS);
  //   setCMSData(backupCMS);
  //   console.log(cmsData);
  //   // console.log("getting cms data");
  //   // const cmsResponse = {};
  //   // try {
  //   //   Object.keys(cmsIds).map(async (val) => {
  //   //     console.log(val);
  //   //     const response = await axios.get(`${cmsIds[val]}\\items`);
  //   //     cmsResponse[val] = response.data.items;
  //   //   });
  //   //   console.log("cmsData", cmsResponse);
  //   //   setCMSData(cmsResponse);
  //   // } catch (error) {
  //   //   console.log("err", error);
  //   // }
  // }, []);
  return (
    <div className={Classes.Content}>
      <Skills
        bars={backupCMS.experience.bars}
        technicalSkills={backupCMS.skills.technicalSkills}
        softSkills={backupCMS.skills.softSkills}
      />
      <Experiences />
      <Achievements />
      <Qualifications />
    </div>
  );
};

export default Content;

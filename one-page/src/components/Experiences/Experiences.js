import React, { useState } from "react";
import Classes from "./Experiences.module.css";
import Experience from "./Experience/Experience";
import Description from "./Description/Description";

const Experiences = (props) => {
  const [description, setDescription] = useState({
    plainText:
      "I have been working as a Full Stack developer, for a leading Telstra in Sydney as a client for creating new and enhancing existing applications.",
    listedText: [
      "All the projects that I have delivered were in Agile and have used JIRA to manage the work done by the team.",
      "The new applications have been developed using Spring Boot, Java 1.8, Node.js, React JS, Back-end unit tested with REST Assured, Postman. The existing application have been developed in JSPs and Spring MVC.",
      "I have successfully documented and helped teams in implementing very complex application and solutions.",
      "I have worked seamlessly with a team based in India.",
      "I have created various documents as part of project deliverables.",
    ],
  });

  return (
    <div className={Classes.Content}>
      <div className={Classes.Header}>Experiences</div>
      <div className={Classes.Experiences}>
        <Experience descriptionHandler={setDescription} />
        <Description text={description} />
      </div>
    </div>
  );
};

export default Experiences;

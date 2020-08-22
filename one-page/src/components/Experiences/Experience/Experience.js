import React, { useState, useEffect } from "react";
import Classes from "./Experience.module.css";
import Description from "../Description/Description";

const data = [
  {
    title: "Senior Engineer Full Stack Developer",
    company: "Cognizant Technologies",
    duration: "09/2020 - Present",
    location: "Sydney, NSW, AU",
    description: {
      plainText:
        "I have been working as a Full Stack developer, for Telstra in Sydney as a client for creating new and enhancing existing applications.",
      listedText: [
        "All the projects that I have delivered were in Agile and have used JIRA to manage the work done by the team.",
        "The new applications have been developed using Spring Boot, Java 1.8, Node.js, React JS, Back-end unit tested with REST Assured, Postman. The existing application have been developed in JSPs and Spring MVC.",
        "I have successfully documented and helped teams in implementing very complex application and solutions.",
        "I have worked seamlessly with a team based in India.",
        "I have created various documents as part of project deliverables.",
      ],
    },
  },
  {
    title: "Full Stack Developer",
    company: "Innovate IT Consultancy",
    duration: "05/2020 - 08/2020",
    location: "Sydney, NSW, AU",
    description: {
      plainText:
        "I have been working as a Full Stack developer, for Telstra in Sydney as a client for creating new and enhancing existing applications.",
      listedText: [
        "All the projects that I have delivered were in Agile and have used JIRA to manage the work done by the team.",
        "The new applications have been developed using Spring Boot, Java 1.8, Node.js, React JS, Back-end unit tested with REST Assured, Postman. The existing application have been developed in JSPs and Spring MVC.",
        "I have successfully documented and helped teams in implementing very complex application and solutions.",
        "I have worked seamlessly with a team based in India.",
        "I have created various documents as part of project deliverables.",
      ],
    },
  },
  {
    title: "Technology Analyst",
    company: "TechForce Services",
    duration: "11/2019 - 05/2020",
    location: "Sydney, NSW, AU",
    description: {
      plainText:
        "I have been working for Westpac Bank as a client for creating new applications and enhancing existing one",
      listedText: [
        "During this time period, I have designed solutions along with Senior Technical Architects and Technical Leads to integrate various systems, resolving technical issues faced and have been recognized for problem solving skills.",
        "I have successfully led teams to deliver projects which were complex and had changes across multiple systems.",
        "I have created and updated API Definitions using Swagger tool for the newly created APIs.",
        "The new applications have been developed using Spring Framework, Spring Boot, Node js, React JS, Hibernate Framework using DB2 or SQL Server as the database and Back-end unit tested with REST Assured, Postman.",
        "The existing application have been developed in AngularJS (1.x) and Spring MVC.",
        "I have successfully documented and helped teams in realising and implementing very complex application and solutions.",
        "All the projects that I have delivered were in Agile and have used JIRA to manage the work done by the team.",
        "I have created various documents as part of project deliverables.",
      ],
    },
  },
  {
    title: "Technology Analyst",
    company: "Infosys Technology Limited",
    duration: "01/2015 - 05/2019",
    location: "Sydney, NSW, AU",
    description: {
      plainText:
        "I have worked for leading Westpac Bank as a client for creating new and enhancing existing credit card origination applications and updating the portal to add documents for verification.",
      listedText: [
        "During this time period, I have led various teams, we have reduced the clicks and steps to be taken by customer to apply for Credit Cards for the bank by more than 50% and approval SLA have been reduced by 50%.",
        "I have designed solutions along with Senior Technical Architects and Technical Leads to integrate various systems, resolving technical issues faced and have been recognized for problem solving skills.",
        "I have created and updated API Definitions using Swagger tool for the newly created APIs.",
        "The new applications have been developed using Spring Framework, Spring Boot, Node js, React JS, Hibernate Framework using DB2 or SQL Server as the database and Back-end unit tested with REST Assured, Postman.",
        "The existing application have been developed in AngularJS (1.x) and Spring MVC.",
        "I have successfully implemented JWT based verification mechanism and data channel between applications on different platforms.",
        "I have created various documents as part of project deliverables.",
      ],
    },
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys Technology Limited",
    duration: "01/2014 - 01/2015",
    location: "Pune, IN",
    description: {
      plainText:
        "I have worked for leading Bank in Australia as a client in developing an enterprise web application on a Spring MVC based architecture with extensive use of add-ons like jQuery, CSS, RESTful Web services, Maven and jUnit.",
      listedText: [
        "During this time period I have developed a complete functional module for the Web Application and a JUnit based reusable component for Sanity Checks.",
        "Have learned a lot with Hands On experience in Spring MVC based application development.",
        "Gained rich experience of applications like Maven, Tomcat and WebSphere.",
      ],
    },
  },
  {
    title: "Systems Engineer",
    company: "Infosys Technology Limited",
    duration: "04/2012 - 01/2014",
    location: "Mysuru, IN",
    description: {
      plainText:
        "I have worked for Education, Talent & Assessment, formerly known as Education & Research, a Business Enabling Function of Infosys Technology Limited as an internal client.",
      listedText: [
        "During this time period have developed from scratch, deployed successfully and maintained an Eclipse IDE Based application to replace a 3rd party application for Hands-On Assessments and Assignments. To support the newly developed application, have developed and deployed in-numerous Java and .NET based application.",
        "Received “Best Performer” award.",
        "Have successfully developed and maintained Eclipse-IDE Plugins to create a controlled environment for giving assessments and daily assignments on Oracle Based RDBMS and Core Java.",
        "Have provided a single platform which allowed almost 20 times more simultaneous users to attempt assessments and practice assignments.",
        "Have developed a framework and an application to evaluate and assess SQL or PL/SQL written by trainees.",
        "Have developed application to create question papers and evaluation related artefacts from a pool of questions and solutions.",
        "Have reduced the operation time for Assessments and Result Generation by up to 80%.",
        "Have led a team of 10 C# developers for developing a .NET based version of the application for assessments. Agile SCRUM Methodologies were followed as Software Development Framework.",
        "Have delivered and assisted in more than 160 hours of classroom sessions of Core Java and Oracle Based RDBMS Concepts.",
      ],
    },
  },
];

const Experience = (props) => {
  const [selected, setSelected] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [titles, setTitles] = useState(null);

  useEffect(() => {
    const onClickHandler = (index) => {
      props.descriptionHandler(data[index].description);
      const arr = selected.map((val, i) => i === index);
      setSelected(arr);
    };

    const listedTitles = data.map((val, index) => {
      return (
        <div key={index}>
          <li
            className={
              selected[index]
                ? [Classes.Heading, Classes.Selected].join(" ")
                : Classes.Heading
            }
            onClick={(event) => onClickHandler(index)}
          >
            <div className={Classes.Title}>{val.title}</div>
            <div className={Classes.Company}>{val.company}</div>
            <div className={Classes.Location}>{val.location}</div>
            <div className={Classes.Duration}>{val.duration}</div>
          </li>
          <div className={Classes.MobileDescription}>
            {selected[index] && <Description text={val.description} />}
          </div>
        </div>
      );
    });
    setTitles(listedTitles);
  }, [setTitles, props, selected, setSelected]);

  return (
    <div className={Classes.Headings}>
      <ul className={Classes.HeadingList}>{titles}</ul>
    </div>
  );
};

export default Experience;

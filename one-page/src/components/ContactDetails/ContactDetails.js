import React from "react";
import Classes from "./ContactDetails.module.css";
import Detail from "./Detail/Detail";

const ContactDetails = (props) => {
  return (
    <div className={Classes.Content}>
      <div className={Classes.ContactDetails}>
        <Detail name="Mobile Number :" value="+61 452 299 076" />
        <Detail
          name="Email Id :"
          value="mailto:ayandelhi@gmail.com"
          displayText="ayandelhi@gmail.com"
          isUrl={true}
        />
        <Detail name="Based at :" value="Sydney, NSW" />
        <Detail
          name="Github :"
          value="https://github.com/ayansasmal/"
          displayText="Github URL"
          isUrl={true}
        />
        <Detail
          name="LinkedIn :"
          value="https://www.linkedin.com/in/ayan-sasmal/"
          displayText="LinkedIn URL"
          isUrl={true}
        />
      </div>
    </div>
  );
};

export default ContactDetails;

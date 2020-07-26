import React from "react";
import Classes from "./ContactDetails.module.css";
import Detail from "./Detail/Detail";

const ContactDetails = (props) => {
  return (
    <div className={Classes.Content}>
      <div className={Classes.ContactDetails}>
        <Detail name="Mobile Number :" value="+61452299076" />
        <Detail
          name="Email Id :"
          value="mailto:ayandelhi@gmail.com"
          displayText="ayandelhi@gmail.com"
          isUrl={true}
        />
        <Detail name="Based at :" value="Sydney, NSW" />
        <Detail
          name="Github :"
          value="url"
          displayText="Github URL"
          isUrl={true}
        />
        <Detail
          name="LinkedIn :"
          value="url"
          displayText="LinkedIn URL"
          isUrl={true}
        />
      </div>
    </div>
  );
};

export default ContactDetails;

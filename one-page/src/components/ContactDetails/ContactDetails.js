import React from 'react';
import Classes from './ContactDetails.module.css';
import Detail from './Detail/Detail';

const ContactDetails = props => {
  return (
    <div className={Classes.Content}>
      <div className={Classes.ContactDetails}>
        <Detail name="Mobile Number :" value={props.data.mobile} />
        <Detail
          name="Email Id :"
          value={`mailto:${props.data.email}`}
          displayText={props.data.email}
          isUrl={true}
        />
        <Detail name="Based at :" value={props.data.location} />
        <Detail
          name="Github :"
          value={props.data.github}
          displayText="Github URL"
          isUrl={true}
        />
        <Detail
          name="LinkedIn :"
          value={props.data.linkedIn}
          displayText="LinkedIn URL"
          isUrl={true}
        />
      </div>
    </div>
  );
};

export default ContactDetails;

import React, { useEffect, useState } from 'react';
import Classes from './Experiences.module.css';
import Experience from './Experience/Experience';
import Description from './Description/Description';

const Experiences = props => {
  const [description, setDescription] = useState(null);

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      const selectedExp = props.data.find(d => d.isSelected);
      setDescription(selectedExp && selectedExp.description);
    }
  }, [props, setDescription]);

  return (
    <div className={Classes.Content}>
      <div className={Classes.Header}>Work Experiences</div>
      <Experience descriptionHandler={setDescription} data={props.data} />
      <div className={Classes.MobileDescription}>
        {description && <Description text={description} />}
      </div>
    </div>
  );
};

export default Experiences;

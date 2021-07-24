import React, { useState, useEffect } from 'react';
import Classes from './Experience.module.css';
import Description from '../Description/Description';
import { useDispatch } from 'react-redux';
import * as actions from '../../../actions/resume';

const Experience = props => {
  const [titles, setTitles] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const onClickHandler = index => {
      props.descriptionHandler(props.data[index].description);
      dispatch(actions.updateSelection(index));
    };

    const listedTitles = props.data.map((val, index) => {
      return (
        <div key={index}>
          <li
            className={
              val.isSelected
                ? [Classes.Heading, Classes.Selected].join(' ')
                : Classes.Heading
            }
            onClick={event => onClickHandler(index)}
          >
            <div className={Classes.TitlePrint}>
              <div className={Classes.Title}>{val.title}</div>
              <div className={Classes.Company}>{val.company}</div>
            </div>
            <div className={Classes.LocationPrint}>
              <div className={Classes.Location}>{val.location}</div>
              <div className={Classes.Duration}>{val.duration}</div>
            </div>
            <div className={Classes.DescriptionPrint}>
              <Description text={val.description} />
            </div>
          </li>
          <div className={Classes.MobileDescription}>
            {val.isSelected && <Description text={val.description} />}
          </div>
        </div>
      );
    });
    setTitles(listedTitles);
  }, [setTitles, props, dispatch]);

  return (
    <div className={Classes.Headings}>
      <ul className={Classes.HeadingList}>{titles}</ul>
    </div>
  );
};

export default Experience;

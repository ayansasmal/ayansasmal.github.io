import React from 'react';
import Classes from './Name.module.css';
import print from '../../Assets/images/printer.png';
import { useSelector } from 'react-redux';

const Name = props => {
  const features = useSelector(state => state.features);
  return (
    <>
      <div className={Classes.Content}>
        <div className={Classes.Photo}></div>
        {features['enable-print'] && (
          <div
            className={Classes.PrintButton}
            onClick={() => {
              window.print();
            }}
          >
            <img
              src={print}
              alt="Print friendly version"
              height="32px"
              width="32px"
            />
          </div>
        )}
        <div className={Classes.Name}>Ayan Sasmal</div>
      </div>
      <div className={Classes.ContentPrint}>
        <div className={Classes.Photo}></div>
        <div className={Classes.Name}>Ayan Sasmal</div>
      </div>
    </>
  );
};

export default Name;

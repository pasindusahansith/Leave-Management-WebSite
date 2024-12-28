import React, { useState, useEffect } from "react";
import '../style/logTime.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCirclePlay, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import TimeCount from "./timeCount";

function LogTime(props) {
  const { workHours, isVisible, onClose } = props;

  // Initialize state from localStorage or default to false
  const [isCountVisible, setCountVisible] = useState(() => {
    const savedState = localStorage.getItem("isCountVisible");
    return savedState ? JSON.parse(savedState) : false;
  });

  // Update localStorage whenever isCountVisible changes
  useEffect(() => {
    localStorage.setItem("isCountVisible", JSON.stringify(isCountVisible));
  }, [isCountVisible]);

  const handleOpentimeCount = () => setCountVisible(true);
  const handleClosetimeCount = () => setCountVisible(false);

  if (!isVisible) return null;

  return (
    <div className="logTimeComponent">
      <button onClick={onClose} className="closeButton">
        <FontAwesomeIcon icon={faCircleXmark} size="xl" style={{ color: "#d40202" }} />
      </button>
      <div className='logTimeComponent1'>
        <p className='workHours'>{workHours}</p>
        <p className='wh'>Work Hours</p>
        <button className="clockinbtn" onClick={handleOpentimeCount}>
          <FontAwesomeIcon icon={faCirclePlay} size="3x" style={{ color: "green" }} /> <br></br> Clock In
        </button>
        <TimeCount
          isVisibleCount={isCountVisible}
          onCloseCount={handleClosetimeCount}
        />
        <br /><br /><br />
        <button className='breakbtn'>
          <FontAwesomeIcon icon={faMugSaucer} size="lg" style={{ color: "#ffffff" }} /> Break
        </button>
      </div>
    </div>
  );
}

export default LogTime;




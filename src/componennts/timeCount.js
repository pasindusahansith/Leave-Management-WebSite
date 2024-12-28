import React from "react";
import '../style/logTime.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleStop,faMugSaucer } from '@fortawesome/free-solid-svg-icons';

function TimeCount(props) {
  const { isVisibleCount, onCloseCount } = props;

  if (!isVisibleCount) return null;

  return (
    <div className="timecount">
      <p className='workHoursLog'>00:50</p>
      <p className='whLog'>Work Hours</p>
      <button className="clockoutbtn" onClick={onCloseCount}>
          <FontAwesomeIcon icon={faCircleStop} size="3x" style={{ color: "#c70d00" }} /><br></br> Clock Out
        </button>
        <br /><br /><br />
        <button className='breakbtn'>
          <FontAwesomeIcon icon={faMugSaucer} size="lg" style={{ color: "#ffffff" }} /> Break
        </button>
    </div>
  );
}

export default TimeCount;


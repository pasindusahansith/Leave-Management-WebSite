import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LeaveDetailsCard from './leavedetilscard';
import '../style/requestLeave.css';
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'; 

function RequestLeave(){
    const [selectedOption, setSelectedOption] = useState('');

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };

    const casualLeaveData = [3, 2];
    const totalCasualLeave = 10; 

    const CasualAllocated = 10;
    const CasualUsed = 5;

    const casualLeaveSettings = {
        width: 80,
        height: 80,
        value: (casualLeaveData[0] / totalCasualLeave)*100, 
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
          selectedOption,
          //startDate,
          //endDate,
          //textValue,
          file,
        });
      };

    return(
        <>
        <div className="personal-main-leave">
                
                <div className="personal-main1">
                    <div className="personal-left-leave">
                        <button id='leaveHistory'><FontAwesomeIcon icon={faClockRotateLeft} /> Leave History</button>
                        <h3 className='leaveh3'>Leave</h3>
                        <form onSubmit={handleSubmit}>
                        <p>Leave Type</p>
                        <select id="leaveType" //</div>value={selectedOption} onChange={handleChange}
                        >
                            <option value="" disabled>Select...</option>
                            <option value="Mr">Annual Leave</option>
                            <option value="Ms">Sick Leave</option>
                            <option value="Mrs">abc</option>
                        </select>

                        <p>From date</p>
                        <DatePicker
                            //selected={startDate}
                            //onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                        />

                        <p>To date</p>
                        <DatePicker
                            //selected={startDate}
                            //onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                        />
                        <p>Reason</p>
                        <textarea
                            id="description"
                            //value={textValue}
                            //onChange={handleChange}
                            rows="5"
                        />
                        <p>Attach Document</p>
                        <input type="file" onChange={handleFileChange} />
                        <input type="submit" id="btnsubmit"></input>
                    </form>  
                    </div>
                    <div className="personal-right-leave">
                        <LeaveDetailsCard
                            title={`Casual Leave`}
                            gaugeSettings={casualLeaveSettings}
                            Allocated={CasualAllocated}
                            Used={CasualUsed}
                        />

                        <LeaveDetailsCard
                            title={`Annual Leave`}
                            gaugeSettings={casualLeaveSettings}
                            Allocated={CasualAllocated}
                            Used={CasualUsed}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestLeave;
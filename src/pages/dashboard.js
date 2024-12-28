import React, { useState }from "react";
import { Link } from "react-router-dom";
import "../style/dashboard.css"
import VerticalNavbar from "../componennts/vertical-navbar";
import HorizontalNavbar from "../componennts/horizontalnavbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCalendarWeek, faUser, faClock, faIdCardClip } from '@fortawesome/free-solid-svg-icons'; 
import GaugeLeaveCard from "../componennts/gagugeLeaveCard";
import LeaveStatCard from '../componennts/leaveStatCard'; 
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import TimeClockFormProps from '../componennts/clock';
import LogTime from "../componennts/logTime";
import WorkHoursBarChart from "../componennts/WorkHoursBarChart";
import ProfileMenu from "../componennts/profileMenu";

 
function DashBoard() {

    const ProfileLink = (
        <ProfileMenu profileIcon={<FontAwesomeIcon icon={faUser} />} />
    );

    const RequestLink = (
        <Link to="/LeaveCoveringRequest" className="dashboard-link">
            <FontAwesomeIcon icon={faCalendarWeek}/>
        </Link>
    );
    const DashboardLink = (
        <FontAwesomeIcon icon={faHouse} beat style={{color: "#0602f2",}} />
    );
    /*const ProfileLink = (
        /*<Link  className="profile-link">
        <FontAwesomeIcon icon={faUser} />
        </Link>
        <FontAwesomeIcon icon={faUser} />
    );*/
    const SheduelLink = (
        <Link to="/Sheduel" className="dashboard-link">
            <FontAwesomeIcon icon={faIdCardClip} />
        </Link>
    )

    const casualLeaveData = [3, 2];
    const annualLeaveData = [10, 5]; 
    const sickLeaveData = [14,5];
    const spacialLeaveData = [10];
  
    const totalAnnualLeave = 20; 
    const totalCasualLeave = 10; 
    const totalSickLeave = 15;
    const totalSpacialLeave = 10;
  
    const annualLeaveSettings = {
      width: 120,
      height: 120,
      value: (annualLeaveData[0] / totalAnnualLeave)*100, 
    };
  
  
    const casualLeaveSettings = {
      width: 120,
      height: 120,
      value: (casualLeaveData[0] / totalCasualLeave)*100, 
    };

    const sickLeaveSettings = {
        width: 120,
        height: 120,
        value: (sickLeaveData[0] / totalSickLeave)*100,
    };

    const spacialLeaveSettings = {
        width: 120,
        height: 120,
        value: (spacialLeaveData[0] / totalSpacialLeave)*100,
    };

    const [isMessageVisible, setMessageVisible] = useState(false);

    const handleOpenMessage = () => setMessageVisible(true);
    const handleCloseMessage = () => setMessageVisible(false);

    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const workHoursData = [8, 7.5, 6, 8.5, 7, 8, 6.5]; 

    return (
        
        <div className="body">
            <div className="nav-container">
                <VerticalNavbar homeicon={DashboardLink}
                                calandericon = {RequestLink}
                                profileicon = {ProfileLink} 
                                Sheduelicon = {SheduelLink} />
            </div>
            <div className="content-container">
                <br></br>
                <br></br>
                <br></br>
              <HorizontalNavbar/>
                <div className="content">
                    <h1 className="dashboardtext"> Dashboard</h1>
                    <div className="panel1">
                    <div className="leave-card-container">
                        <GaugeLeaveCard
                            title={`Annual Leave`}
                            gaugeSettings={annualLeaveSettings}
                            available={annualLeaveData[0]}
                            Allocated={totalAnnualLeave}
                        />
                        <GaugeLeaveCard
                            title={`Casual Leave`}
                            gaugeSettings={casualLeaveSettings}
                            available={casualLeaveData[0]}
                            Allocated={totalCasualLeave}
                        />
                        <GaugeLeaveCard
                            title={`Sick Leave`}
                            gaugeSettings={sickLeaveSettings}
                            available={sickLeaveData[0]}
                            Allocated={totalSickLeave}
                        />
                        <GaugeLeaveCard
                            title={`Spacial Leave`}
                            gaugeSettings={spacialLeaveSettings}
                            available={spacialLeaveData[0]} 
                            Allocated={totalSpacialLeave}
                        />
                        <GaugeLeaveCard
                            title={`Spacial Leave`}
                            gaugeSettings={spacialLeaveSettings}
                            available={spacialLeaveData[0]} 
                            Allocated={totalSpacialLeave}
                        />
                    </div>       
                    <div className="startwork">
                        <div className="stjob">
                            <div className="lstjob">
                                <h3>Clock In</h3>
                                <p className="lastlogp">Last Login :</p>
                                <p className="lastlogtime">07:00</p>
                                <p className="lastlogdate">August 18, 2024</p>
                                <button className="logTimebtn" onClick={handleOpenMessage}><FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} /> Log Time</button>
                                <LogTime
                                    workHours="05:00:00"
                                    isVisible={isMessageVisible}
                                    onClose={handleCloseMessage}
                                />
                            </div>
                            <div className="rstjob">
                                <TimeClockFormProps />  
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="content2">
                            <div className="workhours">
                                <h3>work hours</h3>
                                <WorkHoursBarChart labels={labels} data={workHoursData} />
                            </div>
                            <div className="a">
                                a
                            </div>
                    </div>
                    <div className="content3">
                        a
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
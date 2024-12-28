import React from "react";
import { Link } from "react-router-dom";
import VerticalNavbar from "../componennts/vertical-navbar";
import '../assest/FA 6.4.0 Pro/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserCheck, faUser, faClipboardList, faIdCardClip,faUserPlus,faUsers,faUserTimes,faUserClock } from '@fortawesome/free-solid-svg-icons'; 

function LeaveRequestView(){

    const RequestLink = (
        <Link to="/AddEmployee" className="dashboard-link">
            <FontAwesomeIcon icon={faUserPlus} />
        </Link>
    );
    const DashboardLink = (
        <FontAwesomeIcon icon={faHouse} beat style={{color: "#0602f2",}} />
    );
    const ProfileLink = (
        /*<Link  className="profile-link">
        <FontAwesomeIcon icon={faUser} />
        </Link>*/
        <FontAwesomeIcon icon={faClipboardList} />
    );
    const SheduelLink = (
        <Link to="/Sheduel" className="dashboard-link">
            <FontAwesomeIcon icon={faIdCardClip} />
        </Link>
    )

    return(
        <div className="requestViewMain">
            <div className="adminNavBar">
                <VerticalNavbar homeicon={DashboardLink}
                    calandericon = {RequestLink}
                    profileicon = {ProfileLink} 
                    Sheduelicon = {SheduelLink} />
            </div>
            <div className="adminContant">
                <div className="adminHorizontalNavBar">
                <div className="adminTitle">
                            <h1>Admin DashBoard</h1>
                        </div>
                </div>
                <div className="admin-content-container">
                    <div className="adminLeft">
                        
                        <div className="adminContant1">
                       
                        </div>
                        <div className="content2">
                            <div className="workhours">
                                <h3>work hours</h3>
                                
                            </div>
                            <div className="a">
                                a
                            </div>
                    </div>
                    <div className="content3">
                        a
                    </div>
                    </div>
                    <div className="adminProfile">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaveRequestView;
import React from "react";
import "../style/horizontalnavbar.css";

function HorizontalNavbar() {
    return(
        <div className="main">
            <div className="navleft">
                <p></p>
            </div>
            <div className="navright">
                <p className="ename">Employee Name</p>
            </div>
        </div>
    );
}

export default HorizontalNavbar;
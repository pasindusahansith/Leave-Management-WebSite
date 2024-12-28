import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/profiletabs.css';

function PersonalProfile() {
    const [selectedOption, setSelectedOption] = useState('');
    const [gender, setGender] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleDateChange = (date) => {
        setStartDate(date);
    };

    const [inputs, setInputs] = useState({
        title: '',
        firstName: '',
        lastName: '',
        maritalStatus: '',
        bloodGroup: '',
        maidenName: '',
        dateOfBirth: '',
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [id]: value,
        }));
    };

    const [countryCode, setCountryCode] = useState('+1'); // Default country code
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    return (
        <div>
            <div className="personal-main">
                <h3>Basic Information</h3>
                <div className="personal-main1">
                    <div className="personal-left">
                        <p>Title</p>
                        <select id="title" value={selectedOption} onChange={handleChange}>
                            <option value="" disabled>Select...</option>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                        </select>

                        <p>First Name</p>
                        <input
                            id="firstName"
                            type="text"
                            value={inputs.firstName}
                            readOnly
                        />
                        <p>Last Name</p>
                        <input
                            id="lastName"
                            type="text"
                            value={inputs.lastName}
                            onChange={handleInputChange}
                            readOnly
                        />
                        <p>Maiden Name</p>
                        <input
                            id="maidenName"
                            type="text"
                            value={inputs.maidenName}
                            readOnly
                        />
                        <p>Marital Status</p>
                        <input
                            id="maritalStatus"
                            type="text"
                            value={inputs.maritalStatus}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                    <div className="personal-right">
                        <p>Blood Group</p>
                        <input
                            id="bloodGroup"
                            type="text"
                            value={inputs.bloodGroup}
                            onChange={handleInputChange}
                            readOnly
                        />
                        <p>Date of Birth</p>
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            dateFormat="MMMM d, yyyy"
                            readOnly
                        />
                        <p>Gender</p>
                        <select id="gender" value={gender} onChange={handleGenderChange}>
                            <option value="" disabled>Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="personal-main">
                <h3>Contact</h3>
                <div className="personal-main1">
                    <div className="personal-left">

                        <p>Work Email</p>
                        <input
                            id="workEmail"
                            type="text"
                           // value={inputs.firstName}
                            readOnly
                        />
                        <p>Work-Phone</p>
                        <div className="phone-input-group">
                            <select
                                id="countryCode"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                            >
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (India)</option>
                                <option value="+94">+94 (LK)</option>

                                
                            </select>
                            <input
                                id="workPhone"
                                type="text"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                    </div>
                    <div className="personal-right">
                        <p>Personal Email</p>
                        <input
                            id="personalEmail"
                            type="text"
                            //value={inputs.bloodGroup}
                            onChange={handleInputChange}
                            readOnly
                        />
                        <p>Personal Phone</p>
                        <div className="phone-input-group">
                            <select
                                id="countryCode"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                            >
                                <option value="+1">+1 (USA)</option>
                                <option value="+44">+44 (UK)</option>
                                <option value="+91">+91 (India)</option>
                                <option value="+94">+94 (LK)</option>

                                
                            </select>
                            <input
                                id="workPhone"
                                type="text"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
            </div>
                    </div>
                </div>
            </div>
            <div className="personal-main">
                <h3>Identification Information</h3>
                <div className="personal-main1">
                    <div className="personal-left">

                        <p>NIC Number</p>
                        <input
                            id="nicNumber"
                            type="text"
                            //value={inputs.firstName}
                            readOnly
                        />
                        <p>NIC Expiry Date</p>
                        <input
                            id="nicExpiryDate"
                            type="text"
                            //value={inputs.lastName}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                    <div className="personal-right">
                        <p>Passport Number</p>
                        <input
                            id="passportNumber"
                            type="text"
                            //value={inputs.bloodGroup}
                            onChange={handleInputChange}
                            readOnly
                        />
                        <p>Driving Lisen Number</p>
                        <input
                            id="drivingLisenNumber"
                            type="text"
                            //value={inputs.bloodGroup}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalProfile;


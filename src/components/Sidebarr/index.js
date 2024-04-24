import React, { useState } from 'react';
import { FaSearch, FaChartLine, FaMoneyBill, FaQuestionCircle, FaCalendarAlt, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import './index.css';


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <img alt='logo' src='https://res.cloudinary.com/dnmcjyigq/image/upload/v1713887546/d_guqj4i.png' className='dash-logo' />

                <ul>
                    <li>
                        {isOpen ? <><FaSearch /> Search</> : <FaSearch />}
                    </li>
                    <li>
                        {isOpen ? <><FaChartLine /> Dashboard</> : <FaChartLine />}
                    </li>
                    <li>
                        {isOpen ? <><FaMoneyBill /> Revenue</> : <FaMoneyBill />}
                    </li>
                    <li>
                        {isOpen ? <><FaQuestionCircle /> FAQ's</> : <FaQuestionCircle />}
                    </li>
                    <li>
                        {isOpen ? <><FaCalendarAlt /> Schedules</> : <FaCalendarAlt />}
                    </li>

                </ul>

            </div>
           
            <li className='set'>
                {isOpen ? <><FaCog /> Settings</> : <FaCog />}
            </li>
        </div>
    );
}

export default Sidebar;

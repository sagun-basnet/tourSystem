import React from 'react';
import './style.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../image/img/logo4.png';
import { RxDashboard } from "react-icons/rx";
import { AiOutlineDown } from "react-icons/ai";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";

export default function Navbar() {
    return (
        <div>
            <nav id='navBar'>
                <div className="logo">
                    <div className="nav_logo">
                        <NavLink to="/" className="nav_links">
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                    </div>
                </div>
                <div className="links links_container">
                    <ul>
                        <li>
                            <NavLink to="/" className="nav_links">
                                <i className="uil uil-home" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="nav_links">
                                <i className="uil uil-lightbulb-alt" /> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/package" className="nav_links">
                                <i className="uil uil-package" /> Package
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="nav_links">
                                <i className="uil uil-envelope" /> Contact
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/dashboard" className="nav_links">
                                <RxDashboard className='dash' /> Dashboard
                            </NavLink>
                        </li> */}
                        <Link to="/login">
                            <button className="login btn p-2 px-4 rounded-md">Login</button>
                        </Link>
                    </ul>
                </div>
            </nav>
            {/* <div className="logoutDiv">
                <div className="name">
                    <h5>User Name</h5>
                </div>
                <div className="setting">
                    <h5>
                        <AiFillSetting /> Setting
                    </h5>
                </div>
                <div className="logout">
                    <h5>
                        <AiOutlineLogout className='logoutIcon' /> Logout
                    </h5>
                </div>
            </div> */}
            {/* <div className='modalBackground'>
                <div className="modalContainer">
                    <img src={Logo} alt="Logo" />
                    <button className="modalCloseBtn">
                        <AiOutlineClose style={{ fontWeight: "bolder" }} />
                    </button>
                    <div className="modalBody">
                        <h3>Are you sure you want to logout?</h3>
                    </div>
                    <div className="modalFooter">
                        <button>Logout</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

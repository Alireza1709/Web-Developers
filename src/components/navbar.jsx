import React, { Component } from 'react';
import { Link  , NavLink} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import modalsContext from '../context/modals';
import { useNavigate } from 'react-router-dom';

const Navbar = ({scrollToContact, scrollToTeam, scrollToBlog, scrollToFeature, scrollToHeader }) => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const { openModal } = useContext(modalsContext);
    const { User } = useContext(modalsContext)
    console.log(User)
    
    const  navigate = useNavigate()

    const  handleDashboardClick = ()=>{
        console.log("Navigating to Dashboard");
        navigate("/dashboard")
    }

    const handleNavbarToggle = () => {
        setOpenNavbar(prevState => !prevState); // تغییر وضعیت باز یا بسته بودن نوار ناوبری
    };

    return (
        <div id="navbar" className={`bg-white sticky-top shadow p-2 ${openNavbar ? 'open' : ''}`} style={{ "--bs-bg-opacity": 0.95 }}>
            <nav className='container navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">Web Developers!</a>
                    <button
                        id="navBtn"
                        onClick={handleNavbarToggle}
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${openNavbar ? "show" : ""}`} id="navbarSupportedContent">
                        <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink onClick={scrollToHeader} to="/" className='nav-link'>Home</NavLink>
                            </li>
                            <li onClick={scrollToFeature} className='nav-item'>
                                <NavLink to="/Feature" className='nav-link'>Feature</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink onClick={scrollToBlog} to="/Blog" className='nav-link'>Blog</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink onClick={scrollToTeam} to="/Team" className='nav-link'>Our team</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink onClick={scrollToContact} to="/Contact" className='nav-link'>Contact</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            {
                                !User  ? ( // اگر کاربر وارد نشده باشد، دکمه "Get Started" نمایش داده می‌شود
                                    <button onClick={openModal} type='button' className='btn btn-primary modalbutton' data-bs-toggle="modal" data-bs-target="#examplemodal" style={{ "width": "150px" }}>
                                        Get Started
                                    </button>
                                ) : ( // اگر کاربر وارد شده باشد، دکمه "Dashboard" نمایش داده می‌شود
                                    <button onClick={handleDashboardClick} type='button' className='btn btn-primary modalbutton' style={{ "width": "150px" }}>
                                        Dashboard
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
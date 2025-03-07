import React, { Component } from 'react';
import { Link  , NavLink} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import modalsContext from '../context/modals';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const { openModal } = useContext(modalsContext);
    const { User } = useContext(modalsContext)
    const {scrollToTeam} = useContext(modalsContext)
    const {scrollToContact} = useContext(modalsContext)
    const {scrollToBlog} = useContext(modalsContext)
    const {scrollToFeature} = useContext(modalsContext)
    const {scrollToHeader} = useContext(modalsContext)
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
                             {/* برای اسکرول کردن به جای navlink از hashlink استفاده میکنیم  */}
                            <li className='nav-item'>
                                <HashLink onClick={scrollToHeader} to="/" className='nav-link'>Home</HashLink>
                            </li>
                            <li onClick={scrollToFeature} className='nav-item'>
                                <HashLink to="#Feature" className='nav-link'>Feature</HashLink>
                            </li>
                            <li className='nav-item'>
                                <HashLink onClick={scrollToBlog} to="#Blog" className='nav-link'>Blog</HashLink>
                            </li>
                            <li className='nav-item'>
                                <HashLink onClick={scrollToTeam} to="#Team" className='nav-link'>Our team</HashLink>
                            </li>
                            <li className='nav-item'>
                                <HashLink onClick={scrollToContact} to="#Contact" className='nav-link'>Contact</HashLink>
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
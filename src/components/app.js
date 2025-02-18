import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { redirect , Navigate  } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import Modal from './modal';
import Header from './header';
import Feature from './feature';
import Vuejs from './vuejs';
import modalsContext from '../context/modals';
import Reacts from './react';
import Blog from './blog';
import OurTeam from './ourTeam';
import Questions from './questions';
import Contact from './contact';
import Footer from './footer';
import Dashboard from './dashboard';



function App() {
    const [showModal, setShowModal] = useState(false);
    const [User, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // اضافه کردن حالت loading

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setUser(null);
                setLoading(false); // به محض اینکه بارگذاری تمام شد، loading را false می‌کنیم
                return;
            }

            try {
                const token = localStorage.getItem("token"); // گرفتن توکن از localStorage
            
                // ارسال توکن در هدر
                const response = await axios.get("https://reqres.in/api/users/1", {
                    headers: {
                        Authorization: `Bearer ${token}`, // ارسال توکن در هدر
                    },
                });
            
                console.log(response);
            
                // بررسی اینکه آیا پاسخ حاوی اطلاعات کاربر است یا نه
                if (response.data && response.data.data) {
                    setUser(response.data.data); // ذخیره اطلاعات کاربر در state
                } else {
                    setUser(null); // اگر کاربری وجود نداشت
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setUser(null); // در صورت بروز خطا، کاربر را null قرار می‌دهیم
            }
            
            setLoading(false); // پس از اتمام درخواست، بارگذاری تمام می‌شود
        };

        fetchUserData();
    }, []);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const scrollToFeature = () => {
        const featureSection = document.getElementById('Feature');
        featureSection.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToHeader = () => {
        const headerSection = document.getElementById("Home");
        headerSection.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToBlog = () => {
        const blogSection = document.getElementById("Blog");
        blogSection.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTeam = () => {
        const teamSection = document.getElementById("Team");
        teamSection.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("Contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
            <>  
                <modalsContext.Provider value={{ User , setUser , showModal, openModal, closeModal }}>
                    {loading ? (
                        <div>Loading...</div> // یا هر محتوای لودینگ دیگری
                    ) : (
                        <>
                            <Navbar
                                scrollToContact={scrollToContact}
                                scrollToTeam={scrollToTeam}
                                scrollToBlog={scrollToBlog}
                                scrollToHeader={scrollToHeader}
                                scrollToFeature={scrollToFeature}
                            />
                            <Header />
                            <Modal User={User} />
                            <Feature />
                            <Vuejs />
                            <Reacts />
                            <Blog />
                            <OurTeam />
                            <Questions />
                            <Contact />
                            <Footer />
                        </>
                    )}
                </modalsContext.Provider>
                <Routes>
                        <Route path="/dashboard" element={<Dashboard />}/>
                </Routes>
            </>
        );
}
export default App;
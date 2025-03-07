import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Modal from './modal';
import modalsContext from '../context/modals';
import Dashboard from './dashboard';
import Protect from './protect';
import MainLayOut from './mainLayout';



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
                 // گرفتن توکن از localStorage
            
                // ارسال توکن در هدر
                const response = await axios.get("https://reqres.in/api/users/1", {
                    headers: {
                        Authorization: `Bearer ${token}` // ارسال توکن در هدر
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
                <modalsContext.Provider value={{ User , setUser , showModal, openModal, closeModal , scrollToContact , scrollToTeam , scrollToBlog , scrollToHeader ,  scrollToFeature}}>
                    {loading ? (
                        <div>Loading...</div> // یا هر محتوای لودینگ دیگری
                    ) : (
                        <>
                            <Modal User={User}/>
                        <Routes>
                            <Route path='/' element={<MainLayOut/>}/>
                            <Route path="/dashboard" element={<Protect><Dashboard /></Protect>} />  
                            {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
                        </Routes>
                        </>
                    )}
                </modalsContext.Provider>
            </>
        );
}
export default App;
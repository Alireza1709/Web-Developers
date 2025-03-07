import React from 'react';
import { Navigate } from 'react-router-dom';


const Protect = ({ children }) => {
    const isAuth = localStorage.getItem("token");  // بررسی وضعیت احراز هویت
    return isAuth ? children : <Navigate to="/" />;  // اگر کاربر وارد نشده باشد، هدایت به صفحه /header
};

 
export default Protect;
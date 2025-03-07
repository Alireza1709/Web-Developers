import React, {useState } from 'react';
import { Navigate } from 'react-router-dom';


const Dashboard = () => {

    const [navigate , setNavigate] = useState(false)

    const backBtnHandle = ()=>{
       setNavigate(true)
    }

    if(navigate){
        return <Navigate to="/"/>
    }

    return ( 
        <>
            <div className="container">
                <button onClick={backBtnHandle} className='btn btn-danger backbtn mt-3' style={{ "width": "150px" }}>Back Home</button>
            </div>
            <h1>Dashboard</h1>
        </>
     );
}
 
export default Dashboard;
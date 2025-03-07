import React from 'react';
import { useContext } from 'react';
import modalsContext from '../context/modals';
import myimg from '../img/myimg.png'


const Header = () => {
    const {openModal} = useContext(modalsContext)
    const { User } = useContext(modalsContext)
    return ( 
        <>
            <div id="Home" className="container py-4 text-center">
                <header className='row align-items-center'>
                    <section className='col-md-6'>
                        <h2 className='display-4 py-4'>Build <span className='text-warning'>reactive</span> website easily! </h2>
                        <p className='lead text-muted pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos
                          iste suscipit in labore corrupti repudiandae. Quo quam laboriosam dolore sequi harum praesentium sunt ex
                           possimus asperiores exercitationem. Repellat, minima!</p>
                           <div className="text-center">
                           {
                                !User  ? ( // اگر کاربر وارد نشده باشد، دکمه "Get Started" نمایش داده می‌شود
                                    <button onClick={openModal} type='button' className='btn btn-primary modalbutton' data-bs-toggle="modal" data-bs-target="#examplemodal" style={{ "width": "150px" }}>
                                        Get Started
                                    </button>
                                ) : ( // اگر کاربر وارد شده باشد، دکمه "Dashboard" نمایش داده می‌شود
                                    <button onClick={() => {/* Logic to navigate to dashboard */}} className='btn btn-primary modalbutton' style={{ "width": "150px" }}>
                                        Dashboard
                                    </button>
                                )
                            }
                           </div>
                    </section>
                    <section className='col-md-6'>
                        <img src={myimg} alt="" className="img-fluid" />
                    </section>

                </header>
            </div>
        </>
     );
}
 
export default Header;
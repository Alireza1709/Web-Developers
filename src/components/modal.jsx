import React, { useState, useContext } from 'react';
import modalsContext from '../context/modals'; // وارد کردن Context
import axios from 'axios';
import * as yup from "yup";


const Modal = () => {
  const { showModal, closeModal } = useContext(modalsContext);
  const [errors, setErrors] = useState([]);
  const [account, setAccount] = useState({ email: '', password: ''}); // اضافه کردن فیلد username
  const [sending, setSending] = useState(false);
  const [isSignup, setIsSignup] = useState(false);  // وضعیت برای ثبت‌نام
  const {User , setUser} = useContext(modalsContext)

  const schema = yup.object().shape({
    email: yup.string().email("Your email format is not correct!").required("Please enter your email!"),
    password: yup.string().min(4, "Your password must be longer than 4 letters or numbers!").required("Please enter your password!"),
   
  });

  const validate = async () => {
    try {
      const result = await schema.validate(account, { abortEarly: false });
      return result;
    } catch (error) {
      setErrors(error.errors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setAccount(prevAccount => ({ ...prevAccount, [name]: value }));
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    const result = await validate();
    if (result) {
      setSending(true);
      try {
        const url = isSignup ? "https://reqres.in/api/register" : "https://reqres.in/api/login"; // تغییر URL بر اساس وضعیت
        const response = await axios.post(url, result);
        console.log(response);
        localStorage.setItem('token', response.data.token);        
        setSending(false);
        setUser(account.email)
        closeModal(); // بستن مودال بعد از ورود یا ثبت‌نام موفق
      } catch (error) {
        setSending(false);
        setErrors([isSignup ? "Error during registration!" : "Email or password is not correct! "]);
      }
    }
  };

  return (
    <>
      {/* Modal */}
      {showModal && <div className="modal-overlay" onClick={closeModal}></div>}
      <div className={`modal fade ${showModal ? 'show' : ''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" {...(!showModal && { inert: true })} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{isSignup ? 'Sign Up Now!' : 'Get Started Now!'}</h1>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* نمایش ارور‌ها داخل مودال */}
              {errors.length !== 0 && (
                <div className="alert alert-danger">
                  <ul>
                    {errors.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </div>
              )}
              <form onSubmit={handleAuth}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Enter Your Email...</label>
                  <input
                    onChange={handleChange}
                    value={account.email}
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@gmail.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Enter Your Password...</label>
                  <input
                    onChange={handleChange}
                    value={account.password}
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Your password must contain numbers and letters!"
                  />
                </div>
                <div className="container text-center">
                  <button
                    style={{ "width": "300px" }}
                    type="submit"
                    disabled={sending}
                    className="btn btn-primary my-2 py-2 px-4 "
                  >
                    {sending ? "Loading..." : isSignup ? "Sign Up" : "Login"}
                  </button>
                  <div className="text-center container my-2">
                    <span className='text-muted lead'>
                      {isSignup ? 'Already a member?' : 'Not a member?'}
                      <a
                        className='text-decoration-none'
                        href="#"
                        onClick={() => setIsSignup(!isSignup)} // تغییر وضعیت هنگام کلیک روی لینک
                      >
                        {isSignup ? 'Login Now' : 'Signup Now'}
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;



import React from 'react';
import react from '../img/react.png'



const Reacts = () => {
    return ( 
        <>
            <div style={{"backgroundColor" : "rgb(252, 252, 252"}}>
                <div className="container py-4 text-center">
                    <div className="row align-item-center">
                        <section className='col-md-6 mb-3'>
                            <img className="img-fluid" width="700" height="700" src={react} alt="react" /> 
                        </section>
                        <section className='col-md-6'>
                            <h2 className='display-4 py-4  mt-lg-5'>Suitable for <span style={{"color" : "rgb(98,252,213)"}}>big projects</span></h2>
                            <p className="lead text-muted pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos
                             iste suscipit in labore corrupti repudiandae. Quo quam laboriosam dolore sequi harum praesentium sunt ex
                             possimus asperiores exercitationem. Repellat, minima!</p>
                             <div className="text-center"><a style={{"width" : "150px"}} href="" className='btn btn-outline-success'><svg className="mb-1"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                             Read more
                            </a></div>
                        </section>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Reacts;
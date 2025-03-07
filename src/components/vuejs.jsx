import React from 'react';


const Vuejs = () => {
    return ( 
        <>
            <div id="Veujs" style={{"backgroundColor" : "rgb(20,17,17)"}}>
                <div className="container by-4 text-center">
                    <div className="row align-items-center">
                        <section className='col-md-6'>
                            <h2 className='display-4 py-4 text-white'> Be <span style={{"color" : "rgb(213 ,72 , 241)"}}> fast </span> and <span style={{"color" : "rgb(213 ,72 , 241)"}}>reactive</span></h2>
                            <p className='lead text-white pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos
                            iste suscipit in labore corrupti repudiandae. Quo quam laboriosam dolore sequi harum praesentium sunt ex
                            possimus asperiores exercitationem. Repellat, minima!</p>
                            <div className="text-center"><a href="" className='btn btn-outline-primary' style={{"width" : "150px"}}><svg className="mb-1"
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                             </svg>
                                Read more
                             </a></div>
                        </section>
                        <section className=' col-md-6'> 
                            <img className="img-fluid" width="700" height="700" src="https://img.icons8.com/nolan/600/vuejs.png"
                            alt="vuejs" />
                        </section>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Vuejs;
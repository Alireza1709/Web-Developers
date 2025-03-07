import React from 'react';
import post1 from '../img/post1.webp'
import post2 from '../img/post2.webp'
import post3 from '../img/post3.webp'

const Blog = () => {
    return ( 
        <>
            <div className="py-4" id="Blog">
                <main className='container'>
                    <h2 className='mt-5 display-5 text-center'>Recent posts from our Blog</h2>
                    <p className='lead text-muted pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate ullam
                     nemo error vero sapiente numquam laudantium! Eum voluptatem necessitatibus veniam fugiat, at, veritatis laborum
                    ullam sapiente illum distinctio temporibus?</p>
                    <div className='row'>
                    <div className="col-lg-4">
                        <div className="card mb-3 shadow">
                            <img src={post1} className='card-img-top' alt="" />
                            <div className="card-body">
                                <p className="card-text"><small className='text-body-secondary'>Last updated 3 mins ago</small></p>
                                <h5 className='card-title pb-4'>This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</h5>
                                <a href="" className='fs-6'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                 d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 shadow">
                            <img src={post2} className='card-img-top' alt="" />
                            <div className="card-body">
                                <p className="card-text"><small className='text-body-secondary'>Last updated 3 mins ago</small></p>
                                <h5 className='card-title pb-4'>This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</h5>
                                <a href="" className='fs-6'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                 d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-3 shadow">
                            <img src={post3} className='card-img-top' alt="" />
                            <div className="card-body">
                                <p className="card-text"><small className='text-body-secondary'>Last updated 3 mins ago</small></p>
                                <h5 className='card-title pb-4'>This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</h5>
                                <a href="" className='fs-6'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                 d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>Read more</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </>
     );
}
 
export default Blog;
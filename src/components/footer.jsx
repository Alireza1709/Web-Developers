import React from 'react';

const Footer = () => {
    return ( 
        <>
            <div className=" mt-4 text-white py-4" style={{"backgroundColor" : "rgb(25, 26 , 27)"}}>
                <div className="container pt-5">
                    <div className='row py-3'>
                        <div className="col-md-3 mb-4">
                            <h2 className="py-4">Web Developers!</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid praesentium itaque consectetur commodi ullam fugit nostrum ipsum? Rerum adipisci alias eum vitae placeat esse quia recusandae natus? Placeat, id!</span>
                        </div>
                        <div className="col-md-3 ps-5">
                            <h3 className="py-4 border-start border-3 border-primary ps-3">Pages</h3>
                            <ul className="list-unstyled mt-3">
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}}  href="">Vue.js</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">React.js</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Our team</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Contact</a>
                              </li>
                            </ul>
                        </div>
                        <div className="col-md-3 ps-5">
                            <h3 className="py-4 border-start border-3 border-primary ps-3">More</h3>
                            <ul className="list-unstyled mt-3">
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Vue.js</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">React.js</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Our team</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Contact</a>
                              </li>
                            </ul>
                        </div>
                        <div className="col-md-3 ps-5">
                            <h3 className="py-4 border-start border-3  border-primary ps-3">Posts</h3>
                            <ul className="list-unstyled mt-3">
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Vue.js</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">React.js</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Our team</a>
                              </li>
                              <li>
                                <a className="text-decoration-none" style={{"color" : "rgb(255, 255, 255)"}} href="">Contact</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr />
                      <div className="text-center text-white py-1">Designed and developed : <a style={{"textdecoration": "none" , "color" : "white"}} href="">Alireza Saberi</a></div>
                  </div>
              </div>
        </>
     );
}
 
export default Footer;
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            {/* top navbar  */}
            <nav className="bg-light shadow d-none d-lg-block d-xl-block d-xxl-block overflow ">
              <div className="row">
                <div className="col-6 ">
                  <div className="bg-dark d-table" style={{height: '100%', backgroundClip: 'text'}}>
                    <a href="#" className="text-decoration-none text-white d-flex mt-2 pe-2">
                      <p className="m-0 px-2 fw-bold ">EXCLUSIVE T-SHIRTS ON SALE | Limited time only</p>          
                      <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>  
                    </a>
                  </div>
                </div>
                <div className="col-6  d-flex align-items-center ">
                  <div className="col-8 d-flex text-center  ">
                    <div className="col-6  bg-success py-1 m-0">
                      <a href="#" className="text-decoration-none text-white align-items-center">
                        <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                        Order Bulk
                      </a>
                    </div>
                    <div className="col-6  bg-secondary py-1 m-0 ms-1">
                      <a href="#" className="text-decoration-none text-white align-items-center">            
                        Bangladesh
                        <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>            
                      </a>
                    </div>
                  </div>
                  <div className="col-4 d-flex justify-content-around ">
                    <a href="#" className="text-decoration-none ms-2" style={{display: 'contents'}}>
                      <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                      </svg>
                      Help
                    </a>
                    <div className="login_dropdown">
                      <a className="login_dropbtn" href="#" style={{display: 'contents'}}>
                        <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        Login
                      </a>
                      <div className="log_dropdown-content">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <a href="#">Order Tracking</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid row py-3 bg-white ">
                <div className="col-4 d-flex justify-content-around align-items-center ">
                <Link to="/"><img className="ms-2 " src="img/logo.png" alt="logo" style={{width: 125, height: 35}} /></Link>
                  {/* mega menu  */}
                  <div className="mega-menu ">        
                    <div className="mega_dropdown">
                      <a className="mega_dropbtn text-decoration-none" href="#">
                        Shop
                        <svg style={{width: 20, marginBottom: 3, marginTop: 1}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </a>
                      <div className="mega_dropdown-content  pt-4 rounded-bottom pb-0 " style={{ marginTop:'7px' }}>            
                        <div className="d-flex justify-content-center ">
                          <div className=" ps-2  pt-2 text-dark" style={{backgroundColor: '#edf5f9'}}>
                            <h6 className="header">MENS</h6>
                            <a className=" link-hover ps-0 " href="#">T-shirt (Sports Edition)</a>
                            <a className=" link-hover ps-0 " href="#">T-shirt (Sports Edition)</a>
                            <a className=" link-hover ps-0 " href="#">T-shirt (Sports Edition)</a>
                          </div>
                          <div className=" ps-2  pt-2 pb-5 text-dark" style={{backgroundColor: '#f7f7f7'}}>
                            <h6 className="header">WOMENS</h6>
                            <a className="data link-hover ps-0" href="#">Kurti, Tunic &amp; Tops</a>
                            <a className="data link-hover ps-0" href="#">Comfy Trouser</a>
                            <a className="data link-hover ps-0" href="#">T-shirt</a>
                          </div>
                          <div className=" ps-2  pt-2 pb-5 text-dark" style={{backgroundColor: '#edf5f9'}}>
                            <h6 className="header">FACE MASK</h6>
                            <a className="data link-hover ps-0" href="#">Professional 7 Layer Mask</a>
                            <a className="data link-hover ps-0" href="#">Sports Edition</a>
                            <a className="data link-hover ps-0" href="#">Womens Designer Edition</a>
                            <a className="data link-hover ps-0" href="#">Kids Face Mask</a>
                          </div>
                          <div className=" ps-2  pt-2 pb-5 text-dark" style={{backgroundColor: '#f7f7f7'}}>
                            <h6 className="header">SPORTS</h6>
                            <a className="data link-hover ps-0" href="#">Professional 7 Layer Mask</a>
                            <a className="data link-hover ps-0" href="#">Sports Edition</a>
                            <a className="data link-hover ps-0" href="#">Womens Designer Edition</a>
                            <a className="data link-hover ps-0" href="#">Kids Face Mask</a>
                          </div>
                          <div className=" ps-2  pt-2 pb-5 text-dark" style={{backgroundColor: '#edf5f9'}}>
                            <h6 className="header">SPORTS</h6>
                            <a className="data link-hover ps-0" href="#">Professional 7 Layer Mask</a>
                            <a className="data link-hover ps-0" href="#">Sports Edition</a>
                            <a className="data link-hover ps-0" href="#">Womens Designer Edition</a>
                            <a className="data link-hover ps-0" href="#">Kids Face Mask</a>
                          </div>             
                          <div className=" ps-2  pt-2 pb-5 text-dark" style={{backgroundColor: '#f7f7f7'}}>
                            <h6 className="header">SPORTS</h6>
                            <a className="data link-hover ps-0" href="#">Professional 7 Layer Mask</a>
                            <a className="data link-hover ps-0" href="#">Sports Edition</a>
                            <a className="data link-hover ps-0" href="#">Womens Designer Edition</a>
                            <a className="data link-hover ps-0" href="#">Kids Face Mask</a>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* mega menu end  */}
                </div>
                <div className="col-8 d-flex">
                  <div className="col-8 d-flex align-items-center">
                    <div className="search-container w-100  ">
                      <input type="text" className="search-input w-100 position-relative" placeholder="Search..." />
                      <div className="position-absolute top-50 start-100 translate-middle">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 me-5 ">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex justify-content-around align-items-center">
                    <a href="#" className="text-decoration-none link-hover">
                      <svg style={{width: 25}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>          
                    </a>
                    <a className="text-decoration-none me-3" href="#">
                      <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>  
                      <span className="badge bg-primary">0</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            {/* top navbar end */}
            {/* second navbar start */}
            <nav id="mobile-nav" className="navbar bg-light shadow sticky-top d-block  d-sm-block d-md-block d-lg-none d-xl-none">
              <div className="container-fluid">  
                {/* left elements */}
                <div className="d-flex align-items-center">
                  <button className="btn btn-sm border-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><svg style={{width: 25}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                 <Link to='/'> <img className="ms-2 " src="img/logo.png" alt="logo" style={{width: 125, height: 35}} /></Link>
                </div>
                {/* right elements */}      
                <div className="d-flex align-items-center ">
                  <a id="search_btn" className="text-decoration-none me-3 " href="#"><svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </a>
                  <a className="text-decoration-none me-3" href="#">
                    <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>        
                  </a>
                  <a className="text-decoration-none me-3" href="#">
                    <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>  
                    <span className="badge bg-primary">0</span>
                  </a>
                  {/* Default dropstart button */}
                  <div className="btn-group dropstart">   
                    {/* login and track order button */}
                    <div className="btn-group dropstart">
                      <a href="#" className="text-decoration-none dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>          
                      </a>
                      {/* <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"> */}
                      <ul className="dropdown-menu" style={{marginTop: 40, marginRight: '-28px'}}>
                        <li className="ms-2 "><Link className="text-decoration-none " to="/login">Login</Link></li>
                        <li className="ms-2 "><Link className="text-decoration-none " to="/register">Register</Link></li>
                        <li className="ms-2 "><a className="text-decoration-none " href="pages/register.html">Track Order</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* mobile offcanvas  */}
                  <div className="offcanvas offcanvas-start shadow-sm bg-light" style={{marginTop: 55, maxWidth: 350}} data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <div className="offcanvas-header">
                      <h4 className="offcanvas-title" id="offcanvasScrollingLabel">Categories</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">         
                      {/* accordion */}
                      <div className="accordion accordion-flush" id="accordionFlushExample">
                        {/* item 1 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header ">
                            <strong className="accordion-button btn-sm px-1 py-1 rounded border border-white " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                              Man
                            </strong>
                          </h2>
                          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show  p-0" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body px-1 py-0">
                              <ul className="list-unstyled ps-2">
                                <li>
                                  {/* nested items 1 */}
                                  <div className="accordion-item p-0">
                                    <h2 className="accordion-header ">
                                      <strong className="accordion-button collapsed  btn-sm ps-1   px-0 py-1 rounded border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-shirt" aria-expanded="false" aria-controls="panelsStay-shirt">
                                        Half Sleeve T-shirt
                                      </strong>
                                    </h2>
                                    <div id="panelsStay-shirt" className="accordion-collapse collapse px-0">
                                      <div className="accordion-body ps-2 py-0">
                                        <ul className="list-unstyled">
                                          <li><a className="text-decoration-none text-dark" href="#">Show All</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Half Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Comfy Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Sports Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Full Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Half Sleeve T-shirt</a></li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Full Sleeve T-shirt</a></li>
                                <li>
                                  {/* nested items  2*/}
                                  <div className="accordion-item p-0">
                                    <h2 className="accordion-header ">
                                      <strong className="accordion-button collapsed  btn-sm ps-1   px-0 py-1 rounded border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-maggie" aria-expanded="false" aria-controls="panelsStay-maggie">
                                        Maggie
                                      </strong>
                                    </h2>
                                    <div id="panelsStay-maggie" className="accordion-collapse collapse px-0">
                                      <div className="accordion-body ps-2 py-0">
                                        <ul className="list-unstyled">
                                          <li><a className="text-decoration-none text-dark" href="#">Show All</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Half Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Comfy Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Sports Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Full Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Polo T-shirt</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* item 2 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header ">
                            <strong className="accordion-button collapsed  btn-sm px-1 py-1 rounded border border-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-Womens" aria-expanded="false" aria-controls="panelsStay-Womens">
                              Womens
                            </strong>
                          </h2>
                          <div id="panelsStay-Womens" className="accordion-collapse collapse p-0" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body px-1 py-0">
                              <ul className="list-unstyled ps-2">
                                <li>
                                  {/* nested items 1 */}
                                  <div className="accordion-item p-0">
                                    <h2 className="accordion-header ">
                                      <strong className="accordion-button collapsed  btn-sm ps-1   px-0 py-1 rounded border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-Shorts" aria-expanded="false" aria-controls="panelsStay-Shorts">
                                        Shorts
                                      </strong>
                                    </h2>
                                    <div id="panelsStay-Shorts" className="accordion-collapse collapse px-0">
                                      <div className="accordion-body ps-2 py-0">
                                        <ul className="list-unstyled">
                                          <li><a className="text-decoration-none text-dark" href="#">Show All</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Half Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Comfy Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Sports Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Full Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Half Sleeve T-shirt</a></li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Full Sleeve T-shirt</a></li>
                                <li>
                                  {/* nested items  2*/}
                                  <div className="accordion-item p-0">
                                    <h2 className="accordion-header ">
                                      <strong className="accordion-button collapsed  btn-sm ps-1   px-0 py-1 rounded border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-Trouser" aria-expanded="false" aria-controls="panelsStay-Trouser">
                                        Comfy Trouser
                                      </strong>
                                    </h2>
                                    <div id="panelsStay-Trouser" className="accordion-collapse collapse px-0">
                                      <div className="accordion-body ps-2 py-0">
                                        <ul className="list-unstyled">
                                          <li><a className="text-decoration-none text-dark" href="#">Show All</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Half Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Comfy Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Sports Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Full Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Polo T-shirt</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* item 3 */}
                        <li className="list-unstyled ms-1 fw-bold py-1 ms-0 bg-white border border-success border-start-0 border-end-0 border-opacity-10"><a href="#" className="text-dark text-bold text-decoration-none">Face Mask</a></li>
                        {/* item 4 */}
                        <div className="accordion-item">
                          <h2 className="accordion-header ">
                            <strong className="accordion-button collapsed  btn-sm px-1 py-1 rounded border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-Kids" aria-expanded="false" aria-controls="panelsStay-Kids">
                              Kids
                            </strong>
                          </h2>
                          <div id="panelsStay-Kids" className="accordion-collapse collapse p-0" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body px-1 py-0">
                              <ul className="list-unstyled ps-2">
                                <li>
                                  {/* nested items 1 */}
                                  <div className="accordion-item p-0">
                                    <h2 className="accordion-header ">
                                      <strong className="accordion-button collapsed  btn-sm ps-1   px-0 py-1 rounded border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-Sleeve" aria-expanded="false" aria-controls="panelsStay-Sleeve">
                                        Half Sleeve T-shirt
                                      </strong>
                                    </h2>
                                    <div id="panelsStay-Sleeve" className="accordion-collapse collapse px-0">
                                      <div className="accordion-body ps-2 py-0">
                                        <ul className="list-unstyled">
                                          <li><a className="text-decoration-none text-dark" href="#">Show All</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Half Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Comfy Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Sports Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Full Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Half Sleeve T-shirt</a></li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Full Sleeve T-shirt</a></li>
                                <li>
                                  {/* nested items  2*/}
                                  <div className="accordion-item p-0">
                                    <h2 className="accordion-header ">
                                      <strong className="accordion-button collapsed  btn-sm ps-1   px-0 py-1 rounded border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStay-Polo" aria-expanded="false" aria-controls="panelsStay-Polo">
                                        Polo T-shirt
                                      </strong>
                                    </h2>
                                    <div id="panelsStay-Polo" className="accordion-collapse collapse px-0">
                                      <div className="accordion-body ps-2 py-0">
                                        <ul className="list-unstyled">
                                          <li><a className="text-decoration-none text-dark" href="#">Show All</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Half Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Comfy Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Sports Trouser</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Full Sleeve T-shirt</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Maggie</a></li>
                                          <li><a className="text-decoration-none text-dark" href="#">Polo T-shirt</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li><a className="text-decoration-none text-dark ps-1" href="#">Polo T-shirt</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* item 3 */}
                        <li className="list-unstyled ms-1 fw-bold py-1 bg-white "><a href="#" className="text-dark text-bold text-decoration-none">Face Mask</a></li>
                      </div>
                    </div>
                  </div>
                </div>
              </div></nav>
            {/* navbar end  */}
            {/* mobile search  */}
            {/* search bar  */}          
            <div className="search-container w-100 mb-2 mt-3 px-3 d-none   d-lg-none d-xl-none d-xxl-none " id="search_dev">
              <input type="text" className="search-input w-100 " placeholder="Search..." />
              <div className="search-button me-3">
                <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
            </div>
            {/* search bar end  */}
            {/* mobile search end */}
 
        </>
    );
};

export default Header;
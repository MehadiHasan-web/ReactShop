import React from 'react';

const Footer = () => {
    return (
        <>
            <div>            
            <section className="paymentmethod_section pt-5 pb-1" style={{background: '#f3f3f3 overflow'}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="payment_part">
                        <i style={{justifyContent: 'center', alignItems: 'center', display: 'block', fontSize: 27}} className="bx bxs-lock-alt text-center pb-2" />
                        <h5 className="text-center">All secure payment methods</h5>
                        <img style={{maxWidth: '100%', height: 'auto', margin: '15px 0'}} src="img/sslcommerz.png" alt />
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className="payment_part">
                        <i style={{justifyContent: 'center', alignItems: 'center', display: 'block', fontSize: 27}} className="bx bx-smile text-center pb-2" />
                        <h5 className="text-center" style={{fontWeight: 600, fontSize: '1.2rem'}}>Satisfaction guaranteed</h5>
                        <div className="text-center" style={{margin: '18px 0'}}>Made with premium quality materials.<br /><b>Cozy yet lasts the test
                            of time</b></div>
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className="payment_part">
                        <i style={{justifyContent: 'center', alignItems: 'center', display: 'block', fontSize: 27}} className="bx bxs-truck text-center pb-2" />
                        <h5 className="text-center" style={{fontWeight: 600, fontSize: '1.2rem'}}>Worldwide delivery</h5>
                        <img src="img/delivery.png" style={{maxWidth: '100%', height: 'auto', margin: '15px 0'}} alt />
                    </div> 
                    </div> 
                </div>
                </div>
            </section>
            {/* paymentmethod_section end*/}
            {/* contact_section started--------------------------*/}
            <section className=" overflow contact_section pt-4 " style={{background: '#37383f'}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className="search_part">
                        <div className="search_part_heading">
                        <h6 style={{color: '#fff'}}><i style={{color: 'orange', fontSize: 20}} className="bx bxl-gmail me-2" />GET SPECIAL DISCOUNTS IN YOUR INBOX</h6>
                        <div className="search_box">
                            <input type="email" name="email" required placeholder="Enter email to get offers, discounts and more." />
                            <button className="btn btn-sm btn-warning " type="submit">Subscribe</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="contact_part">
                        <h6 style={{color: '#fff'}} className="pb-2"><i style={{color: 'orange', fontSize: 20}} className="bx bxs-phone me-2" />FOR ANY HELP YOU MAY CALL US AT</h6>
                        <div style={{textAlign: 'left', color: '#aaa', marginLeft: 20}}>
                        +8809677666888<br /> Open 24 Hours a Day, 7 Days a week
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* contact_section end---*/}
            {/* fooder_section_started -*/}
            <section className=" overflow fooder_section pt-4 pb-5" style={{background: '#58595b'}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className="fooder_heading">
                        <h4> FABRILIFE</h4>
                        <ul className="pt-4 fabrlife_menu">
                        <li className="sub-item-list"><a href="#">ABOUT US</a></li>
                        <li><a href="#">TERMS &amp; CONDITIONS</a></li>
                        <li><a href="#">PRIVACY POLICY</a></li>
                        <li><a href="#">CANCELLATION &amp; RETURN
                            POLICY</a></li>
                        <li><a href="#">FAQS</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        </ul>
                    </div>  
                    </div>
                    <div className="col-md-3">
                    <div className="fooder_heading_01">
                        <h4 style={{color: '#fff'}}>MEN</h4>
                        <ul className="men_menu pt-4">
                        <li><a href="#">SHORT SLEEVE</a></li>
                        <li><a href="#">LONG SLEEVE</a></li>
                        <li><a href="#">POLO</a></li>
                        <li><a href="#">SHIRT</a></li>
                        <li><a href="#">HOODIE</a></li>
                        <li><a href="#">COMFY TROUSER</a></li>
                        <li><a href="#">SPORTS TROUSER</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="fooder_heading_02">
                        <h4 style={{color: '#fff'}}>W0MEN</h4>
                        <ul className="women pt-4">
                        <li><a href>COMFY TROUSER</a></li>
                        <span style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>FACE MASK</span>
                        <li><a href>CLASSIC</a></li>
                        <li><a href>DESIGNER EDITION</a></li>
                        <li><a href>KIDS MASK</a></li>
                        <span style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>FACE MASK</span>
                        <li><a href>JERSEY</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="fooder_heading_03">
                        <h4 style={{color: '#fff'}}>KIDS</h4>
                        <ul className="kids_menu pt-4">
                        <li><a href="#">MAGGIE</a></li>
                        <li><a href="#">SHORT SLEEVE</a></li>
                        <li><a href="#">LONG SLEEVE</a></li>
                        <li><a href="#">SHORTS</a></li>
                        <li><a href="#">TROUSER</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* fooder_section_end------ -*/}
            {/* fooder-section start------*/}
            <section className="overflow coyright_section">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="coyright_part">
                        <div className="coyright_heading">
                        <p>FABRILIFE prints a huge variety of custom clothing like T-shirts, hoodies and more. Your order is
                            handled daily with a lot of ❤️️ from BANGLADESH and <span className="worldwide">delivered worldwide!</span></p>
                        <p className="coyright pt-4 pb-2">Copyright © 2018 Fabrilife Limited. All Right Reserved</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>

        </>
    );
};

export default Footer;
import React from 'react';

const PrintedShort = () => {
    return (
        <>
            
            <div className="printed_short_section pt-5 pb-5 overflow">
            <div className="container">
                <div className="row g-2">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <a className="product-link" href="#">
                    <div className="printed_short_img">
                        <img src="img/square.jpg" alt />
                    </div>
                    <div className="printed_short_content text-center">
                        <p className="printed_content">Printed Short Sleeve</p>
                    </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <a className="product-link" href="#">
                    <div className="printed_short_img">
                        <img src="img/square1.jpg" alt />
                    </div>
                    <div className="printed_short_content text-center">
                        <p className="printed_content">Designer Edition</p>
                    </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <a className="product-link" href="#">
                    <div className="printed_short_img">
                        <img src="img/square2.jpg" alt />
                    </div>
                    <div className="printed_short_content text-center">
                        <p className="printed_content">Short Sleeve Blanks</p>
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>                         

        </>
    );
};

export default PrintedShort;
import React from 'react';

const BulkOrder = () => {
    return (
        <>
            <section className="Fabrilife_section overflow pt-5 pb-5 container-fluid" style={{background: '#eaeaea', color: '#000'}}>
            <div className="container">
                <div className="row">
                <div className="col-lg-5 col-sm-12">
                    <div className="comfort">
                    <div className="comfort-heading pb-3">
                        <h2>Bulk Order / Wholesale<i className="bx bx-chevron-right" /> </h2>
                    </div>
                    <span>We provide plain t-shirts and apparel fo all your custom branding needs from the
                        top brands worldwide at unbeatable wholesale prices. With no minimum orders,
                        everyone can enjoy the benefits of buying bulk t-shirts without ordering bulk
                        quantities.</span>
                    </div>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <a href="#">
                    <div className="comfort_img">
                        <img src="img/70.jpg" alt />
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </section>

        </>
    );
};

export default BulkOrder;
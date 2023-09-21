import React from 'react';

const NewProduct = () => {
    return (
        <>
        <div className="container overflow ">
            <div className="row">
                <div className="col-lg-4 price">
                <img className="my-img rounded shadow" src="img/big2.jpg" alt />
                <span className="span p-1 bg-white rounded fw-bold ">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                </div>
                <div className="col-lg-8">
                <div className="row price">
                    {/* p 1 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a href="#">
                        <img className="child rounded-top  shadow" src="img/41.jpg" alt />
                        <span className="span p-1 bg-white rounded fw-bold ">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                    </a>
                    </div>
                    {/* p 2 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a href="#">
                        <img className="child rounded-top  shadow" src="img/41.jpg" alt />
                        <span className="span p-1 bg-white rounded fw-bold ">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                    </a>
                    </div>
                    {/* p 3 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a href="#">
                        <img className="child rounded-top  shadow" src="img/41.jpg" alt />
                        <span className="span p-1 bg-white rounded fw-bold">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                    </a>
                    </div>
                    {/* p 4 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a href="#">
                        <img className="child rounded-top  shadow" src="img/41.jpg" alt />
                        <span className="span p-1 bg-white rounded fw-bold">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                    </a>
                    </div>
                    {/* p 5 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a href="#">
                        <img className="child rounded-top  shadow" src="img/41.jpg" alt />
                        <span className="span p-1 bg-white rounded fw-bold">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                    </a>
                    </div>
                    {/* p 6 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a href="#">
                        <img className="child rounded-top  shadow" src="img/41.jpg" alt />
                        <span className="span p-1 bg-white rounded fw-bold">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                    </a>
                    </div>
                    {/* p 7 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <a href="#">
                        <img className="child rounded-top  shadow" src="img/41.jpg" alt />
                        <span className="span p-1 bg-white rounded fw-bold">$600 <del className="text-decoration-line-through text-muted">$1000</del></span>
                    </a>
                    </div>
                    {/* p 8 */}
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                    <div className="view_product_section">
                        <a className="product-view" href="#">
                        <img className="img-fluid" height="px" src="img/product_100.jpg" />
                        </a>
                        <a className="views-link" href="pages/shop.html">
                        <div className="view-title">
                            <p style={{fontSize: 25}}>view<br /><br /> more</p>
                        </div>
                        </a>
                        <div>
                        <span className="span p-1 bg-white rounded fw-bold">$658 <del className="text-decoration-line-through text-muted">$1000</del></span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        </>
    );
};

export default NewProduct;
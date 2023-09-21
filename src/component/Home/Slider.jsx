import React from 'react';

const Slider = () => {
    return (
        <>
            {/* slider  */}
            <div id="carouselSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                <img src="img/banner_imag.jpg" className="d-block w-100 img-fluid" alt="image" />
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                <img src="img/banner_imag.jpg" className="d-block w-100 img-fluid" alt="image 2" />
                </div>
                <div className="carousel-item">
                <img src="img/banner_imag.jpg" className="d-block w-100 img-fluid" alt="image 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            {/* slider end */}

        </>
    );
};

export default Slider;
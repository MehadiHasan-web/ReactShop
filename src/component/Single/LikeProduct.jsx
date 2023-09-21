import React from 'react';

const LikeProduct = () => {
    return (
        <>
        <div className="container mb-5  ps-sm-2 p-md-0 p-lg-0 px-xl-0 ">
        {/* next product list  */}
        <div className="mb-3">
            <p>You may also like</p>
            <hr className="text-dark opacity-100" />
            {/* products  */}
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 row-cols-xxl-6 g-4">
            {/* p 1 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl2.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 2 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl2.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 1 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl2.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 3*/}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl2.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 4 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl2.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 5*/}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl2.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 6 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/single1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 7 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/single1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 8 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/single1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 9 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/single1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 10 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/single1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 11 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/single1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>        
            </div>
            <div className="mt-4">
            <p>People also purchased</p>
            <hr className="text-dark opacity-100" />
            </div>
            {/* products  */}
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 row-cols-xxl-6 g-4">
            {/* p 1 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 2 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 1 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 3*/}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 4 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 5*/}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl1.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 6 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl3.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 7 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl3.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 8 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl3.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 9 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl3.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 10 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl3.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>
            {/* p 11 */}
            <div className="col">
                <div className="card h-100 border border-0">
                <div className="position-relative">
                    <img className="w-100 rounded rounded-end shadow " src="img/pl3.jpg" alt="img" />
                    <p className=" text-center position-absolute top-100 start-50 translate-middle  bg-white text-black rounded d-flex fw-bold px-2">$685.00 <span className="fw-normal text-decoration-line-through ms-2">$785.00</span></p>
                </div>
                <div className="card-body px-0 pb-0">
                    <button type="button" className="btn btn-dark text-white mt-3 btn-sm w-100 p-0 rounded-0" data-bs-toggle="modal" data-bs-target="#addtocardmodal">
                    <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                
                    Add to Card</button>
                </div>
                </div>
            </div>        
            </div>
        </div>
        </div>

        </>
    );
};

export default LikeProduct;
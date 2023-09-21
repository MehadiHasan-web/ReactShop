import React from 'react';
import {Link} from 'react-router-dom';

const Product = () => {
    return (
        <>
            
            {/* right section  */}
            <div className=" col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 ms-lg-3 ms-xl-3 px-sm-2 position-relative overflow-hidden">
                {/* search bar  */}          
                <div className="search-container w-100 mb-3 ">
                <input type="text" className="search-input w-100 " placeholder="Search..." />
                <div className="search-button ">
                    <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                </div>
                {/* search bar end  */}
                {/* tag section  */}
                <div className="d-flex flex-wrap my-3 gap-1 d-none d-lg-block d-xl-block d-xxl-block ">
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">premium</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">New</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">premium</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Charcoal</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Tshart</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Black</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Combo</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Anthramelange</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">premium</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">New</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">premium</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Charcoal</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Tshart</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Black</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Combo</span></a>
                <a href="#" className="text-decoration-none mb-2"><span className="badge bg-dark border  ">Anthramelange</span></a>
                </div>
                {/* tags section end  */}
                {/* products start  */}
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3  row-cols-xxl-4  row-gap-4 ">
                {/* p 1 */}
                <div className="col ">
                    <div className="shadow  ">                
                    <div className="card shop_card rounded-0">
                        <Link to="/Single" className="text-decoration-none ">
                        <div className="position-relative overflow-hidden">
                            <img src="img/p1.jpg" className="card-img-top img-fluid product_img rounded-0" alt="products" />
                        </div>
                        <div className="position-absolute top-0 end-0 text-center text-white fw-bold" style={{width: 70, backgroundColor: 'rgb(225, 34, 34)'}}>SALE</div>
                        <div className="card-body pt-2 pb-0 px-0">
                            <h6 className="card-title text-center m-0 ">Premium Blank T-shirt</h6>
                            <div className="text-center d-flex justify-content-center text-white mt-2">
                            <span className=" bg-dark fw-bold" style={{width: 120}}> Save Tk. <span>570</span></span>                      
                            </div>
                            <span className=" mt-1 d-flex justify-content-center text-dark fw-bold"><span className="text-danger me-2 text-decoration-line-through">TK140</span> TK580 </span>                      
                        </div>
                        </Link>
                        <button type="button" className="btn btn-dark mt-2 w-100 rounded-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Buy Now</button>
                    </div>                
                    </div>
                </div>
                {/* p  2*/}
                <div className="col ">
                    <div className="shadow  ">                
                    <div className="card shop_card rounded-0">
                        <Link to="/Single" className="text-decoration-none ">
                        <div className="position-relative overflow-hidden">
                            <img src="img/p2.jpg" className="card-img-top img-fluid product_img rounded-0" alt="products" />
                        </div>
                        <div className="position-absolute top-0 end-0 text-center text-white fw-bold" style={{width: 70, backgroundColor: 'rgb(225, 34, 34)'}}>SALE</div>
                        <div className="card-body pt-2 pb-0 px-0">
                            <h6 className="card-title text-center m-0 ">Premium Blank T-shirt</h6>
                            <div className="text-center d-flex justify-content-center text-white mt-2">
                            <span className=" bg-dark fw-bold" style={{width: 120}}> Save Tk. <span>570</span></span>                      
                            </div>
                            <span className=" mt-1 d-flex justify-content-center text-dark fw-bold"><span className="text-danger me-2 text-decoration-line-through">TK140</span> TK580 </span>                      
                        </div>
                        </Link>
                        <button type="button" className="btn btn-dark mt-2 w-100 rounded-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Buy Now</button>
                    </div>                
                    </div>
                </div>
                {/* p 3 */}
                <div className="col ">
                    <div className="shadow  ">                
                    <div className="card shop_card rounded-0">
                        <Link to="/Single" className="text-decoration-none ">
                        <div className="position-relative overflow-hidden">
                            <img src="img/p3.jpg" className="card-img-top img-fluid product_img rounded-0" alt="products" />
                        </div>
                        <div className="position-absolute top-0 end-0 text-center text-white fw-bold" style={{width: 70, backgroundColor: 'rgb(225, 34, 34)'}}>SALE</div>
                        <div className="card-body pt-2 pb-0 px-0">
                            <h6 className="card-title text-center m-0 ">Premium Blank T-shirt</h6>
                            <div className="text-center d-flex justify-content-center text-white mt-2">
                            <span className=" bg-dark fw-bold" style={{width: 120}}> Save Tk. <span>570</span></span>                      
                            </div>
                            <span className=" mt-1 d-flex justify-content-center text-dark fw-bold"><span className="text-danger me-2 text-decoration-line-through">TK140</span> TK580 </span>                      
                        </div>
                        </Link>
                        <button type="button" className="btn btn-dark mt-2 w-100 rounded-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Buy Now</button>
                    </div>                
                    </div>
                </div>
                {/* p 4 */}
                <div className="col ">
                    <div className="shadow  ">                
                    <div className="card shop_card rounded-0">
                        <Link to="/Single" className="text-decoration-none ">
                        <div className="position-relative overflow-hidden">
                            <img src="img/p2.jpg" className="card-img-top img-fluid product_img rounded-0" alt="products" />
                        </div>
                        <div className="position-absolute top-0 end-0 text-center text-white fw-bold" style={{width: 70, backgroundColor: 'rgb(225, 34, 34)'}}>SALE</div>
                        <div className="card-body pt-2 pb-0 px-0">
                            <h6 className="card-title text-center m-0 ">Premium Blank T-shirt</h6>
                            <div className="text-center d-flex justify-content-center text-white mt-2">
                            <span className=" bg-dark fw-bold" style={{width: 120}}> Save Tk. <span>570</span></span>                      
                            </div>
                            <span className=" mt-1 d-flex justify-content-center text-dark fw-bold"><span className="text-danger me-2 text-decoration-line-through">TK140</span> TK580 </span>                      
                        </div>
                        </Link>
                        <button type="button" className="btn btn-dark mt-2 w-100 rounded-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Buy Now</button>
                    </div>                
                    </div>
                </div>
                {/* p 5 */}
                <div className="col ">
                    <div className="shadow  ">                
                    <div className="card shop_card rounded-0">
                        <Link to="/Single" className="text-decoration-none ">
                        <div className="position-relative overflow-hidden">
                            <img src="img/p2.jpg" className="card-img-top img-fluid product_img rounded-0" alt="products" />
                        </div>
                        <div className="position-absolute top-0 end-0 text-center text-white fw-bold" style={{width: 70, backgroundColor: 'rgb(225, 34, 34)'}}>SALE</div>
                        <div className="card-body pt-2 pb-0 px-0">
                            <h6 className="card-title text-center m-0 ">Premium Blank T-shirt</h6>
                            <div className="text-center d-flex justify-content-center text-white mt-2">
                            <span className=" bg-dark fw-bold" style={{width: 120}}> Save Tk. <span>570</span></span>                      
                            </div>
                            <span className=" mt-1 d-flex justify-content-center text-dark fw-bold"><span className="text-danger me-2 text-decoration-line-through">TK140</span> TK580 </span>                      
                        </div>
                        </Link>
                        <button type="button" className="btn btn-dark mt-2 w-100 rounded-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Buy Now</button>
                    </div>                
                    </div>
                </div>
                {/* p 6 */}
                <div className="col ">
                    <div className="shadow  ">                
                    <div className="card shop_card rounded-0">
                        <Link to="/Single" className="text-decoration-none ">
                        <div className="position-relative overflow-hidden">
                            <img src="img/p2.jpg" className="card-img-top img-fluid product_img rounded-0" alt="products" />
                        </div>
                        <div className="position-absolute top-0 end-0 text-center text-white fw-bold" style={{width: 70, backgroundColor: 'rgb(225, 34, 34)'}}>SALE</div>
                        <div className="card-body pt-2 pb-0 px-0">
                            <h6 className="card-title text-center m-0 ">Premium Blank T-shirt</h6>
                            <div className="text-center d-flex justify-content-center text-white mt-2">
                            <span className=" bg-dark fw-bold" style={{width: 120}}> Save Tk. <span>570</span></span>                      
                            </div>
                            <span className=" mt-1 d-flex justify-content-center text-dark fw-bold"><span className="text-danger me-2 text-decoration-line-through">TK140</span> TK580 </span>                      
                        </div>
                        </Link>
                        <button type="button" className="btn btn-dark mt-2 w-100 rounded-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                        <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        Buy Now</button>
                    </div>                
                    </div>
                </div>
                {/* product details model  */}
                {/* Modal */}
                <div className="modal fade" id="productDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content ">
                        <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Price Details</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <div className="d-flex">
                            <div className="col-4 card1">
                            <p className="fw-bold">Mens Premium Designer Edition T Shirt -Youniverse</p>
                            <div className="position-relative overflow-hidden rounded" style={{cursor: 'pointer'}}>
                                <img src="img/p1.jpg" className=" img-fluid product_img rounded shadow" alt="products" />
                            </div>
                            </div>
                            <div className="col-8">
                            <div className="d-flex justify-content-center">
                                <div>
                                <p className="fw-bold text-center">Choose Size</p>
                                <div className>
                                    <button className="shadow bg-white pe-2" style={{width: 50}}>M</button>
                                    <button className="shadow bg-white pe-2" style={{width: 50}}>L</button>
                                    <button className="shadow bg-white pe-2" style={{width: 50}}>XL</button>
                                    <button className="shadow bg-white pe-2" style={{width: 50}}>XXL</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button offcanvas-end" className="btn btn-primary add-to-cart" aria-controls="hideadtocard">Add To Card</button>
                        </div>
                    </div>
                    </div>
                </div>
                {/* fly img  */}
                <div className="shopping-cart" data-product-count={0} />
                <input type="hidden" className=" arrow left" />
                <input type="hidden" className="arrow right" />
                {/* fly img end  */}
                {/* product details model end */}          
                </div>
                {/* products end */}
                {/* right add to card section  */}
                <div className="position-absolute top-50 start-100 translate-middle position-fixed pe-4 ">
                <button className="btn btn-primary btn-sm " type="button" data-bs-toggle="offcanvas" data-bs-target="#hideadtocard" aria-controls="hideadtocard">
                    <svg style={{width: 25}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>                         
                </button>
                <p className="ms-2 badge bg-primary m-0">2</p>     
                </div>
                {/* offcanvas */}
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="hideadtocard" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-bold" id="offcanvasScrollingLabel">CART</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    {/* card list 1 */}
                    <div className="card p-1 shadow-sm mb-2">
                    <div className="d-flex justify-content-between">
                        <a className="col-8" href="#">Mens Premium Sports Active Wear T-shirt - Reverse</a>
                        <div className="overflow-hidden col-4 rounded">
                        <img src="img/p1.jpg" className="card-img-top img-fluid product_img" alt="products" />
                        </div>
                    </div>
                    {/* card table  */}
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Price</th>
                            <td>TK 512</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="col">Size</th>
                            <td>
                            <select className="form-select form-select-sm" aria-label="Example select with button addon">
                                <option selected>XL</option>
                                <option value={1}>L</option>
                                <option value={2}>M</option>
                                <option value={3}>XL</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Quantity</th>
                            <td>
                            <select className="form-select form-select-sm" aria-label="Example select with button addon">
                                <option selected>1</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Subtotal</th>
                            <td>TK 512</td>
                        </tr>
                        <tr>
                            <th>
                            {/* this is open model  */}
                            <button type="button" className="btn btn-sm btn-dark mt-2  rounded-top-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                                <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Add another size</button>
                            </th>
                            {/* card list delate  */}
                            <td>
                            <button className="btn btn-sm btn-danger text-white rounded-top-0 mt-2 ">
                                <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {/* card table end  */}
                    </div>
                    {/* card list 2 */}
                    <div className="card p-1 shadow-sm mb-2">
                    <div className="d-flex justify-content-between">
                        <a className="col-8" href="#">Mens Premium Sports Active Wear T-shirt - Reverse</a>
                        <div className="overflow-hidden col-4 rounded">
                        <img src="img/p1.jpg" className="card-img-top img-fluid product_img" alt="products" />
                        </div>
                    </div>
                    {/* card table  */}
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Price</th>
                            <td>TK 512</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="col">Size</th>
                            <td>
                            <select className="form-select form-select-sm" aria-label="Example select with button addon">
                                <option selected>XL</option>
                                <option value={1}>L</option>
                                <option value={2}>M</option>
                                <option value={3}>XL</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Quantity</th>
                            <td>
                            <select className="form-select form-select-sm" aria-label="Example select with button addon">
                                <option selected>1</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Subtotal</th>
                            <td>TK 512</td>
                        </tr>
                        <tr>
                            <th>
                            {/* this is open model  */}
                            <button type="button" className="btn btn-sm btn-dark mt-2  rounded-top-0" data-bs-toggle="modal" data-bs-target="#productDetails">
                                <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Add another size</button>
                            </th>
                            {/* card list delate  */}
                            <td>
                            <button className="btn btn-sm btn-danger text-white rounded-top-0 mt-2 ">
                                <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {/* card table end  */}
                    </div>
                    {/* total price  */}
                    <div className="d-flex justify-content-between p-2  shadow bg-white rounded ">
                    <div className="fw-bold text-center ms-2 ">
                        Total
                        <br />
                        <span className="fw-bold ms-2">TK1140</span>
                    </div>
                    {/* checkout model  */}
                    <div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#checkout">
                        Checkout
                        </button>
                    </div>   
                    {/* checkout model end */}
                    </div>
                    {/* total price end */}
                    {/* card list end  */}             
                </div>
                </div>
                {/* right add to card section end */}
            </div>
            {/* total proce checkout Modal */}
            <div className="modal fade" id="checkout" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5 " id="exampleModalLabel">My Shipping address is</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    <div className="d-flex justify-content-between mx-4">
                        <button className="btn btn-sm btn-dark">Inside Bangladesh</button>
                        <button className="btn btn-sm btn-info">Outside Bangladesh</button>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            {/* modal end  */}
            {/* right section end  */}
            
           
        </>
    );
};

export default Product;
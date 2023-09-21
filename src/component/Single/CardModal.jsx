import React from 'react';

const CardModal = () => {
    return (
        <>
            
            {/* card modal  */}
            <div className="modal fade" id="addtocardmodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5 " id="exampleModalLabel">Choose Size</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                    <div className="d-flex">
                        <div className="col-4 overflow-hidden rounded">
                        <img className="rounded shadow w-100 product_img" src="img/p1.jpg" alt="img" />
                        </div>
                        <div className="col-8 ms-2">
                        <strong className>Mens Premium Flexsec Shorts - Ebonlock</strong>
                        <div className="mt-2">
                            <strong className="fw-bold text-muted">Select Size:</strong>
                            <ul className="size-selectors-container list-inline">
                            <div className="size-selectors-container list-inline" style={{padding: 0}}>
                                <div className="size-selector list-inline-item size-selector-selected" data-size="M">M</div>
                                <div className="size-selector list-inline-item" data-size="L">L</div>
                                <div className="size-selector list-inline-item" data-size="XL">XL</div>
                                <div className="size-selector list-inline-item" data-size="2XL">2XL</div>
                            </div>
                            <span className="no-size-selected" style={{color: 'rgb(230, 28, 28)', display: 'none'}}>Please select a size &nbsp;<i className="fa fa-arrow-up" aria-hidden="true" /></span>
                            </ul>
                        </div>
                        {/* quantity  */}
                        <div className="add2cartContainer">
                            <div className="number-input">
                            <button className="quantity-selector-minus">
                                <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>              
                            </button>
                            <input className="quantity" name="quantity" defaultValue={1} type="number" />
                            <button className="quantity-selector-plus">
                                <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <div className="d-flex ">
                        <button type="button" className="btn btn-dark text-white  btn-sm me-3" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-dark text-white  btn-sm">
                        <svg style={{width: 20, marginBottom: 3}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add to Card</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* card modal end */}
            {/* right add to card section  */}
            <div className=" top-50 start-100 translate-middle position-fixed pe-4 ">
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

        </>
    );
};

export default CardModal;
import React from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Shop/Sidebar';
import Product from '../component/Shop/Product';

const Shop = () => {
    return (
        <>
           <Header/>

            <div className="container-fluid mt-4 px-2 px-md-2 px-lg-3 px-xl-5 overflow-hidden">
            <div className="d-flex">
                
                <Sidebar/>
                <Product/>

            </div>
            </div>


        </>
    );
};

export default Shop;
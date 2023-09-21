import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import SingleProduct from '../component/Single/SingleProduct';
import BoughtProduct from '../component/Single/BoughtProduct';
import LikeProduct from '../component/Single/LikeProduct';
import CardModal from '../component/Single/CardModal';

const Single = () => {
    return (
        <>
            <Header/>
            <div className="container mt-3 mb-5  ps-sm-2 p-md-0 p-lg-0 px-xl-0">

            <SingleProduct/>
            <BoughtProduct/>
            <LikeProduct/>
            <CardModal/>

            </div>
            <Footer/>
            
        </>
    );
};

export default Single;
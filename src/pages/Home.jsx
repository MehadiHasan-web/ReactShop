import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Slider from '../component/Home/Slider';
import HomeProduct from '../component/Home/HomeProduct';
import PrintedShort from '../component/Home/PrintedShort';
import NewProduct from '../component/Home/NewProduct';
import Confidence from '../component/Home/Confidence';
import Premium from '../component/Home/Premium';
import BulkOrder from '../component/Home/BulkOrder';


// import 'assets/js/navbar.js';
// import 'assets/js/singlePage.js';
// import 'assets/js/flyimg'; 

const Home = () => {
    return (
        <>
        <Header/>
        <Slider/>
        <HomeProduct/>
        <PrintedShort/>
        <NewProduct/>
        <Confidence/>
        <NewProduct/>
        <PrintedShort/>
        <Premium/>
        <NewProduct/>
        <BulkOrder/>

        <Footer/> 
        </>
    );
};

export default Home;
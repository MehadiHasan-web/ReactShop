import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
    return (
        <>
        <Header/>

        <section className="login_section overflow pt-5">
        <div className="container">
            <div className="row">
            <div className="col-sm-3" />
            <div className="col-sm-6">
                <div className="sign_heading text-center">
                <h2>Sign In</h2>
                </div>
                <hr />
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" style={{width: '100%', borderRadius: 'opx'}} className="btn btn-block btn-success ">Login</button><br /><br />
                <div className="sign_content text-center pb-3">
                    <a href="#">Forgot Your Password?</a>  |
                    <a href="register.html">Registration</a> 
                </div>
                <p style={{textAlign: 'center', fontWeight: 'bolder', fontSize: 'medium'}}>OR</p>
                <div className="btn_social">
                    <a className="btn btn-block btn-social btn-facebook" style={{position: 'center'}} href="#"> <i className="bx bxl-facebook" /> Sign in with Facebook</a>   
                </div>
                </form> 
            </div>
            <div className="col-sm-3" />
            </div>
        </div>
        </section>
       
       <Footer/>
        </>
    );
};

export default Login;
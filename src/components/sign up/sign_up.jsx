import React from "react";
import './signUp.css'
import twitterImg from '../../assets/img/twitter.png'
import facebookImg from '../../assets/img/facebook.png'
import linkedinImg from '../../assets/img/linkedin.png'
import userImg from '../../assets/img/user.png'
import mailImg from '../../assets/img/mail.png'
import lockImg from '../../assets/img/lock.png'
import { Link } from "react-router-dom";


const SignUp = () => {
    return ( 
        <React.Fragment>
            <div className="container">
                <div className="sign-in-container">
                    <div className="sign-in-left">
                        <h2>Welcome Back!</h2>
                        <p>To keep connected with us plase login with your personal info</p>
                        <Link to={"/signIn"}><button className="sign-in-btn-left">SIGN IN</button></Link>
                    </div>
                    <div className="sign-in-right">
                        <div className="sign-in-top">
                            <h2>Create Account</h2>
                            <div className="sign-in-png">
                                <img src={twitterImg} alt="twitter.png" width={28}/>
                                <img src={facebookImg} alt="facebook.png" width={28}/>
                                <img src={linkedinImg} alt="linkedin.png" width={28}/>
                            </div>
                            <p>or use your email for registration</p>
                        </div>
                        <div className="sign-in-bottom">
                            <img src={userImg} alt="user.png" />
                            <input type="text" placeholder="Name"/>
                            <img src={mailImg} alt="mail.png" />
                            <input type="email" placeholder="Email"/>
                            <img src={lockImg} alt="lock.png" />
                            <input type="password" placeholder="Password"/>
                        </div>
                        <button className="sign-in-btn-right">SIGN UP</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SignUp;
import React, { useRef,useState } from "react";
import twitterImg from '../../assets/img/twitter.png'
import facebookImg from '../../assets/img/facebook.png'
import linkedinImg from '../../assets/img/linkedin.png'
import userImg from '../../assets/img/user.png'
import lockImg from '../../assets/img/lock.png'
import { Link } from "react-router-dom";
import './signIn.css'


const SignIn = () => {
    const Element1 = useRef()
    const Element2 = useRef()
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const UseRef = () => {
        if (value2==="") {
            Element2.current.focus()
        }
        if (value1===""){
            Element1.current.focus()
        }
        if(value1 !="Mador" && value2 != "1234"){
            alert("Parol xato")
        }
        else{
            alert("Xush kelibsiz")
        }
    }

    return ( 
        <React.Fragment>
            <div className="container">
                <div className="sign-up-container">
                    <div className="sign-up-right">
                        <div className="sign-up-top">
                            <h2>Sign In to Your Account</h2>
                            <div className="sign-up-png">
                                <img src={twitterImg} alt="twitter.png" width={28}/>
                                <img src={facebookImg} alt="facebook.png" width={28}/>
                                <img src={linkedinImg} alt="linkedin.png" width={28}/>
                            </div>
                            <p>oe use your email account</p>
                        </div>
                        <div className="sign-up-bottom">
                            <img src={userImg} alt="user.png" />
                            <input type="text" placeholder="Name" ref={Element1} onChange = {(e)=>setValue1(e.target.value)}/>
                            <img src={lockImg} alt="lock.png" />
                            <input type="password" placeholder="Password" ref={Element2} onChange = {(e)=>setValue2(e.target.value)}/>
                        </div>
                        <p className="forget-password">forget password</p>
                        <button className="sign-up-btn-right" onClick={UseRef}>SIGN IN</button>
                    </div>
                    <div className="sign-up-left">
                        <h2>Hello Friend!</h2>
                        <p>Enter your personal details and start your journey with us</p>
                        <Link to={"/"}><button className="sign-up-btn-left">SIGN UP</button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default SignIn;
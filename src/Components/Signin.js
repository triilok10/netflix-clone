import React from 'react'
import { Link } from 'react-router-dom'

export default function Needhelp() {
    return (
        <>
            <div className="needhelp-main-bg">
                <div className="needhelp-bg-main-img">
                    <div className="needhelp-main-bg-nav">
                        <div className="needhelp-main-bg-nav-left"><Link to="/"><img src="./images/netflixnav.png" alt="logo" /></Link></div>
                        <div className="needhelp-main-bg-nav-right"><Link to="/Signin">Sign In</Link></div>
                    </div>
                    <div className="needhelp-bg-main-img-center-box">
                        <div className="needhelp-bg-main-img-center-box-items">
                            <div className="needhelp-bg-main-img-center-box-items-top">
                                <div className="needhelp-bg-main-img-center-box-items-top-pd">
                                    <div className="needhelp-bg-main-img-center-box-items-top-pd-heading">Forgot Email/Password</div>
                                    <div className="needhelp-bg-main-img-center-box-items-top-pd-para">How would you like to reset your password?</div>
                                    <div className="needhelp-bg-main-img-center-box-items-top-pd-radio-in">
                                        <div className="needhelp-bg-main-img-center-box-items-top-pd-radio-in-email"><input type="radio" name="contantMethod" id="contantMethod1" />
                                            <label htmlFor="contantMethod1">Email</label></div>
                                        <div className="needhelp-bg-main-img-center-box-items-top-pd-radio-in-sms"><input type="radio" name="contantMethod" id="contantMethod2" />
                                            <label htmlFor="contantMethod1">Text Message (SMS)</label></div>
                                    </div>
                                    <div className="needhelp-bg-main-img-center-box-items-top-pd-para2">We will send you an email with instructions on how to reset your password.</div>
                                    <div className="needhelp-bg-main-img-center-box-items-top-pd-placeholder">
                                        <input type="text" placeholder='name@example.com' id='needhelp-bg-main-img-center-box-items-top-pd-placeholder-id' />
                                    </div>
                                    <div className="needhelp-bg-main-img-center-box-items-top-pd-btn">
                                        <button type="submit" id="sendBtnContact" >Email Me</button>
                                    </div>
                                    <div className="needhelp-bg-main-img-center-box-items-top-pd-alink"><Link to="">I can't remember my email address or phone number.</Link></div>
                                </div>
                            </div>
                            <div className="needhelp-bg-main-img-center-box-items-bottom">
                                <div className="needhelp-bg-main-img-center-box-items-bottom-hd">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span><Link to="">Learn More</Link></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="needhelp-main-bg-footer">
                        <div className="needhelp-main-bg-footer-pd">
                            <div className="needhelp-main-bg-footer-pd-questions">Questions? Call <span><Link to="">000-800-919-1694</Link></span> </div>
                            <div className="needhelp-main-bg-footer-pd-contents-main">
                                <div className="needhelp-main-bg-footer-pd-contents-1">
                                    <li><Link to="">FAQ</Link></li>
                                    <li><Link to="">Cookie Preferences</Link></li>
                                </div>
                                <div className="needhelp-main-bg-footer-pd-contents-1">
                                    <li><Link to="">Help Centre</Link></li>
                                    <li><Link to="">Corporate Information</Link></li>
                                </div>
                                <div className="needhelp-main-bg-footer-pd-contents-1">
                                    <li><Link to="">Terms of Use</Link></li>
                                </div>
                                <div className="needhelp-main-bg-footer-pd-contents-1">
                                    <li><Link to="">Privacy</Link></li>
                                </div>
                            </div>
                            <div className="needhelp-bottom-right-language">
                                <select id="needhelp-bottoom-languageSelect">
                                    <option lang="English" value="en-US"> ㈤  English</option>
                                    <option lang="hi" value="hi-IN"> ㈤  हिन्दी</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [selectedLanguage, setSelectedLanguage] = useState('en-US');
    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
        return (
            <>
                <div className="homepadding-fill-bg">
                    <div className='navbarBackground-black'>
                        <div className='navbarBackground'>
                            <div className="navbarHome">
                                <div className="navbarHome-left">
                                </div>
                                <div className="navbarHome-right">
                                    <div id="navbarHome-right-language">
                                        <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
                                            <option lang="English" value="en-US"> ㈤  English</option>
                                            <option lang="hi" value="hi-IN"> ㈤  हिन्दी</option>
                                        </select>
                                    </div>
                                    <div id="navbarHome-right-signin">
                                        <Link to="/Signin">Sign In</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="navbarIntro-Central-Home">
                                <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
                                <h3>Join today. Cancel anytime.</h3>
                                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                            </div>
                            <div className="navbarIntro-input-home">
                                <div className="navbarIntro-input-home-1"><input type=" text" placeholder='Email Address' id='navbarIntro-input-home-take' required /></div>
                                <div className="navbarIntro-input-home-2"><Link to="/homehindi">Get Started ❯</Link></div >
                            </div >
                        </div >
                    </div>
                    {/* TV  box code here */}
                    <div className="home-enjoy-2-tv">
                        <div className="home-enjoy-2-tv-left">
                            <h1>Enjoy on your TV</h1>
                            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                        </div>
                        <div className="home-enjoy-2-tv-right">
                        </div>
                    </div>
                    {/* Mobile box code here */}
                    <div className="home-background-mobile">
                        <div className="home-background-mobile-left">
                            <div className="home-background-mobile-left-box">
                                <div className="home-background-mobile-left-box-left"></div>
                                <div className="home-background-mobile-left-box-right"><h3>Stranger Things</h3>
                                    <h3 id="stranger-things-more">Downloading...</h3></div>
                            </div>
                        </div>
                        <div className="home-background-mobile-right"> <h1>Download your shows to watch offline</h1>
                            <h2>Save your favourites easily and always have something to watch.</h2></div>
                    </div>
                    {/* Box no 3. Watch EveryWhere */}
                    <div className="home-background-watch-mainbox">
                        <div className="home-background-watch-mainbox-left"><h1>Watch everywhere</h1><h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2></div>
                        <div className="home-background-watch-mainbox-right"></div>
                    </div>
                    {/* Create Profile for Kids */}
                    <div className="home-background-kids-profile">
                        <div className="home-background-kids-profile-left"></div>
                        <div className="home-background-kids-profile-right">
                            <h1>Create profiles for kids</h1>
                            <h2>Send children for adventures with their favourite characters in a space made just for them-free with your membership.</h2>
                        </div>
                    </div>
                    {/* footer-second-bottom */}
                    <div className="home-second-bottom-bg">
                        <div className="home-second-bottom-bg-freq-ques"><h1>Frequently Asked Questions</h1></div>
                        {/* question1 */}
                        <div className="home-second-bottom-bg-freq-ques-question1"><div className="home-second-bottom-bg-freq-ques-question1-lt">What is Netflix?</div><div className="home-second-bottom-bg-freq-ques-question1-rt">+</div></div>
                        {/* question 2 */}
                        <div className="home-second-bottom-bg-freq-ques-question1"><div className="home-second-bottom-bg-freq-ques-question1-lt">How much does Netflix cost?</div><div className="home-second-bottom-bg-freq-ques-question1-rt">+</div></div>
                        {/* question3 */}
                        <div className="home-second-bottom-bg-freq-ques-question1"><div className="home-second-bottom-bg-freq-ques-question1-lt">Where can I watch?</div><div className="home-second-bottom-bg-freq-ques-question1-rt">+</div></div>
                        {/* question4 */}
                        <div className="home-second-bottom-bg-freq-ques-question1"><div className="home-second-bottom-bg-freq-ques-question1-lt">How do I cancel?</div><div className="home-second-bottom-bg-freq-ques-question1-rt">+</div></div>
                        {/* question5 */}
                        <div className="home-second-bottom-bg-freq-ques-question1"><div className="home-second-bottom-bg-freq-ques-question1-lt">What can I watch on Netflix?</div><div className="home-second-bottom-bg-freq-ques-question1-rt">+</div></div>
                        {/* question6 */}
                        <div className="home-second-bottom-bg-freq-ques-question1"><div className="home-second-bottom-bg-freq-ques-question1-lt">Is Netflix good for Kid's?</div><div className="home-second-bottom-bg-freq-ques-question1-rt">+</div></div>
                        <div className="navbarIntro-input-home">
                            {/* Ready to Watch */}
                            <div className="bottom-second-ready-watch">
                                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                                <div className="bottom-second-ready-watch-input">
                                    <div className="navbarIntro-input-home-1"><input type=" text" placeholder='Email Address' id='navbarIntro-input-home-take' required /></div>
                                    <div className="navbarIntro-input-home-2"><Link to=" https://www.netflix.com/in/">Get Started ❯</Link></div >
                                </div>
                            </div>
                        </div >
                    </div>
                    {/* Main bottom home page Netflix */}
                    <div className="main-footer-bottom-home">
                        <div className="question-call-home"><h2>Questions? Call <span id="call-contactHome"><Link to="000">000-800-919-1694</Link></span></h2></div>
                        <div className="main-footer-bottom-home-main-content">
                            <ul className="main-footer-bottom-home-first">
                                <Link to="1">FAQ</Link>
                                <Link to="1">Investor Relation</Link>
                                <Link to="1">Privacy</Link>
                                <Link to="1">Speed Test</Link>
                            </ul>
                            <ul className="main-footer-bottom-home-first">
                                <Link to="1">Help Centre</Link>
                                <Link to="1">Jobs</Link>
                                <Link to="1">Cookie Preferences</Link>
                                <Link to="1">Legal Notices</Link>
                            </ul>
                            <ul className="main-footer-bottom-home-first">
                                <Link to="1">Account</Link>
                                <Link to="1">Ways to Watch</Link>
                                <Link to="1">Corporte Information</Link>
                                <Link to="1">Only on Netflix</Link>
                            </ul>
                            <ul className="main-footer-bottom-home-first">
                                <Link to="1">Media Centre</Link>
                                <Link to="1">Terms of Use</Link>
                                <Link to="/need2">Contact Us</Link>
                            </ul>
                        </div>
                        <div id="bottom-right-language">
                            <select id="bottoom-languageSelect">
                                <option lang="English" value="en-US"> ㈤  English</option>
                                <option lang="hi" value="hi-IN"> ㈤  हिन्दी</option>
                            </select>
                        </div>
                        <div className="footer-final-Netflix"><h3>Netflix India</h3></div>
                    </div>
                </div>
            </>
        )
    }
}


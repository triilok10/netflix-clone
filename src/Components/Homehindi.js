import React from 'react';
import { Link } from 'react-router-dom';


export default function Homehindi() {
    return (
        <>
            <div className="homepadding-fill-bg-hn">
                <div className='navbarBackground-black-hn'>
                    <div className='navbarBackground-hn'>
                        <div className="navbarHome-hn">
                            <div className="navbarHome-left-hn">
                            </div>
                            <div className="navbarHome-right-hn">
                                <div id="navbarHome-right-language-hn">
                                    <select id="languageSelect-hn">
                                        <option lang="English" value="en-US" className='bottoom-languageSelect-hn'>
                                            <Link to="/"> ㈤  English</Link></option>
                                        <option lang="hi" value="hi-IN" className='bottoom-languageSelect-hn-hn'>
                                            <Link to="/homehindi">  ㈤  हिन्दी</Link></option>
                                    </select>
                                </div>
                                <div id="navbarHome-right-signin-hn">
                                    <Link to="/Signin">Sign In</Link>
                                </div>
                            </div>
                        </div>
                        <div className="navbarIntro-Central-Home-hn">
                            <h1>बड़ी फ़िल्में, हिट सीरीज़ और बहुत कुछ का आनंद लें बस ₹149 में.</h1>
                            <h3>आज शामिल हों, जब चाहें कैंसल करें.</h3>
                            <h5>देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.</h5>
                        </div>
                        <div className="navbarIntro-input-home-hn">
                            <div className="navbarIntro-input-home-1-hn"><input type=" text" placeholder='Email Address' id='navbarIntro-input-home-take' required /></div>
                            <div className="navbarIntro-input-home-2-hn"><Link to="">Get Started ❯</Link></div >
                        </div >
                    </div >
                </div>
                {/* TV  box code here */}
                <div className="home-enjoy-2-tv-hn">
                    <div className="home-enjoy-2-tv-left-hn">
                        <h1>अपने टीवी पर आनंद लें</h1>
                        <h2>स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.</h2>
                    </div>
                    <div className="home-enjoy-2-tv-right-hn">
                    </div>
                </div>
                {/* Mobile box code here */}
                <div className="home-background-mobile-hn">
                    <div className="home-background-mobile-left-hn">
                        <div className="home-background-mobile-left-box-hn">
                            <div className="home-background-mobile-left-box-left-hn"></div>
                            <div className="home-background-mobile-left-box-right-hn"><h3>Stranger Things</h3>
                                <h3 id="stranger-things-more-hn">Downloading...</h3></div>
                        </div>
                    </div>
                    <div className="home-background-mobile-right-hn"> <h1>ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें</h1>
                        <h2>अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.</h2></div>
                </div>
                {/* Box no 3. Watch EveryWhere */}
                <div className="home-background-watch-mainbox-hn">
                    <div className="home-background-watch-mainbox-left-hn"><h1>हर जगह देखें</h1><h2>बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.</h2></div>
                    <div className="home-background-watch-mainbox-right-hn"></div>
                </div>
                {/* Create Profile for Kids */}
                <div className="home-background-kids-profile-hn">
                    <div className="home-background-kids-profile-left-hn"></div>
                    <div className="home-background-kids-profile-right-hn">
                        <h1>बच्चों के लिए प्रोफ़ाइल बनाएं</h1>
                        <h2>बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.</h2>
                    </div>
                </div>
                {/* footer-second-bottom */}
                <div className="home-second-bottom-bg-hn">
                    <div className="home-second-bottom-bg-freq-ques-hn"><h1>अक्सर पूछे जाने वाले सवाल</h1></div>
                    {/* question1 */}
                    <div className="home-second-bottom-bg-freq-ques-question1-hn"><div className="home-second-bottom-bg-freq-ques-question1-lt-hn">Netflix क्या है?</div><div className="home-second-bottom-bg-freq-ques-question1-rt-hn">+</div></div>
                    {/* question 2 */}
                    <div className="home-second-bottom-bg-freq-ques-question1-hn"><div className="home-second-bottom-bg-freq-ques-question1-lt-hn">Netflix की कीमत कितनी है?</div><div className="home-second-bottom-bg-freq-ques-question1-rt-hn">+</div></div>
                    {/* question3 */}
                    <div className="home-second-bottom-bg-freq-ques-question1-hn"><div className="home-second-bottom-bg-freq-ques-question1-lt-hn">मैं कहां देख सकता हूं?</div><div className="home-second-bottom-bg-freq-ques-question1-rt-hn">+</div></div>
                    {/* question4 */}
                    <div className="home-second-bottom-bg-freq-ques-question1-hn"><div className="home-second-bottom-bg-freq-ques-question1-lt-hn">मैं कैसे कैंसिल करूं?</div><div className="home-second-bottom-bg-freq-ques-question1-rt-hn">+</div></div>
                    {/* question5 */}
                    <div className="home-second-bottom-bg-freq-ques-question1-hn"><div className="home-second-bottom-bg-freq-ques-question1-lt-hn">मैं नेटफ्लिक्स पर क्या देख सकता हूँ?</div><div className="home-second-bottom-bg-freq-ques-question1-rt-hn">+</div></div>
                    {/* question6 */}
                    <div className="home-second-bottom-bg-freq-ques-question1-hn"><div className="home-second-bottom-bg-freq-ques-question1-lt-hn">क्या  Netflix बच्चों के लिए ठीक है?</div><div className="home-second-bottom-bg-freq-ques-question1-rt-hn">+</div></div>
                    <div className="navbarIntro-input-home-hn">
                        {/* Ready to Watch */}
                        <div className="bottom-second-ready-watch-hn">
                            <h3>देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.</h3>
                            <div className="bottom-second-ready-watch-input-hn">
                                <div className="navbarIntro-input-home-1-hn"><input type=" text" placeholder='मेल पता' id='navbarIntro-input-home-take-hn' required /></div>
                                <div className="navbarIntro-input-home-2-hn"><Link to=" https://www.netflix.com/in/">शुरू करे ❯</Link></div >
                            </div>
                        </div>
                    </div >
                </div>
                {/* Main bottom home page Netflix */}
                <div className="main-footer-bottom-home-hn">
                    <div className="question-call-home-hn"><h2>कोई सवाल है?<span id="call-contactHome-hn"><Link to="000"> 000-800-919-1694</Link></span> पर कॉल करें</h2></div>
                    <div className="main-footer-bottom-home-main-content-hn">
                        <ul className="main-footer-bottom-home-first-hn">
                            <Link to="1">FAQ</Link>
                            <Link to="1">इंवेस्टर संबंध</Link>
                            <Link to="1">प्रायवेसी</Link>
                            <Link to="1">स्पीड टेस्ट</Link>
                        </ul>
                        <ul className="main-footer-bottom-home-first-hn">
                            <Link to="1">सहायता केंद्र</Link>
                            <Link to="1">नौकरियां</Link>
                            <Link to="1">कुकी प्रेफ़रेंस</Link>
                            <Link to="1">कानूनी सूचनाएं</Link>
                        </ul>
                        <ul className="main-footer-bottom-home-first-hn">
                            <Link to="1">अकाउंट</Link>
                            <Link to="1">देखने के तरीके</Link>
                            <Link to="1">कॉरपोरेट जानकारी</Link>
                            <Link to="1">सिर्फ़ Netflix पर</Link>
                        </ul>
                        <ul className="main-footer-bottom-home-first-hn">
                            <Link to="1">मीडिया केंद्र</Link>
                            <Link to="1">उपयोग की शर्तें</Link>
                            <Link to="1">हमसे संपर्क करें</Link>
                        </ul>
                    </div>
                    <div id="bottom-right-language-hn">
                        <select id="bottoom-languageSelect-hn">
                            <option lang="English" value="en-US" className='bottoom-languageSelect-hn-en'> ㈤  English</option>
                            <option lang="hi" value="hi-IN" className='bottoom-languageSelect-hn-hn'> ㈤  हिन्दी</option>
                        </select>
                    </div>
                    <div className="footer-final-Netflix-hn"><h3>Netflix भारत</h3></div>
                </div>
            </div>
        </>
    )
}

import React from 'react';
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiKakaoTalkFill } from 'react-icons/ri';


const Footer = (props) => {
    return (
        <div id="footer">
            <div className='forCol'>
                <div className="col1">
                    <div className="ContactUs"> Contact Us </div>
                    Email: utdallas.kisa@gmail.com
                    <br /> KakaoTalk: https://open.kakao.com/o/gLYn6HHd
                    <br /> 800 W Campbell Rd, Richardson, TX 75080
                    <br /> &copy;{new Date().getFullYear()} Korean International Students Association
                </div>
                <div className="col2">

                    <h4>We Listen.</h4>
                    Tell us anything that you think can be improved in KISA.
                    <div className="info"> Click the Social Media Icons below for more </div>
                </div>
                <div>
                    <hr />
                    
                </div>
            </div>
                
            
            <div className="singleCol  social-media-icons-white
                    d-flex  justify-content-evenly">
                        <a href="https://www.facebook.com/UTDKISA">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/utd_kisa">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://open.kakao.com/o/gLYn6HHd">
                            <RiKakaoTalkFill />
                        </a>
                        <a href="https://www.linkedin.com/in/jihyung-park-9618a2247/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
        </div>
    )
}

export default Footer;
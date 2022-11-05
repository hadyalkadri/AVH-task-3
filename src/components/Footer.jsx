import React from 'react';
import {FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitter} from "react-icons/fa"

function Footer({push}) {
  return (
    <div>

        <div className={`${push}` ? 'pushFooter' : 'footer' }>
        <div>
        <img className='footerLogo' src='https://i.postimg.cc/qqfgDFyt/logo-fa69e5f8d5504a4d44a5.png'  />
            <ul className="footerList">
                <li>About</li>
                <li>Buisness</li>
                <li>News-center</li>
                <li>Careers</li>    
            </ul>
        <div className='footerIcons'>
            <FaFacebookSquare className='icons'/>
            <FaInstagramSquare className='icons' />
            <FaTwitter className='icons' />
            <FaLinkedin className='icons' />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
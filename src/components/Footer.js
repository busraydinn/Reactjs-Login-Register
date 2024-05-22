import React from 'react'
import {Link} from "react-router-dom"
import weblogo from "../images/weblogo.png";
import "../style/components/Footer.css"
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-header'>
            <button type='button'>App Store</button>
            <button type='button'>Google Play</button>
        </div>
        <div className='footer-body'>
            
        <div className='footer-body-menu'>
            </div>
            <div className='footer-body-menu'>
                <h4 style={{"color":"whitesmoke"}}>Sun-S</h4>
                <Link to="#">Üyelikler</Link>
                <Link to="#">Yatırımcılar</Link>
                <Link to="#">Yasal Haklar</Link>
                <Link to="#">Görüşler</Link>
                <Link to="#">Masaüstü Uygulaması İndir</Link>
                <Link to="#">Yardım</Link>
                <Link to="#">Community</Link>
            </div>

            <div className='footer-body-menu'>
            </div>
        </div>
        <div className='footer-f'>
            <img src={weblogo} alt='logo'></img>
        </div>
    </div>
  )
}

export default Footer
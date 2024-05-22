import React from 'react'
import { Link, Outlet } from "react-router-dom"
import "../../style/components/Navbar/AuthNavbar.css"
import weblogo from "../../images/weblogo.png"
import Footer from '../Footer'
function AuthNavbar() {
    return (
        <div className="authNavbar-container">
            <div className='authNavbar-header'>
                <Link to="#"><img src={weblogo} alt='logo' className='weblogo'></img></Link>
            </div>
            <div className='authNavbar-body'>
                <Outlet/>
            </div>
            <div className='authNavbar-footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default AuthNavbar;
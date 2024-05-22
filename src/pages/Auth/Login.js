import React from 'react'
import "../../style/pages/Auth/Login.css"
import {Link} from "react-router-dom"
function Login() {
  return (
    <div className='login-container'>
        <div className='login-header'>
          <h1>Giriş Yap</h1>
          <p>Henüz Bir Hesabınız Yok mu?</p>
          <Link to="/auth/register">Kayıt Ol</Link>
        </div>
        <div className='login-body'>
            <form>
               <div className='login-menu-item'> 
                  <label htmlfor="eposta">E-posta</label>
                  <input placeholder='test@test.com' id='eposta' name='eposta'></input>
               </div>
               <div className='login-menu-item'> 
                  <label htmlFor='password'>Şifre</label>
                  <input placeholder='1124**24123*' id='password' name='password'></input>
              </div> 
              <div className='login-menu-btn'> 
                  <button type='submit'>Giriş Yap</button>
                  <Link to="/auth/register">Şifremi Unuttum?</Link>
              </div>   
            </form>
        </div>
        <div className='login-footer'>
        </div>
    </div>
  )
}

export default Login
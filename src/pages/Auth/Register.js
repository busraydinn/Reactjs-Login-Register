import React from 'react'
import "../../style/pages/Auth/Register.css"
import {Link} from "react-router-dom"
function Register() {
  return (
    <div className='register-container'>
        <div className='register-header'>
          <h1>Kayıt Ol</h1>
          <p>Hesabınız Var mı?</p>
          <Link to="/auth/login">Giriş Yap</Link>
        </div>
        <div className='register-body'>
            <form>
            <div className='register-menu-item'> 
                  <label htmlfor="firstname">İsim</label>
                  <input placeholder='Joe' id='firstname' name='firstname'></input>
               </div>
               <div className='register-menu-item'> 
                  <label htmlFor='lastname'>Soyad</label>
                  <input placeholder='Doe' id='lastname' name='lastname'></input>
              </div> 
            
               <div className='register-menu-item'> 
                  <label htmlfor="eposta">E-posta</label>
                  <input placeholder='test@test.com' id='eposta' name='eposta'></input>
               </div>
               <div className='register-menu-item'> 
                  <label htmlFor='password'>Şifre</label>
                  <input placeholder='1124**24123*' id='password' name='password'></input>
              </div> 

              <div className='register-menu-btn'> 
                  <button type='submit'>Kayıt Ol</button>
                  <Link to="/auth/login">Şifremi Unuttum?</Link>
              </div>   
            </form>
        </div>
        <div className='register-footer'>
        </div>
    </div>
  )
}

export default Register
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AuthNavbar from './components/Navbar/AuthNavbar'
import Register from './pages/Auth/Register'
import NotFound from "../src/pages/NotFound";
import Login from "./pages/Auth/Login";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth' element={<AuthNavbar/>}>
                <Route path='/auth/login' element={<Login/>}></Route>
                <Route path='/auth/register' element={<Register/>}></Route>
                <Route path='/auth/*' element={<NotFound/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
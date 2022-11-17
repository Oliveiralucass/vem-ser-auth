import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Login } from './pages/Login/Login'
import { SignUp } from './pages/SignUp/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContex'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ToastContainer />
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

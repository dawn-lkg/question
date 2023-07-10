import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./index.scss"
import {BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { Button } from 'antd'
import Login from './pages/Login'
import Registry from './pages/Registry'
import Forget from './pages/Forget'
import Search from './pages/Search'
function App() {
  return (
    <BrowserRouter>
     <div className='app'>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registry' element={<Registry/>}></Route>
        <Route path='/forget' element={<Forget/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/' element={<Navigate to="/search" replace></Navigate>}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/user/public/home/Home';
import About from './pages/user/public/about/About';
import Login from './pages/user/public/login/Login';
import Register from './pages/user/public/register/Register';
import { SidebarProvider } from './pages/user/common/context/SidebarContext';
import { AuthProvider } from './pages/user/common/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;

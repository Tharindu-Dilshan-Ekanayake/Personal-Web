import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import Vlogs from './pages/Vlogs';
import Blogs from './pages/Blogs';
import Skills from './pages/Skills';
import Adminlogin from './pages/Admin/Adminlogin';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import AdminDash from './pages/Admin/AdminDash';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Toaster position='bottom-right' toastOptions={{ duration: 3000 }}></Toaster>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/portfolio' element={<Portfolio/>} /> 
          <Route path='/projects' element={<Projects/>} />  
          <Route path='/vlogs' element={<Vlogs/>} />  
          <Route path='/blogs' element={<Blogs/>} />  
          <Route path='/skills' element={<Skills/>} />   

          <Route path='/adminlogin' element={<Adminlogin/>}/>

          <Route path='/admindash' element={<AdminDash/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
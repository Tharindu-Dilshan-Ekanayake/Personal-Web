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
import AdminPortfolio from './pages/Admin/AdminPortfolio';
import AdminVlog from './pages/Admin/AdminVlog';
import AdminBlog from './pages/Admin/AdminBlog';
import AdminProject from './pages/Admin/AdminProject';
import AdminHireMessages from './pages/Admin/AdminHireMessages';
import AdminSkills from './pages/Admin/AdminSkills';

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
          <Route path='/adminportfolio' element={<AdminPortfolio/>}/>
          <Route path='/adminvlog' element={<AdminVlog/>}/>
          <Route path='/adminblog' element={<AdminBlog/>}/>
          <Route path='/adminprojects' element={<AdminProject/>}/>
          <Route path='/adminhire' element={<AdminHireMessages/>}/>
          <Route path='/adminskills' element={<AdminSkills/>}/>
        
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
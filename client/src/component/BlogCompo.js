import React from 'react';
import BG from '../images/BG.jpg';

export default function BlogCompo() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background image with reduced opacity */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-20"
        style={{ backgroundImage: `url(${BG})` }}
      ></div>
      
     
      
      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div>
    </div>
  );
}
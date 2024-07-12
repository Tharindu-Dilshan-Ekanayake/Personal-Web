import React from 'react';
import BG from '../images/BG.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import NavBar from './NavBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-right bg-cover no-repeat bg- lg-h-screen" style={{ backgroundImage: `url(${BG})` }}>
        <div className='items-center h-screen '>

                <div className='absolute flex mt-12 ml-[105px]'>
                    <NavBar/>
                </div>
            
            <div className=' ml-[150px] pt-[200px] mr-[120px] '>
               

                <div className=' pl-[20px]  '>
                    <div className='flex text-left'>
                        <h1 className='text-[150px]' >Hello..!</h1> 
                    </div>
                    <div className='text-left my-[-50px]'>
                        <h1 className='text-[70px]'>I am Tharindu</h1> 
                    </div>
                    <div className='pt-12 pb-12 mt-12 text-center  w-[480px]'>
                        <button className='h-12 text-2xl bg-[#f78c0f] w-[200px] rounded-lg text-white hover:bg-gray-700'>Hire Me</button>  
                    </div> 
                </div>
                <div className='w-[500px]  '>
                    <hr className='h-[1px] bg-black border-0 bg-opacity-20'></hr>
                </div>
                <div className='flex w-[500px] justify-between px-[120px] pt-12'>
                    <div>
                        <FaLinkedin className='size-[40px] opacity-55' /> 
                    </div>
                    <div>
                        <FaGithubSquare className='size-[40px] opacity-55' />
                    </div>
                    <div>
                        <FaYoutube className='size-[40px] opacity-55'/>
                    </div>
                    <div>
                        <FaInstagramSquare className='size-[40px] opacity-55' />
                    </div>
                    <div>
                        <FaFacebookSquare className='size-[40px] opacity-55' />
                    </div>
                   
                </div>
                
                
            </div>
            
        </div>
      
     
    </div>
  );
}
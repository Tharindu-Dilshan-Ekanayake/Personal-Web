import React from 'react';
import BG from '../images/BG.jpg';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import NavBar from './NavBar';
import { motion, useAnimationControls } from 'framer-motion';

const TypewriterText = ({ text, delay = 0 }) => {
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      transition: { delay: i * 0.1 + delay },
    }));
  }, [controls, delay]);

  return (
    <span style={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          animate={controls}
          initial={{ opacity: 0 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-right bg-cover no-repeat bg- lg-h-screen" style={{ backgroundImage: `url(${BG})` }}>
      <div className='items-center h-screen '>
        <motion.div 
          className='absolute flex mt-12 ml-[105px]'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavBar/>
        </motion.div>
        
        <div className=' ml-[150px] pt-[200px] mr-[120px] '>
          <div className=' pl-[20px]  '>
            <motion.div 
              className='flex text-left'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className='text-[150px]'>
                <TypewriterText text="Hello..!" />
              </h1>
            </motion.div>
            <motion.div 
              className='text-left my-[-50px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <h1 className='text-[70px]'>
                <TypewriterText text="I am Tharindu" delay={1.5} />
              </h1>
            </motion.div>
            <motion.div 
              className='pt-12 pb-12 mt-12 text-center w-[480px]'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              <motion.button 
                className='h-12 text-2xl bg-[#f78c0f] w-[200px] rounded-lg text-white hover:bg-gray-700'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </motion.div>
          </div>
          <motion.div 
            className='w-[500px]'
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 3.2 }}
          >
            <hr className='h-[1px] bg-black border-0 bg-opacity-20'></hr>
          </motion.div>
          <motion.div 
            className='flex w-[500px] justify-between px-[120px] pt-12'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
          >
            {[FaLinkedin, FaGithubSquare, FaYoutube, FaInstagramSquare, FaFacebookSquare].map((Icon, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2 }}>
                <Icon className='size-[40px] opacity-55' />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
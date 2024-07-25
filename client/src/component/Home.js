import React, { useState } from 'react';
import BG from '../images/BG.jpg';
import { FaLinkedin, FaGithubSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import NavBar from './NavBar';
import { motion, useAnimationControls } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';

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

const HireMeForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name_user: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/hiring/hiremepost', formData);
      if (response.status === 201) {
        
        onClose();
      }
      toast.success('Sent Message Successfully');
    } catch (error) {
      console.error('Failed to send message', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="mb-4 text-2xl">Hire Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" name="name_user" value={formData.name_user} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mobile</label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" rows="4" required></textarea>
          </div>
          <div className="flex justify-end">
            <button type="button" className="px-4 py-2 mr-4 bg-gray-300 rounded" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function Home() {
  const [showHireMeForm, setShowHireMeForm] = useState(false);

  const handleHireMeClick = () => {
    setShowHireMeForm(true);
  };

  const handleCloseForm = () => {
    setShowHireMeForm(false);
  };

  return (
    <div className="min-h-screen bg-right bg-cover no-repeat bg- lg-h-screen" style={{ backgroundImage: `url(${BG})` }}>
      <div className='items-center h-screen '>
        <motion.div 
          className='absolute flex mt-12 ml-[105px]'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NavBar />
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
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mb-6 text-xl text-gray-700"
              >
                Full-Stack Developer | UI/UX Designer | Mobile & Desktop App Developer | Graphic Designer & Video Editor | Youtuber
              </motion.p>
              
              <motion.button 
                className='h-12 text-2xl bg-[#f78c0f] w-[200px] rounded-lg text-white hover:bg-gray-700'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHireMeClick}
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
            {[
              { Icon: FaLinkedin, url: 'https://www.linkedin.com/in/tharindu-dilshan-ekanayake-462919195' },
              { Icon: FaGithubSquare, url: 'https://github.com/Tharindu-Dilshan-Ekanayake' },
              { Icon: FaYoutube, url: 'https://www.youtube.com/channel/UCZxX8vsED7Rv9SGbdv34RzA' },
              { Icon: FaInstagramSquare, url: 'https://www.instagram.com/tharindu_dilshan_ekanayake_/' },
              { Icon: FaFacebookSquare, url: 'https://web.facebook.com/tharindu.dilshan.3154' }
            ].map(({ Icon, url }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2 }}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Icon className='size-[40px] opacity-55' />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {showHireMeForm && <HireMeForm onClose={handleCloseForm} />}
    </div>
  );
}

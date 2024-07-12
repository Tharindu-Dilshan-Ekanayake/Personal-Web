import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    return location.pathname === path 
      ? "hover:text-gray-400 border-b-[2px] border-orange-400  text-black  " 
      : "hover:text-gray-400 text-gray-500";
  };

  return (
    <div className='flex'>
      <nav className="p-4">
        <ul className="flex space-x-14">
          <li>
            <Link to="/" className={getLinkClasses('/')}>Home</Link>
          </li>
          <li>
            <Link to="/portfolio" className={getLinkClasses('/portfolio')}>Portfolio</Link>
          </li>
          <li>
            <Link to="/projects" className={getLinkClasses('/projects')}>Projects</Link>
          </li>
          <li>
            <Link to="/vlogs" className={getLinkClasses('/vlogs')}>Vlogs</Link>
          </li>
          <li>
            <Link to="/blogs" className={getLinkClasses('/blogs')}>Blogs</Link>
          </li>
          <li>
            <Link to="/skills" className={getLinkClasses('/skills')}>Skills</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

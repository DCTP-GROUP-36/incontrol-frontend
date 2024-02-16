import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/incontrol-logo.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className="flex justify-between items-center">
      <img className='w-24' src={Logo} alt="/" />
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
              <Link to='/' className='p-4'>Home</Link>
              <Link to='/why-us' className='p-4'>Why InControl</Link>
              <Link to='/our-service' className='p-4'>Our Service</Link>
              <Link to='/faqs' className='p-4'>FAQs</Link>
              <Link to='/register' className='p-2 text-white'>
                <button className='p-2' style={{ backgroundColor: '#0117fd', borderRadius: '10px' }}>Create Account</button>
              </Link>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4">
           <Link to='/' className='block p-4'>Home</Link>
              <Link to='/' className=' block p-4'>Why InControl</Link>
              <Link to='/' className='block p-4'>Our Service</Link>
              <Link to='/faqs' className='block p-4'>FAQs</Link>
              <Link to='/' className='block text-white'>
                <button className='p-2' style={{ backgroundColor: '#0117fd', borderRadius: '10px' }}>Create Account</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

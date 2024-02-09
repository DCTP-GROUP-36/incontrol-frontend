import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa';
import Logo from '../assets/incontrol-logo.png';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#010530' }}>
      <div className='max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 gap24 text-gray-300'>
        <div className=''>
          <img className='w-20' src={Logo} alt="/" />
          <h4>InControl</h4>
          <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque quos omnis.</p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaWhatsappSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 px-20 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Contact us</li>
              <li className='py-2 text-sm'>About us</li>
              <li className='py-2 text-sm'>Testimonials</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Contact us</h6>
            <ul>
              <div className='flex  '>
              <FaDribbbleSquare size={20}  />
              <li className='px-2  text-sm'>Pricing</li>
              </div>
              <div className='flex '>
              < FaPhoneSquareAlt size={20}/>
              <li className='px-2 text-sm'>07078483559</li>
              </div>
              <div className='flex '>
              < FaPhoneSquareAlt size={20}/>
              <li className='px-2 text-sm'>08059834574</li>
              </div>
              <div className='flex '>
              < FaEnvelope  size={20}/>
              <li className='px-2 text-sm'>Info@incontrol.com</li>
              </div>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Follow us</h6>
            <ul>
              <li className='py-2' ><FaTwitterSquare/></li>
              <li><FaLinkedin/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;

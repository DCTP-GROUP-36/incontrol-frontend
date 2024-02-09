// AboutUs.jsx
import React from 'react';
import Image from '../assets/Sleep-Read.png';
import R from '../assets/Family.jpg'
import styled from 'styled-components';
import Header from '../components/Header'
import Footer from '../components/Footer';

const ColoredText = styled.span`
  color: #4a43cb;
  font-weight: 600;
`;

const AboutUs = () => {
  return (
    <div className="container mx-auto ">
      <Header />
      <h1 className='mb-8 px-10 text-[2.25rem] font-[600] text-black lg:text-[2.5rem] xl:text-[3.5rem]'>About Us</h1>

      <div>
       
      </div>
      <Footer />



    </div>
  );
};

export default AboutUs;

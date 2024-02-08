import React, { useState } from 'react';
import Image from '../assets/Group 88.png';
import R from '../assets/Family.jpg'
import styled from 'styled-components';
import Header from '../components/Header'
import Footer from '../components/Footer';

const ColoredText = styled.span`
  color: #4a43cb;
  font-weight: 600;
`;

const Navbar = () => {

  return (
    <div className=' mx-auto px-10 w-full'>
      <Header />

      <div>
        <div>
          <container className='campusLetter w-full  pt-40 mb-40 '>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
              <div className='flex grow-0 basis-[1/2] flex-col justify-center'>
                <div>
                  <div className=' sm:w-[24.43rem] xl:w-[40rem]'>
                    <h1 className='mb-2 text-[2.25rem] font-[600] text-black lg:text-[2.5rem] xl:text-[3.5rem]'>
                      Welcome to InControl: Your Path to Digital Wellness
                    </h1>
                  </div>
                  <p className='mb-14 text-[1.12rem] text-[1.37rem] text-[1rem] font-[400] text-noved-black'>
                    Embrace Balance, Seize Control, Break Free from Phone Addiction
                  </p>
                  <button label={''} />
                </div>
              </div>
              <div className='pt-00 mt-0 flex items-center justify-center'>
                <img
                  src={R}
                  alt={'campus-icon'}
                  width={704}
                  height={704}
                  style={{ borderRadius: '10px' }}
                ></img>
              </div>
            </div>
            <div className='w-full'>
              <p className=' hidden text-[1.12rem] text-[1.37rem] text-[1rem] font-[400] text-noved-black lg:block'>
                Combat phone addiction, {''}
                <ColoredText className=''> reclaim control,</ColoredText> {''} and{' '}
                <br />
                <ColoredText className=''> transform your life.</ColoredText>
              </p>
            </div>
          </container>
        </div>
        <div
          className='p- pb- md:px-[2rem] lg:mb-20 lg:min-h-[31rem]'
          style={{ backgroundColor: '#e5e8ff', borderRadius: '10px' }}
        >
          <container className='mb-10 mt-10 grid w-full gap-5 sm:grid-cols-1 lg:grid-cols-2'>
            <div className='flex grow-0 basis-[1/2] flex-col justify-center'>
              <div>
                <div className='sm:w-[24.43rem] xl:w-[50rem]'>
                  <h1 className='mb-8 text-[2.25rem] font-[600] text-black lg:text-[2.5rem] xl:text-[3.5rem]'>
                    About Us
                  </h1>
                  <h4 className='mb-8 pb-9 text-[2.25rem] font-[400] text-noved-black lg:text-[rem] xl:text-[2.5rem]'>
                    Redefining Your Relationship with Technology
                  </h4>
                </div>
                <p className='mb-14 text-[1.12rem] text-[1.37rem] text-[1rem] font-[400] text-noved-black'>At InControl, our mission is clear: to empower you in establishing a harmonious relationship with technology, allowing you to focus on what truly matters. We understand the challenges of navigating the digital landscape, and we're here to guide you towards a more balanced and intentional approach.
                </p>

              </div>
            </div>
            <div className='flex items-center justify-center'>
              <img
                src={Image}
                alt={''}
                width={507}
                height={507}
                style={{ borderRadius: '10px', margin: '20px' }}
              ></img>
            </div>
          </container>
        </div>

        <div
          className='p- pb- md:px-[2rem] lg:mb-20 lg:min-h-[31rem]'
        >
          <container className='mb-10 mt-10 grid w-full gap-5 sm:grid-cols-1 lg:grid-cols-2'>
            <div className='flex grow-0 basis-[1/2] flex-col justify-center'>
              <div>
                <div className='sm:w-[24.43rem] xl:w-[40rem]'>
                  <h1 className='mb-8 text-[2.25rem] font-[600] text-black lg:text-[2.5rem] xl:text-[3.5rem]'>
                    Our Vision
                  </h1>
                  <h4 className='mb-8 pb-9 text-[2.25rem] font-[400] text-noved-black lg:text-[rem] xl:text-[2.5rem]'>
                    A Community for Digital Well-Being


                  </h4>
                </div>
                <p className='mb-14 text-[1.12rem] text-[1.37rem] text-[1rem] font-[400] text-noved-black'>InControl is more than just an app; it's a dedicated community committed to fostering mutual support and encouragement. Within our vibrant community forum, we provide a safe space for individuals to share their experiences, seek advice, and celebrate victories – both big and small. We believe that by connecting with like-minded individuals, you not only strengthen your own resolve but also contribute to a collective effort to redefine our relationship with technology.



                </p>

              </div>
            </div>
            <div className='flex items-center justify-center'>
              <img
                src={Image}
                alt={''}
                width={507}
                height={507}
                style={{ borderRadius: '10px', margin: '20px' }}
              ></img>
            </div>
          </container>
        </div>
        <div className='p- pb- md:px-[2rem] lg:mb-20 lg:min-h-[31rem]'>
  <div className='mb- mt- grid w-full gap-5 sm:grid-cols-1 lg:grid-cols-2'>
    <div className='flex items-center justify-center mb-40'>
      <img
        src={R}
        alt={''}
        width={1000}
        height={1000}
        style={{ borderRadius: '10px', margin: '20px' }}
      ></img>
    </div>
    <div>
      <div className='sm:w-[24.43rem] xl:w-[40rem]'>
        <h4 className='mb- pb-5 text-[2.25rem] font-[600] text-black lg:text-[rem] xl:text-[2.5rem]'>
          Who We Are
        </h4>
        <p className='mb- text-[1.12rem] text-[1.37rem] text-[1rem] font-[600] text-black mb-10'>We are a set of culturally diverse individuals who are enthusiastic about creating a healthy societal lifestyle among students, teachers, professionals, craftsmen, civil servants, and even teenagers in the society. We are passionate about making a beautiful world where effective time management and online engagements are consistently controlled.</p>
      </div>
      <div className='sm:w-[24.43rem] xl:w-[50rem]'>
        <h3 className="mb- pb-5 text-[2.25rem] font-[600] text-black lg:text-[rem] xl:text-[2.5rem] ">What We Do</h3>
        <ul className="list-disc mb-10 px-5 font-[600]">
          <li className="mb-2">We help you onboard our platform.</li>
          <li className="mb-2">Our automated system helps you create an account.</li>
          <li className="mb-2">Set a game-like challenge to assist you in combatting social media addiction.</li>
          <li className="mb-2">Our system records your progress on a daily, weekly, monthly basis.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

      </div>
      <Footer />
    </div>



  );
};

export default Navbar;

import React, { useState } from 'react';
import Image from '../assets/Sleep-Read.png';
import R from '../assets/Family.jpg';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
    const [currentItem, setCurrentItem] = useState(0);

    // Array of objects containing content for each item
    const itemsContent = [
        {
            title: 'Expertise ',
            description: 'Our team comprises experts in psychology, addiction counseling, and technology. We understand the complexities of phone addiction and employ evidence-based strategies to address it effectively.'
        },
        {
            title: 'Tailored Approach',
            description: ' We recognize that every individual is unique, and so are their struggles with phone addiction. Our programs are tailored to meet the specific needs and circumstances of each client, ensuring personalized support and guidance throughout their journey to recovery.'
        },
        {
            title: 'Holistic Approach',
            description: 'Addressing phone addiction is not just about limiting screen time; it is about fostering a balanced and fulfilling lifestyle. We take a holistic approach that considers factors such as stress management, social connection, and self-care, helping clients create a healthier overall framework for living.'
        },

        {
            title: 'Supportive Community',
            description: 'Breaking free from phone addiction can feel daunting, but you don not have to go it alone. Our supportive community provides a safe space for individuals to share their experiences, seek advice, and celebrate successes along the way. Through group sessions, peer support networks, and online forums, clients can connect with others who understand their struggles and offer encouragement.'
        },
    ];

    return (
        <div className="container mx-auto ">
            <Header />
            <div className=' grid w-full grid-cols-1 gap-20 lg:grid-cols-3 px-10'>
                <div className=''>
                    <img
                        src={R}
                        alt={'Contact us Pin'}
                        width={507}
                        height={507}
                        style={{ borderRadius: '10px', marginTop:'120px' }}
                    />
                </div>
                <div className='col-span-2 gap-20 grid flex h-[500px] w-92 justify-end mb-10'>
                    <div className='h-auto w-full mb-20'> 
                        <div className='top-column p-2 mb-10 flex inline-flex cursor-pointer  items-center justify-center rounded-[64px] bg-[#EFEFFB]'>
                            {itemsContent.map((item, index) => (
                                <div
                                    key={index}
                                    className={`mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-[50%] p-3 shadow-lg transition-colors ${currentItem === index
                                            ? 'bg-white text--purple shadow-lg'
                                            : 'text-[#C3C3C3]'
                                        }`}
                                    onClick={() => {
                                        setCurrentItem(index);
                                    }}
                                >
                                    <p className='text-lg font-[600]'>{index + 1}</p>
                                </div>
                            ))}
                        </div>
                        <div className='bottom-column w-4/5 ' style={{ backgroundColor: '#f2f6fa', borderRadius: '10px' }}>
                            {itemsContent.map((item, index) => (
                                <div key={index} className="p-3 border-b border-gray-400">
                                    <h4 className='mb-3 pb- text-[2.25rem] font-[400] text-noved-black lg:text-[rem] xl:text-[2rem]'>{item.title}</h4>
                                    {currentItem === index && <p>{item.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='sm:w-[24.43rem] xl:w-[30rem]'>
          <p className=' text-[1.12rem]  text-[1.40rem] text-[1rem] font-[300] text-noved-black '>
          Don't let phone addiction control your life any longer. Take the first step toward freedom and recovery with [Your Company Name]. Together, we can help you break free from the cycle of dependence and embrace a healthier, more balanced relationship with technology.
          </p>
        </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;

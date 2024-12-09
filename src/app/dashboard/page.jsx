"use client"; 

import React, { useState, useEffect } from 'react';   
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { div } from 'framer-motion/client';

const Dashboard = () => { 
  const [page, setPage] = useState(0);
  
  const nextPage = () => setPage(page + 1);
  
  return (
    <div>
      {page === 0 && <IntroPage onNext={nextPage} />}
      {page === 1 && <MainPage />} 
    </div>
  );
};

const IntroPage = ({ onNext }) => (
  <div id='cover' className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-white">  
    <div className='tw-text-center'>
      <p className='tw-text-gray-600 tw-m-4 font-baskervville'>hello</p>
      <h1 className='tw-text-4xl font-tirelessly tw-m-4'>Muhammad Rifky F. S</h1>
      <p className='tw-text-gray-600 tw-m-2 font-baskervville'>&amp;</p>
      <h1 className='tw-text-4xl font-tirelessly tw-m-4'>Ellya Nursehan</h1>
      <div className='tw-flex tw-items-center tw-justify-center'>
        <div className="tw-relative tw-mb-4" style={{ width: '200px', height: '100px', overflow: 'hidden' }}>
          <video
            className="tw-w-full tw-h-full tw-object-cover" // Ensure it covers the area while maintaining aspect ratio
            autoPlay
            loop
            muted
            playsInline
            src="/video/bg-video.mp4" // Ensure the path is correct
          />
          <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
            <button className="tw-text-white cursor-pointer" onClick={onNext}>
              tap here to open
            </button>
          </div>
        </div>
      </div>
      <p className='tw-text-gray-600 tw-mt-2'>To:</p>
      <p className='tw-text-gray-600 tw-mb-2 font-Satoshi'>Dimas & partner</p>
    </div>
  </div>

);

const MainPage = () => {
  const [activeScheduleTab, setActiveScheduleTab] = useState(1);

  const wishes = [
    { id: 1, name: "Brooklyn Simmons", message: "May your marriage fulfilled with endless joy and happiness" },
    { id: 2, name: "Brooklyn Simmons", message: "Lorem ipsum dolor sit amet consectetur. Tristique vitae sed amet amet mi sagittis faucibus in semper. Morbi ac ipsum quis vestibulum. Lorem ipsum dolor sit amet consectetur." },
    { id: 3, name: "Brooklyn Simmons", message: "May your marriage fulfilled with endless joy and happiness" },
    { id: 4, name: "Brooklyn Simmons", message: "Lorem ipsum dolor sit amet consectetur. Tristique vitae sed amet amet mi sagittis faucibus in semper. Morbi ac ipsum quis vestibulum. Lorem ipsum dolor sit amet consectetur." },
    { id: 5, name: "Brooklyn Simmons", message: "May your marriage fulfilled with endless joy and happiness" },
    { id: 6, name: "Brooklyn Simmons", message: "Lorem ipsum dolor sit amet consectetur. Tristique vitae sed amet amet mi sagittis faucibus in semper. Morbi ac ipsum quis vestibulum. Lorem ipsum dolor sit amet consectetur." },
    { id: 7, name: "Brooklyn Simmons", message: "May your marriage fulfilled with endless joy and happiness" },
    { id: 8, name: "Brooklyn Simmons", message: "May your marriage fulfilled with endless joy and happiness" },
    { id: 9, name: "Brooklyn Simmons", message: "May your marriage fulfilled with endless joy and happiness" },
    { id: 10, name: "Brooklyn Simmons", message: "May your marriage fulfilled with endless joy and happiness" },
  ];

  function getInitials(name) {
    return name
      .split(' ') // Split the name into words
      .map(word => word.charAt(0).toLowerCase()) // Get the first letter of each word and convert to lowercase
      .join(''); // Join the letters together
  }
  const schedules = [
    { id: 1, name: "Wedding Reception", isActive: null, date: "2025-12-25",  location: "Canggu Beach" ,  link: "http://google.com"},
    { id: 2, name: "Akad", isActive: true,  date: "2025-12-25",  location: "Canggu Beach" ,  link: "http://google.com"},
    { id: 3, name: "Streaming", isActive: true,  date: null,  location: null ,  link: "http://google.com"}, 
  ];

  const brideImages = [
    "/image/bride-gallery-2.png",
    "/image/bride-gallery-1.png",
    "/image/bride-gallery-3.png",
    "/image/bride-gallery-3.png",
    "/image/bride-gallery-3.png", 
    "/image/bride-gallery-3.png", 
  ];

  const groomImages = [
    "/image/bride-gallery-2.png",
    "/image/bride-gallery-1.png",
    "/image/bride-gallery-3.png",
    "/image/bride-gallery-3.png",
    "/image/bride-gallery-3.png", 
    "/image/bride-gallery-3.png", 
  ];

  const handleActiveScheduleTabClick = (tab) => (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveScheduleTab(tab);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  const settings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
  };



  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section');

    const observerOptions = {
      root: null, // Observe the viewport
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          observer.unobserve(entry.target); // Stop observing once animation is applied
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

  }, []);

  return (
    <>
    <div  className="tw-relative tw-bg-black">
        <video
          autoPlay
          loop
          muted
          className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover tw-z-0"
          src="/video/bg-video.mp4"
          type="video/mp4"
        />  

        <section id='intro' className="tw-relative tw-h-screen tw-flex tw-items-center  tw-justify-center"> 
        </section> 

        <section className="tw-relative  tw-h-screen  tw-flex tw-items-center tw-justify-center animate-section"> 
          <div className='tw-text-center'>
              <h1 className="tw-text-7xl tw-text-white tw-text-center tw-font-bold tw-m-4 font-baskervville">“Marry, for I will boast of your great numbers.”</h1>
              <p className='tw-text-gray-600 tw-mt-2 tw-text-white'>Ibnu Majah/1863</p>
          </div>
        </section>

        <section id='couple' className="tw-relative tw-h-[200vh] " style={{ backgroundImage: "url('/image/bride-bg.jpeg')" }}>
          <div className="tw-absolute tw-top-10 tw-left-10 tw-text-white">
            <h1 className="tw-text-7xl tw-font-great-vibes font-tirelessly animate-section">Catherine</h1>
          </div>
          <div className="tw-absolute tw-bottom-10 tw-w-full tw-flex tw-justify-center">
            <div className="tw-w-3/4 tw-overflow-hidden tw-relative">
              <Slider {...settings}>
                {brideImages.map((src, index) => (
                  <div key={index}   className='tw-p-3'>
                    <Image src={src} alt={`Photo ${index + 1}`} width={'100'} height={'100'} className="tw-w-full tw-h-auto" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>  

        <section className="tw-relative tw-h-[20vh] tw-flex tw-items-center tw-bg-black tw-justify-center"> 
        </section>   

        <section className="tw-relative tw-h-[200vh] " style={{ backgroundImage: "url('/image/couple-bg.jpg')" }}>
          <div className="tw-absolute tw-top-10 tw-right-10 tw-text-white animate-section">
            <h1 className="tw-text-7xl tw-font-great-vibes font-tirelessly ">Hansen</h1>
          </div>
          <div className="tw-absolute tw-bottom-10 tw-w-full tw-flex tw-justify-center">
            <div className="tw-w-3/4 tw-overflow-hidden tw-relative">
              <Slider {...settings}>
                {groomImages.map((src, index) => (
                  <div key={index}   className='tw-p-3'>
                    <Image src={src} alt={`Photo ${index + 1}`} width={'100'} height={'100'} className="tw-w-full tw-h-auto" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section> 

        <section className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center animate-section"> 
          <div className="tw-w-3/4">    
            <p className='tw-text-gray-600 tw-mt-2 tw-text-white font-baskervville animate-section'>
              <span className="tw-text-7xl tw-font-bold tw-inline-block">O</span>ur first met on a sunny afternoon at a mutual friend's gathering. It wasn’t love at first sight, but something sparked between us—a connection that grew stronger with each passing conversation. What started as a shared laugh over an inside joke quickly blossomed into something more. Little did we know, this was the start of our forever.
            </p>        
          </div>
        </section>

        <section className="tw-relative tw-flex tw-items-center tw-justify-center animate-section">
          <div className="tw-relative tw-h-60 tw-flex tw-items-center  tw-justify-center">  </div> 
          <div className='tw-text-center tw-my-8'>
              <p className='tw-text-gray-600 tw-mt-2 tw-text-white'>Lorem ipsum dolor sit amet consectetur</p>
              <h1 className="tw-text-6xl tw-text-white tw-text-center tw-font-bold tw-m-4 font-baskervville">42:11:39</h1>
          </div>
          <div className="tw-relative tw-h-60 tw-flex tw-items-center  tw-justify-center">  </div> 
        </section>  

        <section id='schedule' className="tw-relative   tw-mx-20  tw-text-white">
          <div className="tw-relative tw-h-60 tw-flex tw-items-center  tw-justify-center">  </div> 
          <h1 className="title tw-text-4xl tw-my-8 font-b font-baskervville tw-italic">Schedule</h1>
          <nav className="tw-mb-12 ">
            <ul className="tw-flex tw-space-x-8 tw-text-md">
              {schedules.map((item, index) => ( 
                <> <li><a href="#" onClick={handleActiveScheduleTabClick(item.id)} className={ activeScheduleTab === item.id && (`tw-border-b-2 tw-border-white`)}>{item.name}</a></li>            </>
              ))}
            </ul>
          </nav> 
          {schedules.map((item, index) => ( 
            <div key={index} className={``}>
              {activeScheduleTab === item.id && item.isActive !== false && item.date !== null  && item.location !== null  && (
                <div className={``}>
                  <h1 className="tw-text-2xl tw-text-center  tw-font-bold tw-my-4 font-baskervville tw-italic">{item.name}</h1>
                  <div className='tw-text-center md:tw-flex-row  tw-grid tw-grid-cols-2 tw-gap-4 tw-space-y-8 md:tw-space-y-0  animate-section'>
                    <div className='tw-text-right tw-mx-4 tw-flex tw-flex-col tw-items-end'> 
                      <h3 className="tw-text-3xl tw-font-bold tw-my-4 font-tirelessly">Date</h3>
                      <h1 className="tw-text-6xl tw-font-bold tw-my-4 font-satoshi">{item.date}</h1>
                      <a href={item.link} className="tw-border tw-border-white tw-my-8 hover:tw-bg-white hover:tw-text-black tw-py-2 tw-px-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
                          <span>Set reminder</span>
                          <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className='tw-text-start tw-flex tw-flex-col tw-items-start'> 
                      <h3 className="tw-text-3xl tw-font-bold tw-my-4 font-tirelessly">Location</h3>
                      <h1 className="tw-text-6xl tw-font-bold tw-my-4 font-satoshi">{item.location}</h1>
                      <a href={item.link} className="tw-border tw-border-white tw-my-8 hover:tw-bg-white hover:tw-text-black tw-py-2 tw-px-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
                        <span>Open Google Maps</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  </div>
              )}
              {activeScheduleTab === item.id && item.isActive !== false && item.date == null  && item.location == null  && (
                <div className={``}>
                  <div className='tw-text-center'> 
                  <h1 className='tw-text-2xl tw-m-4 font-baskervville tw-italic'>Live Streaming</h1>
                  <div className='tw-flex tw-items-center tw-justify-center'>
                    <div className="tw-relative tw-mb-4 tw-bg-black tw-rounded-lg tw-shadow-2xl tw-shadow-white" style={{ width: '700px', height: '300px', overflow: 'hidden' }}>
                      {/* <video
                        className="tw-w-full tw-h-full tw-object-cover"  
                        autoPlay
                        loop
                        muted
                        playsInline
                        src="/video/bg-video.mp4"  
                      /> */}
                      <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
                        <a href={item.link} className="tw-text-white cursor-pointer" >
                          tap here to open
                        </a>
                      </div>
                    </div>
                  </div> 
                </div>
                </div>
              )}
            </div>
          ))} 
        </section> 

        <section id='love_story' className="tw-relative  tw-mx-20 tw-py-8 tw-mb-20 tw-text-white">
          <div className="tw-relative tw-h-48 tw-flex tw-items-center  tw-justify-center">  </div> 
          <h1 className="title tw-text-4xl tw-my-4 font-baskervville tw-italic">Gallery</h1> 
          <p className='font-baskervville tw-italic'>Before going, we are encouraging you to not wearing things listed below:</p>
          <div className='tw-flex tw-items-center tw-justify-center'>
            <div className='tw-bg-white tw-m-3 tw-w-full tw-max-h-screen' style={{ height: '40rem' }}>Box 1</div>
            <div className='tw-bg-white tw-m-3 tw-w-full tw-max-h-screen' style={{ height: '40rem' }}>Box 1</div>
          </div> 
          <div className="tw-relative tw-h-48 tw-flex tw-items-center  tw-justify-center">  </div> 
        </section> 

        <section id='wish' className="tw-relative tw-h-screen tw-py-16 tw-mx-20 tw-my-16 tw-mt-8 tw-text-white">
          <h1 className="title tw-text-4xl tw-my-4 font-b font-baskervville tw-italic">Wish</h1> 
          <div className="tw-overflow-x-auto tw-whitespace-nowrap">
            <div className="tw-grid tw-grid-rows-3 tw-grid-flow-col tw-gap-4 tw-p-4">
              {wishes.map((item) => {
                const initials = getInitials(item.name);
                return (
                <div key={item.id} className="tw-flex tw-items-start tw-space-x-2">
                  <div className="tw-w-5 tw-h-5 tw-bg-gray-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-white">                
                    <h2 className="tw-text-xs font-baskervville tw-italic">{initials}</h2>
                  </div>
                  <div className="tw-w-96">
                    <h2 className="tw-text-md tw-font-semibold">{item.name}</h2>
                    <p className="tw-text-xs tw-whitespace-normal">{item.message}</p>
                  </div>
                </div>
              )})}
            </div>
          </div>
          <div className="tw-text-right">
            <p className="tw-text-xs font-baskervville tw-italic">Swipe right to read more <i className="fas fa-arrow-right"></i></p>
          </div>
          
          <div className='tw-flex tw-items-center tw-justify-center'>  
            <button className="tw-border tw-border-white tw-my-8 hover:tw-bg-white hover:tw-text-black tw-py-2 tw-px-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
                <span>Type your wish</span>
                <i className="fas fa-arrow-right"></i>
            </button>
          </div> 
        </section>  

        <section className="tw-relative  tw-h-screen tw-w-screen tw-flex tw-items-center tw-justify-center" style={{ backgroundImage: "url('/image/couple-bg.jpg')" }}>
          <div className="tw-text-center  tw-text-white animate-section">
            <h1 className="tw-text-7xl font-baskervville ">Thank you</h1>
            <p className="tw-text-lg font-satoshi ">back to:</p> 
            <ul className="tw-text-center tw-text-sm font-satoshi">
              <li><a  href="#cover" className="tw-text-sm ">cover</a></li>
              <li><a  href="#intro" className="tw-text-sm ">intro</a></li>
              <li><a  href="#couple" className="tw-text-sm ">the couple</a></li>
              <li><a  href="#schedule" className="tw-text-sm ">schdule</a></li>
              <li><a  href="#love_story" className="tw-text-sm ">love story</a></li>
            </ul>
          </div>         
        </section>      
    </div>
    </>
  );
};

export default Dashboard;
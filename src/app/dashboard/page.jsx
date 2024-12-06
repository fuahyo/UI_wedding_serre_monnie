"use client"; 

import React, { useState, useEffect } from 'react';   
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

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
  <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-white">  
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
  const [activeScheduleTab, setActiveScheduleTab] = useState('resepsi');

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
    <div  className="tw-relative tw-bg-black">
        <video
          autoPlay
          loop
          muted
          className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover tw-z-0"
          src="/video/bg-video.mp4"
          type="video/mp4"
        />  

        <section className="tw-relative tw-h-screen tw-flex tw-items-center  tw-justify-center"> 
        </section> 

        <section className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center animate-section">
          <div className='tw-text-center'>
              <h1 className="tw-text-7xl tw-text-white tw-text-center tw-font-bold tw-m-4 font-baskervville">“Marry, for I will boast of your great numbers.”</h1>
              <p className='tw-text-gray-600 tw-mt-2 tw-text-white'>Ibnu Majah/1863</p>
          </div>
        </section>

        <section className="tw-relative tw-h-[200vh] " style={{ backgroundImage: "url('/image/bride-bg.jpeg')" }}>
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
        <section className="tw-relative tw-h-[200vh] " style={{ backgroundImage: "url('/image/bride-bg.jpeg')" }}>
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

        <section className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center animate-section">
          <div className='tw-text-center tw-my-8'>
              <p className='tw-text-gray-600 tw-mt-2 tw-text-white'>Lorem ipsum dolor sit amet consectetur</p>
              <h1 className="tw-text-6xl tw-text-white tw-text-center tw-font-bold tw-m-4 font-baskervville">42:11:39</h1>
          </div>
        </section>  

        <section className="tw-relative  tw-h-screen  tw-mx-20  tw-text-white">
          <h1 className="title tw-text-4xl tw-my-8 font-b font-baskervville tw-italic">Schedule</h1>
          <nav className="tw-mb-12 ">
              <ul className="tw-flex tw-space-x-8 tw-text-md">
                  <li><a href="#" onClick={handleActiveScheduleTabClick('resepsi')} className={ activeScheduleTab === 'resepsi' && (`tw-border-b-2 tw-border-white`)}>Wedding Reception</a></li>
                  <li><a href="#" onClick={handleActiveScheduleTabClick('akad')} className={ activeScheduleTab === 'akad' && (`tw-border-b-2 tw-border-white`)}>Akad Nikah</a></li>
                  <li><a href="#" onClick={handleActiveScheduleTabClick('streaming')} className={ activeScheduleTab === 'streaming' && (`tw-border-b-2 tw-border-white`)}>Live Streaming</a></li>
              </ul>
          </nav> 
          {activeScheduleTab === 'resepsi' && (
            <>
              <h1 className="tw-text-2xl tw-text-center  tw-font-bold tw-my-4 font-tirelessly">Wedding Reception</h1>
              <div className='tw-text-center tw-flex md:tw-flex-row tw-justify-center tw-space-y-8 md:tw-space-y-0 md:tw-space-x-16 animate-section'>
                <div className='tw-text-right tw-mx-4 tw-flex tw-flex-col tw-items-end'> 
                  <h3 className="tw-text-3xl tw-font-bold tw-my-4 font-tirelessly">Date</h3>
                  <h1 className="tw-text-6xl tw-font-bold tw-my-4 font-satoshi">42:11:39</h1>
                  <button className="tw-border tw-border-whitet tw-my-8  tw-py-2 tw-px-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
                      <span>Set reminder</span>
                      <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                <div className='tw-text-left tw-mx-4 tw-flex tw-flex-col tw-items-start'> 
                  <h3 className="tw-text-3xl tw-font-bold tw-my-4 font-tirelessly">Location</h3>
                  <h1 className="tw-text-6xl tw-font-bold tw-my-4 font-satoshi">Canggung</h1>
                  <button className="tw-border tw-border-white tw-my-8 tw-py-2 tw-px-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
                    <span>Open Google Maps</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </>
          )}
          {activeScheduleTab === 'akad' && (
            <>
              <h1 className="tw-text-2xl tw-text-center  tw-font-bold tw-my-4 font-tirelessly">Akad</h1>
              <div className='tw-text-center tw-flex md:tw-flex-row tw-justify-center tw-space-y-8 md:tw-space-y-0 md:tw-space-x-16 animate-section'>
                <div className='tw-text-right tw-mx-4 tw-flex tw-flex-col tw-items-end'> 
                  <h3 className="tw-text-3xl tw-font-bold tw-my-4 font-tirelessly">Date</h3>
                  <h1 className="tw-text-6xl tw-font-bold tw-my-4 font-satoshi">42:11:39</h1>
                  <button className="tw-border tw-border-whitet tw-my-8  tw-py-2 tw-px-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
                      <span>Set reminder</span>
                      <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
                <div className='tw-text-left tw-mx-4 tw-flex tw-flex-col tw-items-start'> 
                  <h3 className="tw-text-3xl tw-font-bold tw-my-4 font-tirelessly">Location</h3>
                  <h1 className="tw-text-6xl tw-font-bold tw-my-4 font-satoshi">Canggung</h1>
                  <button className="tw-border tw-border-whitet tw-my-8  tw-py-2 tw-px-4 tw-flex tw-items-center tw-justify-center tw-space-x-2">
                      <span>Open Google Maps</span>
                      <i className="fas fa-arrow-right"></i>
                  </button>
                </div> 
              </div>
            </>
          )}
          {activeScheduleTab === 'streaming' && (
          <div className='tw-text-center'> 
            <h1 className='tw-text-2xl font-tirelessly tw-m-4'>Live Streaming</h1>
            <div className='tw-flex tw-items-center tw-justify-center'>
              <div className="tw-relative tw-mb-4" style={{ width: '600px', height: '300px', overflow: 'hidden' }}>
                <video
                  className="tw-w-full tw-h-full tw-object-cover" // Ensure it covers the area while maintaining aspect ratio
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/video/bg-video.mp4" // Ensure the path is correct
                />
                <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50">
                  <button className="tw-text-white cursor-pointer" >
                    tap here to open
                  </button>
                </div>
              </div>
            </div> 
          </div>
          )}
        </section> 

        <section className="tw-relative  tw-h-screen    tw-text-white">
          <h1 className="title tw-text-4xl tw-my-8 tw-mx-20 font-b font-baskervville tw-italic">Gallery</h1> 
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
          {/* <div className='tw-w-full tw-flex tw-items-center tw-justify-center'>  */}
            {/* <div className="tw-w-full  tw-relative tw-flex tw-items-center tw-justify-center">
            <Slider {...settings2} > 
                <div className='tw-p-1'> 
                  <div className='tw-bg-white' style={{ width: '20rem', height: '30rem' }}>Box 1</div>
                </div> 
                <div className='tw-p-1'> 
                  <div className='tw-bg-white' style={{ width: '20rem', height: '30rem' }}>Box 1</div>
                </div> 
                <div className='tw-p-1'> 
                  <div className='tw-bg-white' style={{ width: '20rem', height: '30rem' }}>Box 1</div>
                </div>   
            </Slider>
            </div>   */}
          {/* </div>   */}
        </section>        
    </div>
  );
};

export default Dashboard;
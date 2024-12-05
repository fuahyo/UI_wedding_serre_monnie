"use client";

import React, { useState } from 'react';   
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div>
     <section className="tw-relative">
      <video
        autoPlay
        loop
        muted
        className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover tw-z-0"
        src="/video/bg-video.mp4"
        type="video/mp4"
      />
       <div className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center"> 
       </div>  
       <div className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center">
          <div className='tw-text-center'>
              <h1 className="tw-text-7xl tw-text-white tw-text-center tw-font-bold tw-m-4 font-baskervville">“Marry, for I will boast of your great numbers.”</h1>
              <p className='tw-text-gray-600 tw-mt-2 tw-text-white'>Ibnu Majah/1863</p>
          </div>
       </div>
 
       <div className="tw-relative tw-h-[200vh] " style={{ backgroundImage: "url('/image/bride-bg.jpeg')" }}>
          <div className="tw-absolute tw-top-10 tw-left-10 tw-text-white">
            <h1 className="tw-text-4xl tw-font-great-vibes font-tirelessly ">Catherine</h1>
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
       </div>  
       <div className="tw-relative tw-h-[20vh] tw-flex tw-items-center tw-bg-black tw-justify-center"> 
       </div>   
       <div className="tw-relative tw-h-[200vh] " style={{ backgroundImage: "url('/image/bride-bg.jpeg')" }}>
          <div className="tw-absolute tw-top-10 tw-right-10 tw-text-white">
            <h1 className="tw-text-4xl tw-font-great-vibes font-tirelessly ">Hansen</h1>
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
       </div> 

        <div className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center"> 
          <div className="tw-w-3/4">    
            <p className='tw-text-gray-600 tw-mt-2 tw-text-white font-baskervville'>
              <span className="tw-text-7xl tw-font-bold tw-inline-block">O</span>ur first met on a sunny afternoon at a mutual friend's gathering. It wasn’t love at first sight, but something sparked between us—a connection that grew stronger with each passing conversation. What started as a shared laugh over an inside joke quickly blossomed into something more. Little did we know, this was the start of our forever.
            </p>        
          </div>
        </div>

       <div className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center">
          <div className='tw-text-center'>
              <p className='tw-text-gray-600 tw-mt-2 tw-text-white'>Lorem ipsum dolor sit amet consectetur</p>
              <h1 className="tw-text-7xl tw-text-white tw-text-center tw-font-bold tw-m-4 font-baskervville">42:11:39</h1>
          </div>
       </div>  
    </section>

       
    </div>
  );
};

export default Dashboard;
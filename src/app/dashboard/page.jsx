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
  <div className=" tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center tw-bg-black"> 
    <video
      autoPlay
      loop
      muted
      className="tw-absolute tw-w-full tw-h-full tw-object-cover"
      src="https://www.w3schools.com/howto/rain.mp4"
      type="video/mp4"
    />
    
    <div className="tw-relative tw-text-center tw-text-white tw-p-8 tw-space-y-4">
      <h1 className="tw-text-4xl font-lobster tw-tracking-wide tw-uppercase tw-text-shadow-lg">
        WE INVITE YOU TO CELEBRATE
      </h1>
      <h2 className="tw-text-6xl font-lobster tw-tracking-tight tw-text-shadow-xl">
        Hanson & Catherine
      </h2>
      <p className="tw-text-3xl tw-font-roboto tw-text-shadow-md">SATURDAY, 02 MARCH 2024</p>
      <p className="tw-text-2xl tw-font-roboto tw-text-shadow-sm">Dear</p>
      <p className="tw-text-2xl tw-font-roboto tw-text-shadow-sm">Nama Tamu</p>
      <button
        onClick={onNext}
        className="tw-mt-6 tw-px-8 tw-py-3 tw-bg-white tw-text-black tw-rounded-full tw-font-bold tw-shadow-lg hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-500 transition duration-300"
      >
        LET'S OPEN
      </button>
    </div>
  </div>
);

const MainPage = () => {
  const brideImages = [
    "https://picsum.photos/300/201",
    "https://picsum.photos/300/202",
    "https://picsum.photos/300/203",
    "https://picsum.photos/300/204",
    "https://picsum.photos/300/205"
  ];

  const groomImages = [
    "https://picsum.photos/301/201",
    "https://picsum.photos/301/202",
    "https://picsum.photos/301/203",
    "https://picsum.photos/301/204",
    "https://picsum.photos/301/205",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="tw-h-screen tw-flex tw-items-center tw-justify-center tw-bg-black">
        <h1 className="tw-text-4xl tw-text-center tw-text-white">“Marry, for I will boast of your great numbers.”</h1>
      </div>  

      <div className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center tw-bg-cover" style={{ backgroundImage: "url('/public/image/bride-bg.jpeg')" }}>
        <div className="tw-absolute tw-top-10 tw-left-10 tw-text-white">
          <h1 className="tw-text-4xl tw-font-great-vibes">Catherine</h1>
        </div>
        <div className="tw-absolute tw-bottom-10 tw-w-full tw-flex tw-justify-center">
          <div className="tw-w-3/4 tw-overflow-hidden tw-relative">
            <Slider {...settings}>
              {brideImages.map((src, index) => (
                <div key={index}>
                  <Image src={src} alt={`Photo ${index + 1}`} width={300} height={200} className="tw-w-full tw-h-auto" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div> 

      <div className="tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center tw-bg-cover" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
        <div className="tw-absolute tw-top-10 tw-right-10 tw-text-white">
          <h1 className="tw-text-4xl tw-font-great-vibes">Hanson</h1>
        </div>
        <div className="tw-absolute tw-bottom-10 tw-w-full tw-flex tw-justify-center">
          <div className="tw-w-3/4 tw-overflow-hidden tw-relative">
            <Slider {...settings}>
              {groomImages.map((src, index) => (
                <div key={index}>
                  <Image src={src} alt={`Photo ${index + 1}`} width={300} height={200} className="tw-w-full tw-h-auto" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
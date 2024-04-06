"use client"
import React from 'react'
import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import Banner1 from '../images/Banner1.png'
import Banner2 from '../images/Banner2.png'
import Banner3 from '../images/Banner3.png'
import Banner4 from '../images/Banner4.png'
import BannerTxt from './BannerTxt';



const Carousel = () => {
    function NextArrow(props:any) {
        const { className, onClick } = props;
        return (
          <FaCircleArrowRight className='text-3xl absolute top-1/2 right-0 z-20 mr-4' onClick={onClick}/>
        );
      }
    function PrevArrow(props:any) {
        const { className, onClick } = props;
        return (
          <FaCircleArrowLeft className='text-3xl absolute top-1/2 left-0 z-20 ml-4' onClick={onClick}/>
        );
      }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
  return (
    <div className="relative">
    <Slider {...settings}>
      <div>
        <Image src={Banner1} alt='this is a banner' className=' relative w-full h-full' />
        <BannerTxt/>
      </div>
      <div>
        <Image src={Banner2} alt='this is a banner' className=' w-full h-full relative'/>
        <BannerTxt/>
      </div>
      <div>
        <Image src={Banner3} alt='this is a banner' className=' w-full h-full relative'/>
        <BannerTxt/>
      </div>
      <div>
        <Image src={Banner4} alt='this is a banner' className=' w-full h-full relative'/>
        <BannerTxt/>
      </div>
     
    </Slider>
  </div>
  )
}

export default Carousel
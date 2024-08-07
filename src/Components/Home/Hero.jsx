import React from 'react';
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Hero() {
  useGSAP(() =>{
    const tl = gsap.timeline();
    tl.from('#main', { duration: 2, opacity: 0, y: 90 ,ease:'bounce'})
    tl.from('h1',{duration: 0.8, opacity: 0, y: 90 ,ease:"power1"} )
    tl.from('p',{duration: 0.8, opacity: 0, y: 90 ,ease:"power1"} )
    tl.from('button',{duration: 0.8, opacity: 0, y: 90 ,ease:"power1"} )
  
  })
  return (
    <div id='main' className='h-[60vh] bg-[#FEFBF0] flex items-center justify-center gap-10 ' style={{ backgroundImage: "url('https://i.ibb.co/dD0cQ8q/drew-coffman-ll-Wjwo200fo-unsplash.jpg')", backgroundPosition:'center'}}>
      <div className="flex flex-col justify-center items-center text-center text-black backdrop-blur-[2px]  w-full h-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Perfect Match</h1>
        <p className="text-center md:text-md max-w-lg pb-10">
          Welcome to <span className='text-orange-800 font-semibold text-lg'>MatchHearts</span> , where love meets destiny. Our platform is dedicated to helping you find your soulmate. With personalized matches and advanced search options, your journey to a blissful partnership begins here.
        </p>
        <Link to={'/bioDatas'}> <button className='bg-[#302F2A] p-3 text-lg font-semibold rounded-xl text-white'>See All</button></Link>
      </div>
    </div>
  );
}

export default Hero;

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 100px, hide the navbar
      if (window.scrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] flex items-center h-[164px] transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      
      {/* 1. THE LOGO */}
      <div className="pl-12 flex-shrink-0">
        <img 
          src="/image-removebg-preview.png" 
          alt="ACM-W Logo" 
          className="w-[164px] h-[164px] object-contain"
        />
      </div>

      {/* 2. THE NAV PILL */}
      <div 
        className="absolute flex items-center justify-center"
        style={{
          boxSizing: 'border-box',
          width: '1125px',
          height: '64px',
          left: '240px',
          top: '78px',
          background: 'rgba(150, 128, 128, 0.13)',
          border: '1px solid rgba(185, 176, 176, 0.46)',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(2.5px)',
          borderRadius: '32px'
        }}
      >
        <ul className="flex gap-24 text-white font-semibold text-lg tracking-widest uppercase">
          <li className="hover:text-[##99399E] cursor-pointer transition-all">Home</li>
          <li className="hover:text-[##99399E] cursor-pointer transition-all">About Us</li>
          <li className="hover:text-[##99399E] cursor-pointer transition-all">Event Gallery</li>
          <li className="hover:text-[##99399E] cursor-pointer transition-all">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
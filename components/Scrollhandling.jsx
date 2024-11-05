"use client";
import { useEffect } from 'react';

const Scrollhandling = () => {

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById('navbar');
          const theHeight = 64;
          if (window.scrollY > theHeight) {
            navbar.classList.add();
            navbar.classList.remove();
          } else {
            navbar.classList.remove();
            navbar.classList.add();
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

  return null;
};

export default Scrollhandling;

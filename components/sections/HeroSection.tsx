import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const roles = [
  'متخصص هوش مصنوعی و یادگیری ماشین',
  'پژوهشگر یادگیری عمیق کوانتومی',
  'برنامه‌نویس فول-استک',
  'فیزیکدان آینده',
];

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        // Pause at end
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 75 : 150);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="relative z-10 text-center lg:text-right animate-fade-in-right">
            <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">سلام، من</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-glow">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 py-2">Mehrdad Rajabi</span>
            </h1>
            <h3 className="text-lg md:text-2xl text-gray-300 mt-4 font-semibold min-h-[3rem] md:min-h-[4rem]">
              <span className="border-r-2 border-cyan-400 animate-cursor-blink pr-1">{text}</span>
            </h3>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 lg:mr-auto text-md md:text-lg text-gray-400 leading-relaxed">
              پلی میان دنیای کوانتوم و کدهای فول-استک. من با اشتیاق به حل چالش‌های پیچیده، ایده‌ها را به راه‌حل‌های فناورانه و کارآمد تبدیل می‌کنم.
            </p>
            <div className="mt-10 flex justify-center lg:justify-end gap-4">
              <Link to="portfolio" smooth={true} duration={500} offset={-70} className="hero-button-primary">
                نمونه کارها
              </Link>
              <Link to="contact" smooth={true} duration={500} offset={-70} className="hero-button-secondary">
                تماس با من
              </Link>
            </div>
          </div>

          {/* Right Side: Animated Graphic */}
          <div className="relative hidden lg:flex items-center justify-center h-96 animate-fade-in-left">
            <div className="quantum-core">
              <div className="quantum-core-inner"></div>
              <div className="quantum-particle particle-1"></div>
              <div className="quantum-particle particle-2"></div>
              <div className="quantum-particle particle-3"></div>
              <div className="quantum-particle particle-4"></div>
            </div>
          </div>
        </div>
      </div>
       
       {/* Scroll Down Indicator - Kept for UX on large screens */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <Link to="about" smooth={true} duration={500} offset={-70} className="cursor-pointer group">
              <div className="w-6 h-10 border-2 border-gray-500 group-hover:border-blue-400 rounded-full flex justify-center items-start pt-2 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 bg-gray-500 group-hover:bg-blue-400 rounded-full animate-scroll-down transition-colors duration-300"></div>
              </div>
          </Link>
      </div>
    </section>
  );
};

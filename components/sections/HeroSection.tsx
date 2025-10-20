import React from 'react';
import { Link } from 'react-scroll';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob-move"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob-move animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-glow">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 py-2">مهرداد رجبی</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          پلی میان دنیای کوانتوم و کدهای فول-استک. من با اشتیاق به حل چالش‌های پیچیده، ایده‌ها را به راه‌حل‌های فناورانه و کارآمد تبدیل می‌کنم.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link to="portfolio" smooth={true} duration={500} offset={-70} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg cursor-pointer shadow-lg hover:shadow-blue-500/50">
            نمونه کارها
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70} className="bg-gray-700 text-gray-100 font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition-all duration-300 text-lg cursor-pointer shadow-lg hover:shadow-gray-500/50">
            تماس با من
          </Link>
        </div>
      </div>
      
       {/* Scroll Down Indicator */}
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
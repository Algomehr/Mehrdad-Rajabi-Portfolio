import React from 'react';
import { Link } from 'react-scroll';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative">
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-glow">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 py-2">Mehrdad Rajabi</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
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
    </section>
  );
};
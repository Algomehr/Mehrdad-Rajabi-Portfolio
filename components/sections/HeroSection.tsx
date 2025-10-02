import React from 'react';
import { Link } from 'react-scroll';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-blue-500/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="block text-gray-200">Mehrdad Rajabi</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
            پلی میان دنیای کوانتوم و کدهای فول-استک. من با اشتیاق به حل چالش‌های پیچیده، ایده‌ها را به راه‌حل‌های فناورانه و کارآمد تبدیل می‌کنم.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="portfolio" smooth={true} duration={500} offset={-70} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 text-lg cursor-pointer">
              نمونه کارها
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-600 transition duration-300 text-lg cursor-pointer">
              تماس با من
            </Link>
          </div>
        </div>
    </section>
  );
};
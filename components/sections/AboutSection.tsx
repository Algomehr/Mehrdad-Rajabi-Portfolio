import React from 'react';
import { SectionWrapper } from '../SectionWrapper';

export const AboutSection: React.FC = () => {
  const specializations = [
    { name: 'فیزیک کوانتوم', level: 20 },
    { name: 'هوش مصنوعی', level: 90 },
    { name: 'امنیت شبکه', level: 30 },
    { name: 'برنامه‌نویسی پایتون', level: 90 },
    { name: 'توسعه وب فول استک', level: 90 },
    { name: 'توسعه بازی', level: 60 },
    { name: 'کیهان‌شناسی', level: 50 },
    { name: 'ستاره‌شناسی', level: 50 },
    { name: 'علوم اعصاب', level: 10 },
  ];

  const technicalSkills = [
    'JavaScript', 'TypeScript', 'C++', 'Node.js', 'Next.js', 'React',
    'Three.js', 'Blender', 'PINNs', 'SEO', 'System Architecture', 'LLM', 'ML', 'DL', 
    'Research', 'Teamwork', 'Python', 'Data Science', 'IOT', 'Wordpress', 
    'Photography', 'Videography', 'Mathematics', 'Simulation', 'COMSOL', 'Astronomy'
  ];

  const languages = [
    { name: 'انگلیسی', level: '' },
    { name: 'فارسی', level: 'زبان مادری' },
    { name: 'فرانسوی', level: '' },
    { name: 'آلمانی', level: '' },
  ];
  
  return (
    <SectionWrapper id="about" title="درباره من">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 w-full flex-shrink-0 relative">
          <div className="absolute inset-0 border-4 border-blue-500/50 rounded-full animate-pulse"></div>
          <img 
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHMAeADAREAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABQECAwQGAAcI/8QAVxAAAQMDAgMFBQQECQcJBgcBAQIDEQQFIQAGMRJBURNhcQeBFCJSkZKhscEIMlNicqLR0uHwFRYkMzU2Q4KSorOywtPxJTZEVFVjdYOTpNMlNjdEdIOj/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAA5EQACAQIEAwYDBwQDAAMAAAAAAQIDEQQSITFBURMiYTJxgZGhFEJSscHR8FLhBiNikjNDYnKywv/w" 
            alt="Mehrdad Rajabi" 
            className="rounded-full border-4 border-blue-500 shadow-2xl shadow-blue-500/30 mx-auto object-cover w-64 h-64 md:w-80 md:h-80 relative z-10"
          />
        </div>
        <div className="md:w-2/3 w-full text-lg text-gray-300 space-y-4">
            <p>
                من دانشجوی فیزیک در دانشگاه اصفهان هستم و اشتیاق عمیقی برای کشف پیچیدگی‌های جهان، از قلمرو کوانتومی تا ساختارهای کیهانی، دارم. سفر آکادمیک من تنها به نظریه محدود نمی‌شود؛ بلکه سکوی پرتابی برای به کارگیری فیزیک بنیادی در مهندسی راه‌حل‌های نوآورانه و واقعی است.
            </p>
            <p>
                تخصص من محاسبات کوانتومی، یادگیری ماشین و توسعه فول-استک را در بر می‌گیرد. من در رهبری پروژه‌ها از جرقه اولیه ایده تا یک اپلیکیشن کاملاً مستقر و با کارایی بالا، شکوفا می‌شوم. چه معماری شبکه‌های عصبی آگاه از فیزیک (PINNs)، چه توسعه تجربیات وب سه‌بعدی تعاملی با Three.js، یا استفاده از اصول کوانتومی برای تقویت یادگیری عمیق، هدف من همیشه یکسان است: ارائه با <span className="font-semibold text-white">خلاقیت، سرعت و کیفیت بی‌نظیر</span>.
            </p>
            <p>
                خارج از دنیای کد و کیهان‌شناسی، خلاقیت خود را از طریق عکاسی، فیلم‌سازی و نویسندگی بیان می‌کنم و همواره به دنبال دیدگاه‌های جدید هستم. من فعالانه به دنبال فرصت‌های تحقیقاتی و کارآموزی هستم که در آن بتوانم در پروژه‌های پیشگامانه مشارکت کرده و به پر کردن شکاف بین علم انتزاعی و فناوری ملموس ادامه دهم.
            </p>
        </div>
      </div>
      
      <div className="mt-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {/* Specializations Section */}
            <div>
              <h3 className="text-2xl font-bold text-center text-white mb-8">تخصص‌ها</h3>
              <div className="space-y-6">
                {specializations.map(spec => (
                  <div key={spec.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-blue-300">{spec.name}</span>
                      <span className="text-sm font-medium text-blue-300">{spec.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full" style={{ width: `${spec.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-center text-white mb-8">مهارت‌های فنی</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {technicalSkills.map(skill => (
                  <span key={skill} className="bg-gray-800/50 text-blue-300 text-sm font-medium px-4 py-2 rounded-full border border-gray-700 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
        </div>
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-white mb-8">مهارت‌های زبانی</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {languages.map((lang) => (
            <div key={lang.name} className="bg-gray-800/50 border border-gray-700 rounded-lg px-5 py-3 text-center transition-all duration-300 hover:border-blue-500 hover:-translate-y-1 shadow-md hover:shadow-blue-500/20">
              <p className="text-lg font-semibold text-white">{lang.name}</p>
              <p className="text-sm text-blue-400">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
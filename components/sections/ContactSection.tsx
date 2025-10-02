import React, { useState } from 'react';
import { SectionWrapper } from '../SectionWrapper';

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('در حال ارسال...');
    setIsSuccess(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    // IMPORTANT: Replace 'mqkrvvny' with your own Formspree form ID.
    // 1. Go to formspree.io
    // 2. Create a new form and set your email.
    // 3. Get your form's endpoint ID and paste it here.
    const FORM_ENDPOINT = 'https://formspree.io/f/manpjojk'; 

    try {
        const response = await fetch(FORM_ENDPOINT, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus('از پیام شما متشکرم! به زودی با شما تماس خواهم گرفت.');
            setIsSuccess(true);
            form.reset();
        } else {
            const responseData = await response.json();
            if (responseData.errors) {
                 setStatus(`خطا: ${responseData.errors.map((error: any) => error.message).join(', ')}`);
            } else {
                 setStatus('خطا! مشکلی در ارسال فرم شما وجود داشت.');
            }
            setIsSuccess(false);
        }
    } catch (error) {
        setStatus('خطا! مشکل شبکه. لطفا دوباره تلاش کنید.');
        setIsSuccess(false);
    } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <SectionWrapper id="contact" title="در تماس باشید">
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-lg text-gray-400 mb-8">
          یک پروژه، یک فرصت تحقیقاتی، یا فقط می‌خواهید ارتباط برقرار کنید؟ خوشحال می‌شوم از شما بشنوم.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="نام شما" required className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="email" placeholder="ایمیل شما" required className="bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input type="text" name="subject" placeholder="موضوع" required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="message" placeholder="پیام شما" rows={6} required className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full hover:bg-blue-700 transition duration-300 text-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
            </button>
          </div>
          {status && !isSubmitting && (
            <p className={`text-center mt-4 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </SectionWrapper>
  );
};
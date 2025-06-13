import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import FAQ from '../../components/faq';
// import LanguageSelector from "../../components/LanguageSelector";
import {
  Tv2,
  Download,
  MonitorSmartphone,
  Baby
} from "lucide-react";
import { useTranslation } from 'react-i18next';



const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate('/signup?email=' + email);
  }

  return (<div className='hero-bg relative'>
    {/* Navbar */}
    <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
      <img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 md:w-52' />

      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto mt-2 sm:mt-0 px-4">
  {/* Language Selector */}
  <select
  onChange={(e) => i18n.changeLanguage(e.target.value)}
  defaultValue="en"
  className="bg-transparent border border-gray-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded w-full sm:w-auto text-xs sm:text-sm"
>
{/* <LanguageSelector /> */}

    <option value="en" className="text-black">English</option>
    <option value="hi" className="text-black">हिन्दी</option>
    <option value="bn" className="text-black">বাংলা</option>
    <option value="or" className="text-black">ଓଡ଼ିଆ (Odia)</option>
    <option value="gu" className="text-black">ગુજરાતી (Gujarati)</option>
    <option value="ta" className="text-black">தமிழ் (Tamil)</option>
    <option value="te" className="text-black">తెలుగు (Telugu)</option>
    <option value="kn" className="text-black">ಕನ್ನಡ (Kannada)</option>
    <option value="ml" className="text-black">മലയാളം (Malayalam)</option>
    <option value="pa" className="text-black">ਪੰਜਾਬੀ (Punjabi)</option>
    <option value="mr" className="text-black">मराठी (Marathi)</option>
    <option value="ur" className="text-black">اردو (Urdu)</option>
    <option value="ne" className="text-black">नेपाली (Nepali)</option>
    <option value="as" className="text-black">অসমীয়া (Assamese)</option>
    <option value="fr" className="text-black">Français (French)</option>
    <option value="es" className="text-black">Español (Spanish)</option>
    <option value="zh" className="text-black">中文 (Chinese)</option>
    <option value="ar" className="text-black">العربية (Arabic)</option>
    <option value="bho" className="text-black">भोजपुरी (Bhojpuri)</option>
    </select>

  <Link
    to="/login"
    className="text-white bg-red-600 py-1 px-2 rounded text-xs sm:text-sm w-full sm:w-auto text-center"
  >
   {t('signIn')}
  </Link>
</div>




</header>
    {/* Hero Section */}

    <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto '>
    <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center sm:text-left">{t("title")}</h1>
<p className="text-md sm:text-xl mb-4 text-center sm:text-left">{t("subtitle")}</p>
<p className="text-md sm:text-xl mb-4 text-center sm:text-left">{t("description")}</p>


      <form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
        <input type='email' 
        placeholder={t('email')}
        className='p-2 rounded flex-1 bg-black/80 border border-gray-700' 
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

        <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
          {t("get")}
          <ChevronRight className='size-8 md:size-10' />
        </button>

    </form>
    </div>

    {/* separator */}
    {/* <div className='h-2 w-full bg-[#232323]' aria-hidden='true'/> */}
    <div
  className="h-2 w-full"
  aria-hidden="true"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,0,85,0.6), rgba(0,0,0,0.9))',
  }}
/>

  




   
    {/* 1st section */}

    <div className='py-10 bg-black text-white'>

      <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
        {/* left side */}
        <div className='flex-1 text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>{t('1st')}</h2>
          <p className='text-lg md:text-xl'>   {t('enjoy')}</p>
        </div>
        {/* Right side */}
        <div className='flex-1 relative'>
          <img src='/tv.png' alt='TV' className='mt-4 z-20 relative' />
          <video 
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10' 
          playsInline
          autoPlay={true}
          muted
          loop
          >
            <source src='/hero-vid.m4v' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
     {/* separator */}
     <div
  className="h-2 w-full"
  aria-hidden="true"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,0,85,0.6), rgba(0,0,0,0.9))',
  }}
/>

    {/* 2nd section */}
    <div className='py-10 bg-black text-white'>
      <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
        {/* left side */}
          <div className='flex-1'>
            <div className='relative'>
            <img src='/stranger-things-lg.png' alt='Stranger Things' className='mt-4' />
            
            <div className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black
            w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2'>
              
              <img src='/stranger-things-sm.png' alt='Stranger Things' className='h-full' />
              
              <div className='flex justify-between items-center w-full'>
                <div className='flex flex-col gap-0'>
              
                  <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                  <span className='text-sm text-blue-500'>Downloading...</span>
              
                </div>

                <img src='/download-icon.gif' alt='Download Icon' className='h-12' />
              </div>
            </div>
            </div>
          </div>
          {/* Right side */}
      <div className='flex-1 md:text-left text-center'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
          {t('download')}
          </h2>
          <p className='text-lg md:text-xl'>
          {t('favourite')}
          </p>
      </div>
          
      </div>
    </div>

    {/* separator */}
    <div
  className="h-2 w-full"
  aria-hidden="true"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,0,85,0.6), rgba(0,0,0,0.9))',
  }}
/>
   
    {/* 3rd section */}

    <div className='py-10 bg-black text-white'>

      <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
        {/* left side */}
        <div className='flex-1 text-center md:text-left'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>{t('watch')}</h2>
          <p className='text-lg md:text-xl'>{t('stream')}</p>
        </div>

        {/* Right side */}
        <div className='flex-1 relative overflow-hidden'>
          <img src='/device-pile.png' alt='Device image' className='mt-4 z-20 relative' />
          <video 
          className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]' 
          playsInline
          autoPlay={true}
          muted
          loop
          >
            <source src='/video-devices.m4v' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>

     {/* separator */}
     <div
  className="h-2 w-full"
  aria-hidden="true"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,0,85,0.6), rgba(0,0,0,0.9))',
  }}
/>





    {/* 4th section */}
    <div className='py-10 bg-black text-white'>
      <div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'>
          {/* left side */}
          <div className='flex-1 relative'>
            <img src='/kids.png' alt='Kids image Enjoy Your Tv' className='mt-4' />
          </div>

          {/* Right side */}
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>{t('create')}</h2>
            <p className='text-lg md:text-xl'>{t('kids')}</p>
          </div>
      </div>
      {/* separator */}
      <div
  className="h-2 w-full"
  aria-hidden="true"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,0,85,0.6), rgba(0,0,0,0.9))',
  }}
/>


      {/* 5th section */}

{/* More reasons to join */}
<div className="bg-black text-white py-16">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">{t('more')}</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
    
    {/* Card 1 */}
    <div className="bg-gradient-to-b from-[#2d2d2d] to-black rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-pink-600/50 transition-all duration-300">
      <div>
        <h3 className="text-xl font-bold mb-2">{t('1st')}</h3>
        <p className="text-sm">{t('enjoy')}</p>
      </div>
      <Tv2 className="h-10 w-10 text-pink-500 mt-4 self-end" />
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-b from-[#2d2d2d] to-black rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-pink-600/50 transition-all duration-300">
      <div>
        <h3 className="text-xl font-bold mb-2">{t('download')}</h3>
        <p className="text-sm">{t('favourite')}</p>
      </div>
      <Download className="h-10 w-10 text-pink-500 mt-4 self-end" />
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-b from-[#2d2d2d] to-black rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-pink-600/50 transition-all duration-300">
      <div>
        <h3 className="text-xl font-bold mb-2">{t('watch')}</h3>
        <p className="text-sm">{t('stream')}</p>
      </div>
      <MonitorSmartphone className="h-10 w-10 text-pink-500 mt-4 self-end" />
    </div>

    {/* Card 4 */}
    <div className="bg-gradient-to-b from-[#2d2d2d] to-black rounded-xl p-6 flex flex-col justify-between shadow-md hover:shadow-pink-600/50 transition-all duration-300">
      <div>
        <h3 className="text-xl font-bold mb-2">{t('create')}</h3>
        <p className="text-sm">{t('them')}</p>
      </div>
      <Baby className="h-10 w-10 text-pink-500 mt-4 self-end" />
    </div>

  </div>
</div>

 {/* separator */}
 <div
  className="h-2 w-full"
  aria-hidden="true"
  style={{
    background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(255,0,85,0.6), rgba(0,0,0,0.9))',
  }}
/>
      {/* FAQ */}
      <div>
      <FAQ />
      </div>
     
    </div>

</div>
  );
}

export default AuthScreen;
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function EchosPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-white min-h-screen bg-black">
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pb-24 relative overflow-hidden" style={{
        background: `radial-gradient(ellipse at bottom right, rgba(47, 60, 75, 0.8), rgba(0, 0, 0, 0.8) 70%), 
                     #000000`
      }}>
        {/* Wave Background at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 ">
          <Image 
            src="/Union 1.svg" 
            alt="Wave Background" 
            width={1440}
            height={386}
            className="w-full h-auto scale-100 transform translate-y-3 translate-x-24"
            style={{
              objectFit: 'contain',
              objectPosition: 'center bottom'
            }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          {/* Echos Logo */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/Echos logo.svg" 
              alt="Echos Logo" 
              width={300}
              height={100}
              className="w-auto h-20"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Speak Freely. Capture Instantly.
          </p>
          
          {/* Download Button */}
          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium text-lg shadow-lg">
            Download app
          </button>
        </div>
      </section>

      {/* About Echos Section */}
      <section className="min-h-screen py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <hr className="w-12 border-t border-gray-700"/>
                  <span className="text-sm text-gray-500 tracking-wider">About Echos</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                  About Echos
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Echos is a lightweight voice-to-text app built for clarity and speed. 
                  Whether you&apos;re capturing ideas, notes, or conversations, just start a 
                  session, speak, and your words appear instantly.
                </p>
                
                <p>
                  No setup. No learning curve. Delete or save sessions as you go — it&apos;s 
                  that simple.
                </p>
              </div>
            </div>
            
            {/* Right side - iPhone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image 
                  src="/iphone.svg" 
                  alt="iPhone with Echos App Interface" 
                  width={300}
                  height={600}
                  className="w-72 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built in the Open Section */}
      <section id="open-source" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden" style={{
         background: `var(--Gradient-Background, linear-gradient(262deg, var(--Metal-900, #262f3a) 13.74%, var(--Metal-1000, #080A0D) 110.14%))`
      }}>
        {/* Wave Background */}
        <div className="absolute top-0 left-0 right-0 w-full h-full opacity-20">
         <Image 
            src="/open_source_wave.svg" 
            alt="Wave Background" 
            width={1440}
            height={386}
            className="w-full h-auto scale-100 transform translate-y-3 translate-x-24"
            style={{
              objectFit: 'contain',
              objectPosition: 'center bottom'
            }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto text-center z-10 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Logo */}
            <div className="flex justify-center lg:justify-start">
              <Image 
                src="/echo_open_source_section.svg" 
                alt="Echos Open Source Logo" 
                width={400}
                height={400}
                className="w-180 h-80"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-8 text-left lg:text-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <hr className="w-12 border-t border-gray-700"/>
                  <span className="text-sm text-gray-400 tracking-wider">Open Source</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                  Built in the Open.<br />
                  Yours to Trust.
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Echos is fully open source, because we believe privacy and trust should 
                  be built-in — not bought.
                </p>
                
                <p>
                  Your data stays on your device, and the code is open for anyone to 
                  inspect, improve, or build on.
                </p>
                
                <div className="pt-4">
                  <a href="#" className=" hover:text-blue-300 transition-colors underline">
                    Github link.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-px bg-gray-800">
            {/* One-Tap Recording */}
            <div className="bg-black p-16 text-white">
              <Image 
                src="/mic.svg" 
                alt="Microphone Icon" 
                width={80}
                height={80}
                className="w-20 h-20 mb-10"
              />
              <h3 className="text-3xl font-light mb-8">One-Tap Recording</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Start transcribing instantly. No menus, no distractions — just tap and speak.
              </p>
            </div>

            {/* Multi-Language Support */}
            <div className="bg-black p-16 text-white">
              <Image 
                src="/worldwide.png" 
                alt="Worldwide Icon" 
                width={80}
                height={80}
                className="w-20 h-20 mb-10"
              />
              <h3 className="text-3xl font-light mb-8">Multi-Language Support</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Supports major languages like English, Spanish, German, Polish, and more.
              </p>
            </div>

            {/* Works Offline */}
            <div className="bg-black p-16 text-white">
              <Image 
                src="/cloud.png" 
                alt="Cloud Icon" 
                width={80}
                height={80}
                className="w-20 h-20 mb-10"
              />
              <h3 className="text-3xl font-light mb-8">Works Offline</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                No internet? No problem. Echos works fully offline, anytime, anywhere.
              </p>
            </div>

            {/* 100% Private */}
            <div className="bg-black p-16 text-white">
              <Image 
                src="/lock.png" 
                alt="Lock Icon" 
                width={80}
                height={80}
                className="w-20 h-20 mb-10"
              />
              <h3 className="text-3xl font-light mb-8">100% Private</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                All sessions are stored locally on your device. Nothing goes to the cloud — ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Echos Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="p-16 relative overflow-hidden" style={{
            borderRadius: '32px',
            border: '1px solid var(--Surface-Border-Primary, #1D1F21)',
            background: 'var(--Gradient-Background, linear-gradient(262deg, var(--Metal-900, #181E25) 13.74%, var(--Metal-1000, #080A0D) 110.14%))',
            backdropFilter: 'blur(32px)'
          }}>
            
            {/* Large subtle background logo */}
            <div className="absolute top-1/2 transform -translate-y-1/2" style={{ right: 'calc(2rem + 50px)' }}>
              <Image 
                src="/Echos_Logo_download.png" 
                alt="Echos Logo" 
                width={256}
                height={256}
                className="w-84 h-84"
              />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-dark text-white mb-6 leading-tight">
                Download Echos now
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Download now — record and transcribe instantly.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium text-lg">
                Download Echos
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
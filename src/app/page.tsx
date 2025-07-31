'use client';

import Image from 'next/image';
import MobileNavbar from '../components/MobileNavbar';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-white min-h-screen bg-black">
      {/* Header/Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.1379 6.10501e-07C13.182 1.9378e-05 14.1155 0.65071 14.4771 1.63028L22.7328 24H17.5474L11.8095 8.07802C11.7114 7.80596 11.328 7.80258 11.225 8.07285L5.1602 24H0.174408L8.52912 1.62145C8.89311 0.646461 9.82424 2.4241e-05 10.865 6.10501e-07H12.1379ZM11.8664 7.66528C11.8792 7.67389 11.8918 7.683 11.9041 7.69268C11.8796 7.67334 11.8539 7.65603 11.8271 7.64093L11.8664 7.66528Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M33.8182 6.10501e-07C34.6355 6.10501e-07 35.2981 0.66258 35.2981 1.47991V24H30.2934V5.61039H25.2467V2.91964L30.9037 0.240159C31.2374 0.0821151 31.602 4.54225e-06 31.9712 6.10501e-07C32.3061 -2.95651e-06 32.8698 1.07102e-05 33.8182 6.10501e-07Z" fill="white"/>
            </svg>
            <nav className="hidden md:flex space-x-8 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Echos App</a>
              <a href="#" className="hover:text-white transition-colors">Technology</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block border border-white/80 text-white px-4 py-1.5 rounded-md hover:bg-white/10 transition-colors font-medium">
              Contact us
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6" style={{background: 'radial-gradient(ellipse at top left, rgba(31, 41, 55, 0.514) 0%, #000000 70%), radial-gradient(ellipse at bottom right, rgba(31, 41, 55, 0.514) 0%, #000000 70%)'}}>
        <div className="max-w-4xl mx-auto text-center my-45">
          <div className="flex justify-center mb-4 items-baseline gap-4">
            <svg width="80" height="51" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.1379 6.10501e-07C13.182 1.9378e-05 14.1155 0.65071 14.4771 1.63028L22.7328 24H17.5474L11.8095 8.07802C11.7114 7.80596 11.328 7.80258 11.225 8.07285L5.1602 24H0.174408L8.52912 1.62145C8.89311 0.646461 9.82424 2.4241e-05 10.865 6.10501e-07H12.1379ZM11.8664 7.66528C11.8792 7.67389 11.8918 7.683 11.9041 7.69268C11.8796 7.67334 11.8539 7.65603 11.8271 7.64093L11.8664 7.66528Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M33.8182 6.10501e-07C34.6355 6.10501e-07 35.2981 0.66258 35.2981 1.47991V24H30.2934V5.61039H25.2467V2.91964L30.9037 0.240159C31.2374 0.0821151 31.602 4.54225e-06 31.9712 6.10501e-07C32.3061 -2.95651e-06 32.8698 1.07102e-05 33.8182 6.10501e-07Z" fill="white"/>
            </svg>
              <h2 className="text-4xl md:text-7xl font-light  bg-gradient-to-b from-white to-[#F4F5F6] bg-clip-text text-transparent tracking-tight">
               LAB
            </h2>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed" style={{color: '#929BA0'}}>
            Harnessing intelligent tech to power the future of AI applications.
          </p>
          <button className="bg-white text-[#090A0B] px-6 py-4 rounded-xl hover:bg-[#F4F5F6] transition-all duration-300 font-semibold text-lg shadow-2xl hover:scale-105">
            Our Products
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-black" >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-sm text-gray-500 mb-4 tracking-wider flex items-center">
              <hr className='w-8 border-t border-gray-700 mr-4'/>
              <span>OUR CREATIONS</span>
            </p>
            <h2 className="text-5xl font-light text-white mb-8">Products</h2>
            <p className="text-xl text-gray-400 max-w-[600px] leading-relaxed font-light">
              A1 Labs builds intelligent software that enhances how people work, think, and create. From transcription to coding, our AI-first tools are designed for clarity, speed, and real-world performance. Here&#39;s a preview of what we&#39;re building:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Echos App Card */}
            <div className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[600px] flex flex-col" style={{background: 'linear-gradient(135deg, rgba(24, 30, 37, 0.4) 0%, transparent 70%), linear-gradient(315deg, rgba(24, 30, 37, 0.4) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 60% 30%, rgba(24, 30, 37, 0.3) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 80% 70%, rgba(24, 30, 37, 0.3) 0%, transparent 70%), linear-gradient(290deg, #181E25 0%, #0f1316 40%, #080A0D 100%)'}}>
                {/* Header with Echos logo */}
                <div className="flex justify-center items-center mb-6">
                  <svg width="105" height="34" viewBox="0 0 105 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7886 0.345904C15.7886 0.0401635 16.1556 -0.114433 16.3747 0.098822L16.6424 0.359631C26.0419 9.51039 25.9141 24.6513 16.361 33.6416C16.1438 33.8455 15.789 33.6923 15.7886 33.3945V0.345904ZM7.20519 3.95331C7.20519 3.66088 7.54789 3.50431 7.76937 3.69524L7.97664 3.87232C16.0197 10.8081 15.9164 23.3054 7.75838 30.1056C7.53894 30.2882 7.2057 30.1316 7.20519 29.8462V3.95331ZM57.5043 12.5518C59.1543 12.5518 60.4831 12.9687 61.4906 13.8023C62.5154 14.6187 63.1673 15.7483 63.4452 17.1901H60.553C60.3793 16.5649 60.0233 16.0696 59.4851 15.7048C58.964 15.34 58.2946 15.1571 57.4782 15.1571C56.8877 15.1572 56.3227 15.3139 55.7843 15.6266C55.2634 15.9392 54.8377 16.4084 54.5077 17.0336C54.1952 17.6414 54.0397 18.4056 54.0396 19.3259C54.0396 20.2292 54.1951 20.9944 54.5077 21.6197C54.8377 22.2449 55.2633 22.7228 55.7843 23.0528C56.3227 23.3654 56.8877 23.5208 57.4782 23.5209C58.312 23.5209 58.9813 23.3393 59.4851 22.9745C59.9887 22.6098 60.3446 22.1057 60.553 21.4632H63.4452C63.0978 22.8874 62.4197 24.0159 61.4123 24.8496C60.4048 25.6833 59.1023 26.1001 57.5043 26.1001C56.3058 26.1001 55.2283 25.8227 54.273 25.2669C53.3353 24.7111 52.5972 23.9295 52.0589 22.9224C51.5204 21.8975 51.2517 20.6982 51.2517 19.3259C51.2518 17.9539 51.5205 16.7643 52.0589 15.757C52.6147 14.7495 53.3611 13.9669 54.2991 13.4111C55.237 12.8379 56.3058 12.5518 57.5043 12.5518ZM85.4671 12.5518C86.7177 12.5518 87.8214 12.8293 88.7767 13.385C89.7494 13.9408 90.5045 14.7321 91.043 15.757C91.5988 16.7644 91.8775 17.9538 91.8776 19.3259C91.8776 20.6982 91.5988 21.8975 91.043 22.9224C90.4871 23.9296 89.7231 24.7112 88.7506 25.2669C87.7952 25.8227 86.6917 26.1001 85.4411 26.1001C84.2081 26.1 83.1054 25.8226 82.1329 25.2669C81.1602 24.7111 80.395 23.9298 79.8392 22.9224C79.2833 21.8975 79.0059 20.6982 79.0059 19.3259C79.006 17.954 79.2835 16.7643 79.8392 15.757C80.395 14.7321 81.1602 13.9408 82.1329 13.385C83.1054 12.8294 84.2169 12.5519 85.4671 12.5518ZM99.3449 12.5518C100.925 12.5518 102.15 12.9079 103.018 13.6197C103.887 14.3318 104.391 15.3049 104.53 16.538H101.872C101.802 16.0171 101.534 15.6088 101.065 15.3136C100.596 15.0009 100.014 14.8441 99.3189 14.8441C98.6067 14.8442 98.0418 14.9835 97.625 15.2614C97.2084 15.5219 97.0006 15.8694 97.0004 16.3033C97.0004 17.2413 98.0081 17.8148 100.023 18.0233C100.978 18.1275 101.829 18.3105 102.576 18.571C103.323 18.8142 103.914 19.2048 104.348 19.7432C104.782 20.2642 104.999 21.0025 104.999 21.9574C105.016 22.739 104.791 23.4433 104.322 24.0686C103.871 24.6939 103.236 25.189 102.42 25.5538C101.621 25.9185 100.683 26.1001 99.6057 26.1001C97.9035 26.1001 96.5487 25.7008 95.5412 24.9018C94.5339 24.1029 93.9603 23.0439 93.8213 21.724H96.6613C96.7656 22.3315 97.0696 22.8259 97.5728 23.2079C98.0939 23.59 98.7807 23.7817 99.6318 23.7817C100.448 23.7816 101.074 23.6161 101.508 23.2861C101.959 22.9388 102.185 22.5392 102.185 22.0878C102.185 21.428 101.916 20.9761 101.378 20.7329C100.857 20.4898 100.083 20.3082 99.058 20.1866C98.1723 20.0824 97.3647 19.882 96.6353 19.5868C95.9231 19.2741 95.3583 18.8573 94.9414 18.3362C94.5245 17.7978 94.3168 17.1284 94.3168 16.3294C94.3169 15.2006 94.7598 14.2883 95.6456 13.5936C96.5314 12.8991 97.7646 12.5518 99.3449 12.5518ZM49.1762 10.0247H40.2923V15.3397H48.3952V17.7885H40.2923V23.3122H49.1762V25.7885H37.5304V7.54973H49.1762V10.0247ZM68.229 14.792C68.5764 14.1495 69.1328 13.6206 69.8968 13.2038C70.6611 12.7696 71.5208 12.5518 72.4761 12.5518C74.0742 12.5518 75.2909 13.0382 76.1247 14.0109C76.9583 14.9663 77.3752 16.3474 77.3752 18.1537V25.7885H74.6134V18.5449C74.6134 17.4681 74.3519 16.6344 73.8309 16.0439C73.3099 15.4534 72.5894 15.1572 71.669 15.1571C70.7136 15.1571 69.8962 15.4794 69.2187 16.1221C68.5591 16.7648 68.229 17.6945 68.229 18.91V25.7885H65.4672V7.02811H68.229V14.792ZM0.182566 10.2319C7.03399 12.2976 7.05104 22.033 0.181194 24.0356C0.0913484 24.0617 0.000652164 23.9945 0 23.9011V10.3678C1.22534e-06 10.2732 0.0919477 10.2049 0.182566 10.2319ZM85.4671 15.1832C84.8074 15.1833 84.1999 15.3315 83.6442 15.6266C83.0884 15.9218 82.6368 16.3735 82.2894 16.9814C81.9594 17.5893 81.7939 18.3707 81.7939 19.3259C81.7939 20.7502 82.1497 21.8015 82.8618 22.479C83.5912 23.1389 84.4512 23.4686 85.4411 23.4687C86.101 23.4687 86.7096 23.3219 87.2654 23.0267C87.821 22.7315 88.2641 22.2795 88.5941 21.6719C88.9415 21.0465 89.1157 20.2639 89.1157 19.3259C89.1157 18.3707 88.9415 17.5893 88.5941 16.9814C88.2641 16.3735 87.8212 15.9219 87.2654 15.6266C86.7269 15.3313 86.1272 15.1832 85.4671 15.1832Z" fill="white"/>
                  </svg>
                </div>

              {/* Mobile App Mockup */}
              <div className="flex justify-center">
              
                <Image 
                  src="/echos_mockup.png" 
                  alt="Echos App Mobile Mockup" 
                  width={192}
                  height={400}
                  className="w-48 h-auto  shadow-2xl"
                />
              </div>

              {/* Card content - with glass background and left alignment */}
              <div className="mt-auto text-left p-6 rounded-xl" >
                <p className="text-sm text-gray-400 mb-2">AI Text Transcriber</p>
                <h3 className="text-2xl font-semibold mb-4">Echos App</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Instant, accurate transcription for meetings, podcasts, and more.
                </p>
                
                {/* Buttons */}
                <div className="flex space-x-3">
                  <button className="bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Try Echos now
                  </button>
                  <button className="border border-gray-600 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Coming Soon Card */}
            <div className="rounded-3xl p-8 text-white flex flex-col justify-center items-center min-h-[600px] relative overflow-hidden" style={{background: 'linear-gradient(135deg, rgba(24, 30, 37, 0.4) 0%, transparent 70%), linear-gradient(315deg, rgba(24, 30, 37, 0.4) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 60% 30%, rgba(24, 30, 37, 0.3) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 80% 70%, rgba(24, 30, 37, 0.3) 0%, transparent 70%), linear-gradient(290deg, #181E25 0%, #0f1316 40%, #080A0D 100%)'}}>
              {/* Overlay heading on top */}
              <div className="absolute bottom-48 left-10 z-10">
                <h3 className="text-2xl font-semibold text-center text-white">Coming soon</h3>
              </div>
              
              
              {/* Blurred content underneath */}
              <div className="text-center mb-8" >
                <div className="text-4xl mb-6">🚀</div>
                <p className="text-gray-300 mb-4 text-xl max-w-[400px] leading-relaxed">
                  A brand new product is on the way. Stay tuned — it&apos;s worth the wait!
                </p>
              </div>
              
              <div className="w-full mt-24" style={{filter: 'blur(4px)'}}>
                  <p className="text-sm text-gray-400 mb-2">AI Text Transcriber</p>
                
                <p className="text-gray-300 mb-6 leading-relaxed mt-16">
                  Instant, accurate transcription for meetings, podcasts, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future of AI Section */}
      <section className="py-60 px-6" style={{background: 'linear-gradient(135deg, rgba(24, 30, 37, 0.6) 0%, transparent 50%, #090A0B 100%), linear-gradient(315deg, rgba(24, 30, 37, 0.6) 0%, transparent 50%, #090A0B 100%), radial-gradient(ellipse at center, #090A0B 0%, rgba(24, 30, 37, 0.4) 60%, transparent 100%), #090A0B'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Icon and heading */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <hr className="w-12 border-t border-gray-700"/>
                <span className="text-sm text-gray-500 tracking-wider">Our Philosophy</span>
              </div>
              
              {/* 3D Cube Icon */}
              <div className="w-16 h-16">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 4L8 18V46L32 60L56 46V18L32 4Z" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M8 18L32 32L56 18M32 32V60" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              
              <h2 className="text-5xl font-light leading-tight">
                How We See the Future of AI—and What We&apos;re Building Toward
              </h2>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-8">
              <p className="text-xl text-gray-300 leading-relaxed">
                AI shouldn&apos;t feel like magic—it should feel like muscle. At A1 Labs, we create AI agents that work in familiar environments: your calendar, documents, codebase, voice memos.
              </p>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                No special training required. Just fast, reliable support for the work you already do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center space-x-4 mb-8">
              <hr className="w-12 border-t border-gray-700"/>
              <span className="text-sm text-gray-500 tracking-wider">What Drives Us</span>
            </div>
            <h2 className="text-5xl font-light text-white mb-8 max-w-md">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              To build AI-native tools that work naturally in everyday life—powering focus, productivity, and creative flow.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-[#1D1F21] max-w-6xl mx-auto">
            {/* Human-Centered Design */}
            <div className="bg-black p-12 text-white">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Human-Centered Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Tools should feel intuitive, assistive, and helpful.
              </p>
            </div>

            {/* Speed & Simplicity */}
            <div className="bg-black p-12 text-white">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Speed & Simplicity</h3>
              <p className="text-gray-400 leading-relaxed">
                Smart doesn&apos;t have to mean complicated.
              </p>
            </div>

            {/* Privacy by Default */}
            <div className="bg-black p-12 text-white">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Privacy by Default</h3>
              <p className="text-gray-400 leading-relaxed">
                Your data stays yours. Always.
              </p>
            </div>

            {/* Curiosity-Driven */}
            <div className="bg-black p-12 text-white">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Curiosity-Driven</h3>
              <p className="text-gray-400 leading-relaxed">
                We experiment boldly, build fast, and learn constantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-16 max-w-5xl mx-auto" style={{background: 'linear-gradient(135deg, rgba(24, 30, 37, 0.6) 0%, transparent 50%, #090A0B 100%), linear-gradient(315deg, rgba(24, 30, 37, 0.6) 0%, transparent 50%, #090A0B 100%), radial-gradient(ellipse at center, #090A0B 0%, rgba(24, 30, 37, 0.4) 60%, transparent 100%), #090A0B'}}>
            <div className="text-left max-w-4xl">
              <h2 className="text-5xl font-light text-white mb-8">Let&apos;s Talk</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl">
                Want to collaborate, test our tools early, or explore partnerships? We&apos;d love to hear from you.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium text-lg">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6" style={{background: 'radial-gradient(ellipse at bottom left, rgba(31, 41, 55, 0.514)  0%, #000000 70%)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Logo Section */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.1379 6.10501e-07C13.182 1.9378e-05 14.1155 0.65071 14.4771 1.63028L22.7328 24H17.5474L11.8095 8.07802C11.7114 7.80596 11.328 7.80258 11.225 8.07285L5.1602 24H0.174408L8.52912 1.62145C8.89311 0.646461 9.82424 2.4241e-05 10.865 6.10501e-07H12.1379ZM11.8664 7.66528C11.8792 7.67389 11.8918 7.683 11.9041 7.69268C11.8796 7.67334 11.8539 7.65603 11.8271 7.64093L11.8664 7.66528Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M33.8182 6.10501e-07C34.6355 6.10501e-07 35.2981 0.66258 35.2981 1.47991V24H30.2934V5.61039H25.2467V2.91964L30.9037 0.240159C31.2374 0.0821151 31.602 4.54225e-06 31.9712 6.10501e-07C32.3061 -2.95651e-06 32.8698 1.07102e-05 33.8182 6.10501e-07Z" fill="white"/>
                </svg>
                <span className="text-2xl font-light text-white">LAB</span>
              </div>
            </div>
            
            {/* Company Section */}
            <div>
              <h4 className="text-white font-medium mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Echos App</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              </ul>
            </div>
            
            {/* Connect Section */}
            <div>
              <h4 className="text-white font-medium mb-6">Connect</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">X</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Github</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom right - Powered by Jan3 */}
          <div className="mt-16 flex justify-end">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Powered by</span>
              <span className="font-semibold">Jan3</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <MobileNavbar 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
  );
}

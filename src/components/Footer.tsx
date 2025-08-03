import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
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
              <li><Link href="/#hero" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#mission-values" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/echos" className="text-gray-400 hover:text-white transition-colors">Echos App</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-white font-medium mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link href="/#lets-talk" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">X</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Github</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom right - Powered by Jan3 */}
        <div className="mt-16 flex justify-end">
          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>Powered by</span>
            <Image 
              src="/JAN3 Logo.svg" 
              alt="Jan3 Logo" 
              width={48}
              height={20}
              className="h-5 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
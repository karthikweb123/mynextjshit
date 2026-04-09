import Link from 'next/link';
import { ChevronRight, Send } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer 
      id="footer" 
      className="relative bg-neutral-900 text-white text-sm"
      style={{
        backgroundImage: 'url("https://xadelit.com/assets/img/footerbg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="border-t border-[#768fa6] border-b border-[#67839c] py-[60px] bg-black/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            
            {/* 1. Info / QR Code */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-5 leading-none">Get In Touch</h3>
              <div className="mb-4">
                <img 
                  src="https://xadelit.com/assets/img/qrcode.jpg" 
                  className="max-h-[200px] rounded-sm bg-white p-1" 
                  alt="QR Code" 
                />
              </div>
              <div className="flex gap-2 mt-3">
                {/* Updated Icon Array using react-icons */}
                {[
                  { Icon: FaTwitter, href: "#" },
                  { Icon: FaFacebook, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaLinkedin, href: "#" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/30 hover:bg-[#428bca] transition-all duration-300"
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* 2. Company Links */}
            <div className="lg:col-span-2">
              <h4 className="text-base font-semibold mb-3">Company</h4>
              <ul className="space-y-3">
                {["Home", "About us", "Services", "Technologies", "Terms & Policy"].map((item) => (
                  <li key={item} className="flex items-center">
                    <ChevronRight className="text-[#9eccf4] mr-1" size={18} />
                    <Link href="#" className="hover:text-[#9eccf4] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Services */}
            <div className="lg:col-span-3">
              <h4 className="text-base font-semibold mb-3">Our Services</h4>
              <ul className="space-y-3">
                {["IT Solutions", "ERP Solutions", "Applications Development", "Web Development", "Testing"].map((item) => (
                  <li key={item} className="flex items-center">
                    <ChevronRight className="text-[#9eccf4] mr-1" size={18} />
                    <Link href="#" className="hover:text-[#9eccf4] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Contact Form */}
            <div className="lg:col-span-4">
              <h4 className="text-base font-semibold mb-3">Drop Us A Line</h4>
              <form className="mt-7 space-y-4">
                <input type="text" placeholder="Name" className="w-full bg-white/10 border border-white/20 p-2 rounded outline-none focus:border-[#428bca]" required />
                <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 p-2 rounded outline-none focus:border-[#428bca]" required />
                <button type="submit" className="w-full bg-[#428bca] hover:bg-[#5295ce] py-2 rounded flex items-center justify-center gap-2 transition-colors">
                  SEND MESSAGE <Send size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <div className="py-8 text-center border-t border-white/10">
        <p>© Copyright <strong>Xadel.com</strong>. All Rights Reserved</p>
      </div>
    </footer>
  );
}
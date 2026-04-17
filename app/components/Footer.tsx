"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Send, Loader2 } from 'lucide-react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  // 1. Form State
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // 2. Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace the URL with your actual hosted PHP script path
      const response = await fetch('https://sheetalsolutions.in/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' }); // Reset form
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

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
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-white/10 border border-white/20 p-2 rounded outline-none focus:border-[#428bca] transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                  disabled={status === 'loading'}
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/10 border border-white/20 p-2 rounded outline-none focus:border-[#428bca] transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#428bca] hover:bg-[#5295ce] py-2 rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-bold"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="animate-spin" size={16} /> SENDING...</>
                  ) : (
                    <>SEND MESSAGE <Send size={16} /></>
                  )}
                </button>

                {/* Status Feedback */}
                {status === 'success' && (
                  <p className="text-green-400 text-xs animate-pulse">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-xs">Failed to send message. Please try again.</p>
                )}
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
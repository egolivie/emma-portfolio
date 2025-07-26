import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-12 pb-6 px-6 mt-20 rounded-t-3xl">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* CTA */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Let's Build Something Amazing Together</h2>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#portfolio" className="hover:text-white transition">Portfolio</a>
            <a href="#testimonials" className="hover:text-white transition">Testimonials</a>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="mailto:emmaolivier7877@gmail.com" className="hover:text-pink-400 transition">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright & links */}
        <div className="text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Emma Olivier | All rights reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


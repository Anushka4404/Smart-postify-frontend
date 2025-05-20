import React from "react";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#0D2436] text-white">
      <footer className="container mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-[#1565D8] font-bold text-lg">Smart Postify</h3>
          <p className="text-sm mt-4 text-[#959EAD]">
            A smart blogging platform built by SOIT students, integrating AI and clean UI — crafted for curious minds.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#1565D8] font-bold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-[#959EAD] text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* Social + Credits */}
        <div className="space-y-4">
          <h3 className="text-[#1565D8] font-bold text-lg">Connect with Us</h3>
          <div className="flex space-x-4 text-white">
            <a href="/" aria-label="Twitter">
              <AiOutlineTwitter className="w-6 h-6" />
            </a>
            <a href="/" aria-label="YouTube">
              <AiFillYoutube className="w-6 h-6" />
            </a>
            <a href="/" aria-label="Instagram">
              <AiFillInstagram className="w-6 h-6" />
            </a>
            <a href="/" aria-label="Facebook">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-[#959EAD] italic">
            Built with 💙 by Vijaya, Anushka, & Vaibhavee   — AIML, SOIT, RGPV.
          </p>
        </div>
      </footer>

      <div className="text-center py-4 border-t border-[#183B56] text-[#959EAD] text-sm">
        © {new Date().getFullYear()} Smart Postify. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const handleScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className='bg-[#2B3674] text-white py-12 md:py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Northway Pharma</h3>
            <p className='text-gray-300 mb-6'>
              Committed to providing high-quality pharmaceutical products and
              improving global healthcare outcomes through innovation and
              excellence.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-white hover:text-[#4485FD] transition-colors duration-300'>
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-white hover:text-[#4485FD] transition-colors duration-300'>
                <Twitter className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-white hover:text-[#4485FD] transition-colors duration-300'>
                <Instagram className='w-5 h-5' />
              </a>
              <a
                href='#'
                className='text-white hover:text-[#4485FD] transition-colors duration-300'>
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-3'>
              <li>
                <button
                  onClick={() => handleScrollToSection("home")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("about")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("products")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("mission-vision")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Mission & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("contact")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Product Categories</h3>
            <ul className='space-y-3'>
              <li>
                <button
                  onClick={() => handleScrollToSection("products")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Tablets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("products")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Capsules
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("products")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Syrups
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("products")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Injections
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("products")}
                  className='text-gray-300 hover:text-[#4485FD] transition-colors duration-300'>
                  Eye Drops
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact Info</h3>
            <ul className='space-y-3'>
              <li className='text-gray-300'>Kimathi Street, Nairobi, Kenya</li>
              <li className='text-gray-300'>+254 712 345 678</li>
              <li className='text-gray-300'>info@northwaypharma.co.ke</li>
              <li className='text-gray-300'>Mon - Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Northway Pharma. All rights reserved.
            </p>
            <div className='flex space-x-6'>
              <a
                href='#'
                className='text-gray-400 hover:text-[#4485FD] text-sm transition-colors duration-300'>
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-[#4485FD] text-sm transition-colors duration-300'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

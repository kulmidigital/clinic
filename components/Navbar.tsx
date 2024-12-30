"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Mission & Vision", href: "#mission-vision" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    const offset = 80; // Height of navbar plus some padding

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}>
      <div className='container mx-auto px-4'>
        <nav className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2'>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-[#2B3674]" : "text-white"
              }`}>
              Northway Pharma
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors duration-300 hover:text-[#4485FD] ${
                  scrolled ? "text-gray-600" : "text-white"
                }`}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Button - Desktop */}
          <div className='hidden md:flex items-center space-x-4'>
            <a
              href='#contact'
              onClick={(e) => handleNavClick(e, "#contact")}
              className='inline-block'>
              <Button className='px-6 py-2 bg-[#4485FD] text-white rounded-full hover:bg-blue-600 transition-colors duration-300'>
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className={scrolled ? "text-[#2B3674]" : "text-white"}>
                  <Menu className='h-6 w-6' />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className='text-left text-[#2B3674]'>
                    Northway Pharma
                  </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col space-y-4 mt-8'>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className='text-lg text-gray-600 hover:text-[#4485FD] transition-colors duration-300'>
                      {item.name}
                    </a>
                  ))}
                  <a
                    href='#contact'
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className='w-full'>
                    <Button className='w-full bg-[#4485FD] text-white rounded-full hover:bg-blue-600 transition-colors duration-300'>
                      Contact Us
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

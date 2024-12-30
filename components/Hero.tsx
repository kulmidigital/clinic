"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id='home'
      className='relative min-h-[100svh] w-full flex items-center'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/d2.jpg'
          alt='Healthcare Products'
          fill
          className='object-cover'
          priority
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/50'
        />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 z-10'>
        <div className='max-w-2xl mx-auto md:mx-0'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white text-center md:text-left'>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}>
              Quality Healthcare
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className='text-[#4485FD]'>
              Products
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className='text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-xl text-center md:text-left mx-auto md:mx-0'>
            We provide high-quality pharmaceutical products and healthcare
            solutions. Our commitment to excellence ensures that you receive
            only the best medications for your health needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className='bg-[#4485FD] hover:bg-blue-600 rounded-full px-8 text-base md:text-lg w-full sm:w-auto'>
                View Products
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className='backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-full px-8 text-base md:text-lg w-full sm:w-auto hover:bg-white/20 transition-all duration-300'>
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hide on small screens */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className='hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10'>
        <div className='w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2'>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className='w-1 h-3 bg-white rounded-full'
          />
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, HeartPulse } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Products Delivered", value: "1,000+" },
    { label: "Happy Customers", value: "500+" },
  ];

  const features = [
    {
      title: "Quality Assured",
      description:
        "All our products meet the highest quality standards and certifications.",
      icon: <Shield className='w-6 h-6 text-[#4485FD]' />,
      gradient: "from-blue-100 via-white to-rose-100",
    },
    {
      title: "Expert Support",
      description:
        "Our team of healthcare professionals is always ready to assist you.",
      icon: <HeartPulse className='w-6 h-6 text-[#4485FD]' />,
      gradient: "from-rose-100 via-white to-blue-100",
    },
  ];

  return (
    <section id='about' className='py-16 md:py-20 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-16'>
          {/* Image Side */}
          <motion.div
            className='flex-1 relative w-full max-w-xl lg:max-w-none mx-auto'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <div className='relative w-full aspect-square rounded-2xl overflow-hidden'>
              <motion.div
                className='absolute inset-0 bg-[#4485FD]/10 z-10 rounded-2xl'
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Image
                src='/images/d3.jpg'
                alt='About Northway Pharma'
                fill
                className='object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              className='absolute -right-4 md:-right-8 bottom-4 md:bottom-8 bg-white p-6 rounded-2xl shadow-xl max-w-[calc(100%-2rem)] md:max-w-xs z-20'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <h4 className='text-lg font-semibold text-[#2B3674] mb-4'>
                Our Impact
              </h4>
              <div className='space-y-4'>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
                    <p className='text-sm text-gray-600'>{stat.label}</p>
                    <p className='text-2xl font-bold text-[#4485FD]'>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className='flex-1'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <motion.h2
              className='text-3xl md:text-4xl font-bold text-[#2B3674] mb-6 text-center lg:text-left'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              Committed to Your
              <span className='text-[#4485FD]'> Health & Wellness</span>
            </motion.h2>
            <motion.p
              className='text-gray-600 mb-8 text-center lg:text-left'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              At Northway Pharma, we believe in providing more than just
              medications. Our commitment extends to ensuring your complete
              health and wellness journey is supported with quality products and
              expert guidance.
            </motion.p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} border border-blue-100/20 hover:shadow-lg transition-all duration-500 overflow-hidden`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
                  {/* Decorative Circles */}
                  <motion.div
                    className='absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#4485FD]/5 to-transparent -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500'
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  />
                  <motion.div
                    className='absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-[#4485FD]/5 to-transparent -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500'
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  />

                  <div className='relative z-10'>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow group-hover:bg-white transition-all duration-300'>
                        {feature.icon}
                      </div>
                      <h3 className='text-xl font-semibold text-[#2B3674] group-hover:text-[#4485FD] transition-colors duration-300'>
                        {feature.title}
                      </h3>
                    </div>
                    <p className='text-gray-600 group-hover:text-gray-700 transition-colors duration-300 ml-[3.25rem]'>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='text-center lg:text-left'>
              <Button
                className='bg-[#4485FD] hover:bg-blue-600 text-white rounded-full group'
                size='lg'
                onClick={() => {
                  document.getElementById("mission-vision")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}>
                Learn More About Us
                <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

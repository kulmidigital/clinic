"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className='w-6 h-6 text-[#4485FD]' />,
      title: "Phone",
      details: ["+254 712 345 678"],
    },
    {
      icon: <Mail className='w-6 h-6 text-[#4485FD]' />,
      title: "Email",
      details: ["info@northwaypharma.co.ke", "support@northwaypharma.co.ke"],
    },
    {
      icon: <MapPin className='w-6 h-6 text-[#4485FD]' />,
      title: "Address",
      details: ["Kimathi Street", "Nairobi, Kenya"],
    },
    {
      icon: <Clock className='w-6 h-6 text-[#4485FD]' />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
      ],
    },
  ];

  return (
    <section id='contact' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#2B3674] mb-4'>
            Contact <span className='text-[#4485FD]'>Us</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Have questions about our products or services? We're here to help.
            Reach out to us through any of the following channels.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white rounded-2xl p-8 shadow-sm'>
            <h3 className='text-2xl font-bold text-[#2B3674] mb-6'>
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4485FD] focus:border-transparent transition-all duration-200'
                  placeholder='John Doe'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4485FD] focus:border-transparent transition-all duration-200'
                  placeholder='john@example.com'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4485FD] focus:border-transparent transition-all duration-200'
                  placeholder='+254 712 345 678'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  Your Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4485FD] focus:border-transparent transition-all duration-200'
                  placeholder='How can we help you?'
                  required
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-[#4485FD] hover:bg-blue-600 text-white py-3 rounded-xl transition-colors duration-200'>
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4'>
                <div className='p-3 bg-blue-50 rounded-xl'>{info.icon}</div>
                <div>
                  <h4 className='text-xl font-semibold text-[#2B3674] mb-2'>
                    {info.title}
                  </h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className='text-gray-600'>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

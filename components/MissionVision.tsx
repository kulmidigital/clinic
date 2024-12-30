"use client";

import { Rocket, Eye, Target, Heart, Check } from "lucide-react";

export default function MissionVision() {
  const features = [
    {
      icon: <Rocket className='w-10 h-10 text-[#4485FD]' />,
      title: "Our Mission",
      description:
        "To provide high-quality, innovative pharmaceutical solutions that improve the health and well-being of people worldwide, while maintaining the highest standards of safety and efficacy.",
      points: [
        "Deliver exceptional pharmaceutical products",
        "Ensure accessibility and affordability",
        "Maintain highest quality standards",
        "Foster innovation in healthcare",
      ],
      gradient: "from-sky-100 via-blue-50 to-indigo-100",
    },
    {
      icon: <Eye className='w-10 h-10 text-[#4485FD]' />,
      title: "Our Vision",
      description:
        "To be a leading global pharmaceutical company recognized for our commitment to innovation, quality, and improving global healthcare outcomes.",
      points: [
        "Global healthcare leadership",
        "Continuous innovation",
        "Sustainable development",
        "Patient-centered approach",
      ],
      gradient: "from-violet-100 via-purple-50 to-fuchsia-100",
    },
    {
      icon: <Target className='w-10 h-10 text-[#4485FD]' />,
      title: "Our Goals",
      description:
        "To achieve excellence in pharmaceutical manufacturing while expanding our global reach and maintaining our commitment to quality and innovation.",
      points: [
        "Expand global presence",
        "Enhance research capabilities",
        "Strengthen quality systems",
        "Develop strategic partnerships",
      ],
      gradient: "from-rose-100 via-pink-50 to-red-100",
    },
    {
      icon: <Heart className='w-10 h-10 text-[#4485FD]' />,
      title: "Our Values",
      description:
        "We are guided by our commitment to integrity, excellence, and compassion in everything we do, putting patients first in all our decisions.",
      points: [
        "Integrity and transparency",
        "Excellence in quality",
        "Patient-first approach",
        "Sustainable practices",
      ],
      gradient: "from-emerald-100 via-green-50 to-teal-100",
    },
  ];

  return (
    <section id='mission-vision' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#2B3674] mb-4'>
            Mission & <span className='text-[#4485FD]'>Vision</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Committed to excellence in pharmaceutical innovation and healthcare
            advancement, guided by our core values and vision for a healthier
            future.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br ${feature.gradient}`}>
              {/* Card Background Pattern */}
              <div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl' />

              {/* Decorative Circles */}
              <div className='absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4485FD]/20 via-[#4485FD]/10 to-transparent rounded-full -mr-20 -mt-20 transform group-hover:scale-150 transition-transform duration-500 blur-sm' />
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#4485FD]/20 via-[#4485FD]/10 to-transparent rounded-full -ml-16 -mb-16 transform group-hover:scale-150 transition-transform duration-500 blur-sm' />

              {/* Icon Container */}
              <div className='relative'>
                <div className='flex items-center gap-6 mb-6'>
                  <div className='relative group-hover:scale-110 transition-all duration-500'>
                    <div className='absolute inset-0 bg-gradient-to-br from-[#4485FD]/20 to-white/20 blur-xl rounded-full' />
                    <div className='relative p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/30 shadow-sm'>
                      {feature.icon}
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <h3 className='text-2xl font-bold text-[#2B3674] group-hover:text-[#4485FD] transition-colors duration-300'>
                      {feature.title}
                    </h3>
                    <div className='h-0.5 w-12 bg-[#4485FD]/20 group-hover:w-full transition-all duration-500 mt-2' />
                  </div>
                </div>

                <p className='text-gray-600 mb-8 leading-relaxed'>
                  {feature.description}
                </p>

                <ul className='space-y-4'>
                  {feature.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className='flex items-start gap-3 group/item'>
                      <div className='p-1 rounded-full bg-white mt-1 group-hover/item:bg-[#4485FD]/10 transition-colors duration-300'>
                        <Check className='w-4 h-4 text-[#4485FD]' />
                      </div>
                      <span className='text-gray-700 group-hover/item:text-[#2B3674] transition-colors duration-300'>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

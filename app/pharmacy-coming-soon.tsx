"use client";

import { useState, useEffect } from "react";
import {
  Pill,
  Stethoscope,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function PharmacyComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const targetDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      0,
      0,
      0
    );
    const difference = +targetDate - +now;

    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-green-100 to-blue-100 text-gray-800 font-['Quicksand',sans-serif]">
      <header className='p-5 text-center'>
        <h1 className='text-4xl font-bold text-green-700 flex items-center justify-center'>
          <Pill className='mr-2 animate-pulse' />
          Northway Pharma
        </h1>
      </header>

      <main className='flex-grow flex flex-col items-center justify-center p-5 text-center'>
        <div className='bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-lg max-w-2xl w-full'>
          <Stethoscope className='w-24 h-24 text-green-600 mb-8 mx-auto animate-bounce' />
          <h2 className='text-5xl font-bold mb-4 text-green-800'>
            Coming Soon
          </h2>
          <p className='text-xl mb-8 text-gray-600'>
            Get ready for a better pharmacy experience.
          </p>

          <div className='flex flex-wrap gap-4 mb-8 justify-center'>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className='flex flex-col items-center bg-green-100 rounded-lg p-3 w-24'>
                <span className='text-4xl font-bold text-green-700'>
                  {value}
                </span>
                <span className='text-sm uppercase text-green-600'>{unit}</span>
              </div>
            ))}
          </div>

          <div className='w-full max-w-md mx-auto'>
            <h3 className='text-xl font-semibold mb-4 text-green-700'>
              Be the first to know when we launch:
            </h3>
            <form className='flex flex-col sm:flex-row gap-2'>
              <Input
                type='email'
                placeholder='Enter your email'
                className='flex-grow bg-white/50 placeholder-gray-500 text-gray-800 border-green-300 focus:border-green-500 focus:ring-green-500'
              />
              <Button
                type='submit'
                className='bg-green-600 hover:bg-green-700 text-white'>
                <Mail className='mr-2 h-4 w-4' /> Subscribe
              </Button>
            </form>
          </div>
        </div>
      </main>

      <footer className='p-5 text-center'>
        <div className='flex justify-center space-x-4 mb-4'>
          <a
            href='#'
            className='text-green-600 hover:text-green-800 transition-colors'
            aria-label='Facebook'>
            <Facebook className='w-6 h-6' />
          </a>
          <a
            href='#'
            className='text-green-600 hover:text-green-800 transition-colors'
            aria-label='Twitter'>
            <Twitter className='w-6 h-6' />
          </a>
          <a
            href='#'
            className='text-green-600 hover:text-green-800 transition-colors'
            aria-label='Instagram'>
            <Instagram className='w-6 h-6' />
          </a>
        </div>
        <p className='text-sm text-gray-600'>
          © 2024 Northway Pharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

import React from 'react';
import HeroImage from '@/public/assets/hero.jpg';
import BGImage from '@/public/assets/bg2.png';
import Image from 'next/image';

export default function HeroMain() {
  return (
    <section className="relative bg-white bg-background w-full py-16 z-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={BGImage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-color-burn dark:mix-blend-color-burn pointer-events-none z-0 dark:opacity-20"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <div className="w-full lg:w-2/3 py-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Self Service Kiosks help your business grow and thrive in the digital age
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
            Learn how Wavetec’s self-service kiosks for cheque depositing, SIM dispensing & account
            opening can enable you and your customers to carry flexible and convenient transactions
            24/7.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-white cursor-pointer  dark:bg-gray-100 text-gray-900 dark:text-black border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-200 transition">
              Showcase
            </button>
            <button className="btn-primary-color cursor-pointer text-white px-6 py-3 rounded-lg font-medium ">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Hero Image */}
      <div className="max-w-7xl mx-auto px-4 mt-10 relative z-20">
        <Image
          src={HeroImage}
          alt="Hero section illustration"
          className="w-full max-h-[400px] rounded-xl object-cover shadow-md"
        />
      </div>
    </section>
  );
}

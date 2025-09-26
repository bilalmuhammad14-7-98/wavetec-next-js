'use client';

import React from 'react';
import Image from 'next/image';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { IoMdArrowForward } from 'react-icons/io';

import HeroImage from '@/public/assets/kiosk.png';
import BGImage from '@/public/assets/background.png';
import ButtonOne from '../shared/Buttons/ButtonOne';
import ButtonTwo from '../shared/Buttons/ButtonTwo';

export default function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-background">
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={BGImage}
          alt="background"
          fill
          className="object-cover mix-blend-color-burn dark:mix-blend-color-burn dark:opacity-20"
          priority
        />
      </div>

      {/* Content on rails */}
      <div className="relative z-10 py-12 lg:py-20">
        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-10">
          {/* Left content */}
          <div className="col-span-12 min-w-0 lg:col-span-6 text-center lg:text-left">
            {/* What's New Badge */}
            <div className="mb-2 inline-flex items-center space-x-3 rounded-lg border border-gray-200 px-4 py-2 text-sm  shadow-sm dark:border-gray-700 text-subtle-ink">
              <span className="flex items-center space-x-1">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-medium">What's new?</span>
              </span>
              <span className="flex items-center space-x-1 text-subtle-ink">
                <span>Patient Checkout Manager</span>
                <span className="text-subtle-ink">
                  <IoMdArrowForward className="h-4 w-4" />
                </span>
              </span>
            </div>

            <h1 className="mb-2 text-3xl font-bold leading-tight bg-card sm:text-4xl xl:text-6xl">
              Smarter Healthcare <br className="hidden lg:inline-block" />
              Management
            </h1>

            <h3 className="mb-4 font-bold text-muted-foreground text-sm sm:text-base lg:text-lg xl:text-2xl">
              Innovative, compliant, and scalable patient <br /> experience solutions
            </h3>

            <p className="mb-4 text-lg font-normal leading-relaxed text-muted-foreground md:text-xl">
              Wavetec helps healthcare providers deliver seamless, patient-focused care. Our
              HIPAA-compliant, ISO-certified solutions combine digital queuing, self-service kiosks,
              and real-time flow management to reduce wait times and enhance satisfaction, at any
              scale.
            </p>

            {/* Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-start">
              <ButtonOne
                title={'Demo'}
                icon={<IoPlayCircleOutline className="mr-2 h-5 w-5 text-[#A4A7AE]" />}
                className="flex items-center justify-center"
              />
              <ButtonTwo title={'Sign up'} />
            </div>
          </div>

          {/* Right image */}
          <div className="col-span-12 mb-10 lg:col-span-6 lg:mb-0 lg:justify-self-end">
            <Image src={HeroImage} alt="Hero" className="w-full rounded-lg shadow-lg" priority />
          </div>
        </div>
      </div>
    </section>
  );
}

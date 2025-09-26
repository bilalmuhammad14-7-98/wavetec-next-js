'use client';
import React from 'react';
import Image from 'next/image';

// Existing mockups (right column)
import TabletMockup from '@/public/assets/telco-full.png';
import PhoneMockup from '@/public/assets/telco-mobile.png';

// ▶︎ New: video/banner poster image (will replace with real video later)
import VideoPoster from '@/public/assets/telco-video-banner.png';

export default function SelfService() {
  return (
    <section className="bg-white dark:bg-[#0C0E12] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROW 1 — Heading & lead */}
        <div className="max-w-3xl">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] leading-tight font-bold text-gray-900 dark:text-white">
            What is a Self-Service Kiosk?
          </h2>
          <p className="mt-3 text-[15px] md:text-base text-gray-600 dark:text-gray-300">
            Self-service kiosks have emerged as game-changers, redefining the way customers interact
            with businesses.
          </p>
        </div>

        {/* ROW 2 — 12-col grid: left list, right mockups */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT — 7 cols on desktop */}
          <div className="lg:col-span-7 space-y-8">
            {/* Card with left blue rule */}
            <div className="rounded-md bg-gray-50 dark:bg-gray-800 p-4 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
              <div className="pl-4 border-l-4 border-blue-600">
                <h3 className="text-[15px] md:text-[16px] font-semibold text-gray-900 dark:text-white">
                  Self Service Kiosk for Banking &amp; Cash Management
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus ut
                  urna vehicula malesuada ut a ligula.
                </p>
                <a
                  href="#"
                  className="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400"
                >
                  Learn more →
                </a>
              </div>
            </div>

            {/* Remaining two items */}
            {['Self Service Kiosk for Telecom', 'Smart Integration With ViaOS'].map((title) => (
              <div key={title} className="max-w-none">
                <h3 className="text-[15px] md:text-[16px] font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus ut
                  urna vehicula malesuada ut a ligula.
                </p>
                <a
                  href="#"
                  className="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>

          {/* RIGHT — 5 cols on desktop (mockup stage) */}
          <div className="lg:col-span-5 relative min-h-[320px] md:min-h-[380px] lg:min-h-[460px] flex justify-center lg:justify-end">
            {/* Tablet — desktop only */}
            <div className="hidden lg:block w-[92%] rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-xl self-start">
              <Image
                src={TabletMockup}
                alt="Tablet mockup"
                className="block w-full h-auto"
                priority
              />
            </div>

            {/* Phone — always visible; overlaps on desktop */}
            <div
              className="
                w-[70%] sm:w-[56%]
                rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-2xl
                lg:w-[42%] lg:absolute lg:left-[-5%] lg:top-[22%] lg:z-10
              "
            >
              <Image src={PhoneMockup} alt="Phone mockup" className="block w-full h-auto" />
            </div>
          </div>
        </div>

        {/* ROW 3 — Video section (centered, max 960x540 like Figma) */}
        <div className="mt-12 sm:mt-14">
          <div className="mx-auto w-full max-w-[960px]">
            <div className="relative overflow-hidden rounded-[24px] border border-gray-100 dark:border-gray-800 shadow-sm">
              {/* Keep a strict 16:9 aspect; scales down on smaller screens, capped at 960px width */}
              <div className="relative aspect-[16/9]">
                <Image
                  src={VideoPoster}
                  alt="Self-service kiosk video"
                  fill
                  sizes="(min-width:1024px) 960px, 100vw"
                  className="object-cover"
                />

                {/* Play button (no onClick while it's a Server Component) */}
                <button
                  type="button"
                  aria-label="Play video"
                  className="
            absolute inset-0 m-auto h-14 w-14 sm:h-16 sm:w-16
            rounded-full bg-black/60 backdrop-blur
            flex items-center justify-center
            transition hover:scale-105 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60
          "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7 text-white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Faux progress bar hint (optional) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
                  <div className="mx-auto h-1.5 w-2/3 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

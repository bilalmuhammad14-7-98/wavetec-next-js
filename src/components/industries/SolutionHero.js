import React from 'react';
import HeroImage from '@/public/assets/ai-power.png';
import BGImage from '@/public/assets/bg3.png';
import Image from 'next/image';
import Container from '../shared/Container/Container';

export default function SolutionHero({ value }) {
  function splitByLineBreaks(str) {
    return str.split(/\n+/).filter(Boolean);
  }

  const data = splitByLineBreaks(value?.text).map((item) => item.replace(/&nbsp;/g, '').trim());
  console.log('Solution Hero Value:', data);
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
      {/* <div className="relative z-20 max-w-7xl mx-auto px-4">
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
      </div> */}
      <Container>
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full  ">
          {/* Left Content */}
          <div className="z-99">
            <h1 className="text-2xl sm:text-4xl md:text-6xl  font-semibold leading-tight mb-6 dark:text-white">
              {data?.[0] || 'AI-Powered Customer Journeys for Modern Banking'}
            </h1>
            <p className="text-[#535862] text-md  md:text-xl dark:text-gray-400 mb-8 max-w-lg ">
              {data?.[1] ||
                'Leverage artificial intelligence to transform banking experiences. Automate service, predict customer needs, and deliver seamless interactions across every branch and digital channel.'}
            </p>

            <button className="mt-4 sm:mt-0 text-white text-sm font-medium px-4 py-3 rounded-md btn-primary-color cursor-pointer">
              {value?.buttons?.[0]?.text || 'Book a Demos'}
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center z-99">
            <Image
              src={value?.images?.[0]}
              alt="AI Banking"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </section>
      </Container>
    </section>
  );
}

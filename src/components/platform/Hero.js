'use client';

import Image from 'next/image';
import { IoPlayCircleOutline } from 'react-icons/io5';

import HeroImage from '@/public/assets/laptop.png';
import BGImage from '@/public/assets/background.png';
import Icon1 from '@/public/assets/icon1.png';
import Icon2 from '@/public/assets/icon2.png';
import Icon3 from '@/public/assets/icon3.png';
import Icon4 from '@/public/assets/icon4.png';
import Icon5 from '@/public/assets/icon5.png';
import Icon6 from '@/public/assets/icon6.png';
import Container from '../shared/Container/Container';
import ButtonOne from '../shared/Buttons/ButtonOne';
import ButtonTwo from '../shared/Buttons/ButtonTwo';

export default function Hero() {
  const data = [
    { name: 'OdeaoLabs', logo: Icon1 },
    { name: 'Kintsugi', logo: Icon2 },
    { name: 'Stacked Lab', logo: Icon3 },
    { name: 'Magnolia', logo: Icon4 },
    { name: 'Warpspeed', logo: Icon5 },
    { name: 'Sisyphus', logo: Icon6 },
  ];

  return (
    <section className="w-full relative z-10 h-auto flex items-center justify-center dark:bg-[#0C0E12] overflow-hidden py-12 lg:py-20">
      {/* Background image */}
      <Image
        src={BGImage}
        alt="Background"
        fill
        priority
        className="object-cover mix-blend-color-burn dark:mix-blend-color-burn pointer-events-none z-0"
      />
      <Container>
        <div className="relative z-10 flex flex-col items-center md:flex-row gap-8 justify-between">
          {/* Left content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-[#181D27] dark:text-[#F7F7F7] mb-8 leading-tight">
              Beautiful analytics <br className="hidden lg:inline-block" />
              to grow smarter
            </h1>

            <p className="text-lg md:text-xl font-normal text-[#535862] dark:text-[#94979C] mb-6 leading-relaxed">
              Powerful, self-serve product and growth analytics to help you convert, engage, and
              retain more.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 mb-12">
              <ButtonOne
                title={'Demo'}
                icon={<IoPlayCircleOutline className="mr-2 h-5 w-5 text-[#A4A7AE]" />}
                className="flex items-center justify-center"
              />
              <ButtonTwo title={'Sign up'} />
            </div>

            <div className="!mt-8">
              <p className="text-[#535862] text-base font-medium mb-4">
                Trusted by 4,000+ companies
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {data.map((company, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                    <span className="w-[140px] text-sm md:text-base lg:text-lg xl:text-2xl text-[#0A0D12] dark:text-white font-semibold">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image src={HeroImage} alt="Hero" className="w-full rounded-lg" priority />
          </div>
        </div>
      </Container>
    </section>
  );
}

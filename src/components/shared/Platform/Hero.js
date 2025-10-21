'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { IoPlayCircleOutline } from 'react-icons/io5';

import Container from '../Container/Container';
import ButtonOne from '../Buttons/ButtonOne';
import ButtonTwo from '../Buttons/ButtonTwo';
import HeroImage from '@/public/assets/laptop.png';

export default function Hero({ value }) {
  // Split and sanitize text safely
  const splitByLineBreaks = (str = '') =>
    str
      .split(/\n+/)
      .filter(Boolean)
      .map((line) => line.replace(/&nbsp;/g, '').trim());

  const data = useMemo(() => splitByLineBreaks(value?.text), [value]);

  return (
    <section className="relative w-full z-10 flex items-center justify-center overflow-hidden py-12 lg:py-20 bg-white dark:bg-[#0C0E12]">
      {/* Background Image (optional) */}
      {/* {value?.bgImage && (
        <Image
          src={value.bgImage}
          alt="Background"
          fill
          priority
          className="object-cover mix-blend-color-burn dark:mix-blend-color-burn pointer-events-none z-0"
        />
      )} */}

      <Container>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Title */}
            {data?.[0] && (
              <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-[#181D27] dark:text-[#F7F7F7] mb-6 leading-tight">
                {data[0]}
              </h1>
            )}

            {/* Subtitle / Description */}
            {data?.[1] && (
              <p className="text-lg md:text-xl text-[#535862] dark:text-[#94979C] mb-8 leading-relaxed">
                {data[1]}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 mb-12">
              {value?.buttons?.[0]?.text && (
                <ButtonOne
                  title={value.buttons[0].text}
                  icon={<IoPlayCircleOutline className="mr-2 h-5 w-5 text-[#A4A7AE]" />}
                  className="flex items-center justify-center"
                />
              )}
              {value?.buttons?.[1]?.text && <ButtonTwo title={value.buttons[1].text} />}
            </div>

            {/* Trusted Section */}
            {(data?.[2] || value?.images?.[0]) && (
              <div className="!mt-8">
                {data?.[2] && (
                  <p className="text-[#535862] text-base font-medium mb-4">{data[2]}</p>
                )}

                {value?.images?.[0] && (
                  <div className="mt-6">
                    <Image
                      src={value.images[0]}
                      alt="Trusted Logos"
                      width={100}
                      height={100}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={value?.images?.[1] || HeroImage}
              alt={value?.altText || 'Hero Image'}
              width={500}
              height={400}
              className="w-full h-auto max-w-lg rounded-lg object-contain"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

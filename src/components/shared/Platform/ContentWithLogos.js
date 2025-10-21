'use client';

import Image from 'next/image';
import { IoPlayCircleOutline } from 'react-icons/io5';
import ButtonOne from '../Buttons/ButtonOne';
import ButtonTwo from '../Buttons/ButtonTwo';

export default function ContentWithLogos({ value }) {
  return (
    <section className="py-20 bg-white dark:bg-[#0C0E12]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4">
        {/* ✅ Left Content */}
        <div className="max-w-xl w-full">
          {/* Tag */}
          {value?.buttons?.[0]?.text && (
            <span className="inline-block text-sm font-medium text-[#004EEB] bg-[#EFF8FF] border border-[#B2DDFF] px-3 py-1 rounded-full mb-2">
              {value?.buttons?.[0]?.text}
            </span>
          )}

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-[#181D27] dark:text-[#F7F7F7] leading-tight">
            {value?.heading}
          </h2>

          {/* Description */}
          <p className="text-[#535862] text-xl dark:text-[#94979C] mt-4 leading-relaxed">
            {value?.text}
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12">
            {value?.buttons?.[1]?.text && (
              <ButtonOne
                title={value?.buttons?.[1]?.text}
                icon={<IoPlayCircleOutline className="mr-2 h-5 w-5 text-[#A4A7AE]" />}
                className="flex items-center justify-center"
              />
            )}
            {value?.buttons?.[2]?.text && <ButtonTwo title={value?.buttons?.[2]?.text} />}
          </div>
        </div>

        {/* ✅ Optimized Image (Fixed CLS) */}
        <div className="w-full max-w-lg flex justify-center">
          <div className="relative w-full" style={{ aspectRatio: '3 / 2' }}>
            <Image
              src={value?.images?.[0] || '/assets/default-placeholder.png'}
              alt="Logos"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

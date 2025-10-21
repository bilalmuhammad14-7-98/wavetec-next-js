'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

export default function CaseStudies({ value }) {
  console.log('Case Studies Value:', value);

  return (
    <section className="py-16 bg-[#FAFAFA] dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              {value?.blocks?.[0]?.text?.replace(/&amp;/g, '&')}
            </h2>
            <p className="text-[#535862] text-lg font-normal mt-2 max-w-xl dark:text-white">
              {value?.blocks?.[1]?.text}
            </p>
          </div>
          <button className="w-full md:w-auto my-4 sm:mt-0 text-white text-sm font-medium px-4 py-2 rounded-md btn-primary-color cursor-pointer">
            {value?.buttons?.[0]?.text}
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          spaceBetween={24}
          slidesPerView={3}
          loop={false}
          className="pb-10"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className=" rounded-xl  transition">
              <div className="w-[384px] h-[256px] bg-[#F5F5F5] mb-4 rounded-xl">
                <Image src={value?.images?.[0]} alt="Case Study" width={384} height={256} />
              </div>
              <p className="text-sm text-blue-600 font-medium mb-2">{value?.blocks?.[2]?.text}</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {value?.blocks?.[3]?.text}
              </h3>
              <p className="text-sm text-gray-600 mt-2 dark:text-white">
                {value?.blocks?.[4]?.text}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-xl  transition">
              <div className="w-[384px] h-[256px] bg-[#F5F5F5] mb-4 rounded-xl">
                <Image src={value?.images?.[1]} alt="Case Study" width={384} height={256} />
              </div>
              <p className="text-sm text-blue-600 font-medium mb-2">{value?.blocks?.[5]?.text}</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {value?.blocks?.[6]?.text}
              </h3>
              <p className="text-sm text-gray-600 mt-2 dark:text-white">
                {value?.blocks?.[7]?.text}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-xl  transition">
              <div className="w-[384px] h-[256px] bg-[#F5F5F5] mb-4 rounded-xl">
                <Image src={value?.images?.[2]} alt="Case Study" width={384} height={256} />
              </div>
              <p className="text-sm text-blue-600 font-medium mb-2">{value?.blocks?.[8]?.text}</p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {value?.blocks?.[9]?.text}
              </h3>
              <p className="text-sm text-gray-600 mt-2 dark:text-white">
                {value?.blocks?.[10]?.text}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-start gap-3 mt-4">
          <button className="prev-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            <span className="text-gray-700 text-xl">←</span>
          </button>
          <button className="next-btn w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
            <span className="text-gray-700 text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

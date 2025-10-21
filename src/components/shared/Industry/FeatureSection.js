'use client';

import { IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Dummy from '@/public/assets/dummy.png';

export default function FeatureSection({ value, value2 }) {
  function splitByLineBreaks(str) {
    return str?.split(/\n+/).filter(Boolean);
  }
  const data = splitByLineBreaks(value?.text);
  const data2 = splitByLineBreaks(value2?.text);
  console.log('Feature Section Value:', value);
  console.log('Feature Section Value2:', data2);
  return (
    <section className="dark:bg-[#0C0E12] py-14">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto lg:m-0">
        <div className="text-[#181D27] text-3xl font-semibold mb-3 dark:text-[#CECFD2]">
          {data?.[0] || value?.heading}
        </div>
        <h1 className="text-[#181D27] dark:text-[#F7F7F7] text-3xl md:text-lg mb-3">
          {data?.[1] || value?.title}
        </h1>
        <p className="text-[#535862] max-w-2xl dark:text-[#94979C] text-base md:text-lg">
          {data?.[2] || value?.description}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* {value?.stats?.map((stat, ind) => (
            <div
              key={ind}
              className={`border-l-4 ${ind == 0 ? 'border-[#004EEB]' : 'border-[#F5F5F5]'}   pl-4 space-y-2`}
            >
              <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
                {stat?.title}
              </h2>
              <p className="text-[#535862] text-base dark:text-[#94979C]">{stat?.description}</p>
              <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
                {stat?.button?.label} <IoMdArrowForward className="ml-2" />
              </div>
            </div>
          ))} */}
          {/* Card 1 */}
          <div className="border-l-4 border-[#004EEB] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              {data2?.[0]}
            </h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">{data2?.[1]}</p>
            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              {data2?.[2]}
            </h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">{data2?.[3]}</p>

            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              {data2?.[4]}
            </h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">{data2?.[5]}</p>

            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              {data2?.[6]}
            </h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">{data2?.[7]}</p>

            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 5 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              {data2?.[8]}
            </h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">{data2?.[9]}</p>

            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={value2?.images?.[0] || value?.image}
            alt="Customer Flow"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

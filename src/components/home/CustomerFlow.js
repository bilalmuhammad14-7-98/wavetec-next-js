'use client';

import { IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Dummy from '@/public/assets/dummy.png';

export default function CustomerFlow() {
  return (
    <section className="dark:bg-[#0C0E12] py-14">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto lg:m-0">
        <div className="text-[#004EEB] text-lg font-semibold mb-1 dark:text-[#CECFD2]">
          Features
        </div>
        <h1 className="text-[#181D27] dark:text-[#F7F7F7] text-3xl md:text-4xl font-semibold mb-3">
          Customer Flow Management Solutions
        </h1>
        <p className="text-[#535862] max-w-2xl dark:text-[#94979C] text-base md:text-lg">
          To meet current client expectations, banks and financial institutions are investing in
          digital capabilities. Retail banking is now increasingly focused on the acquisition of new
          customers through physical branches.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Card 1 */}
          <div className="border-l-4 border-[#004EEB] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              Pre-Arrival
            </h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">
              A customer decides to visit your bank branch and schedules an online appointment via
              your website or application. They select the branch, the time and the services
              required. They receive regular notifications updating them about the appointment.
            </p>
            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              Arrival & Check In
            </h2>
            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              Waiting & After Being Served
            </h2>
            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={Dummy}
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

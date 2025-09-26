'use client';

import Image from 'next/image';
import { IoMdArrowForward } from 'react-icons/io';
import Dummy from '@/public/assets/dummy.png';

export default function CustomerFlow() {
  return (
    <div className="dark:bg-[#0C0E12] py-14">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto lg:m-0">
        <div className="text-[#004EEB] text-lg font-semibold mb-1 dark:text-[#CECFD2]">
          Features
        </div>
        <h1 className="text-[#181D27] dark:text-[#F7F7F7] text-3xl md:text-4xl font-semibold mb-3">
          Create seamless, intuitive customer journeys that transcend across channels
        </h1>
        <p className="text-[#535862] max-w-3xl dark:text-[#94979C] text-base md:text-lg">
          An enterprise queuing system software that integrates with all peripheral devices to
          minimize customers efforts across all channels and touchpoints, ensuring a seamless
          experience every time a customer visits your branch.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Card 1 */}
          <div className="border-l-4 border-[#004EEB] pl-4 space-y-3">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">Overview</h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same
              page and in the loop.
            </p>
            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-3">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">Features</h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">
              An all-in-one customer service platform that helps you balance everything your
              customers need to be happy.
            </p>
            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-3">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">Reporting</h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">
              Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and
              drilldown on the data in a couple clicks.
            </p>
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
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

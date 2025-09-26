'use client';

import { IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Dummy from '@/public/assets/dummy1.png';

export default function HealthCustomerFlow() {
  return (
    <section className="dark:bg-[#0C0E12] py-14">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto lg:m-0">
        <div className="text-[#004EEB] text-lg font-semibold mb-1 dark:text-[#CECFD2]">
          Customer Flow
        </div>
        <h1 className="text-[#181D27] dark:text-[#F7F7F7] text-3xl md:text-4xl font-semibold mb-3">
          Healthcare Customer Journey at a Glance
        </h1>
        <p className="text-[#535862] max-w-2xl dark:text-[#94979C] text-base md:text-lg">
          From pre-arrival to being served, Wavetec’s tailored healthcare solutions create smooth,
          transparent, and safe experiences for patients - reducing wait times, improving
          satisfaction, and optimizing staff efficiency.
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
              Patients can complete pre-registration and check-in remotely; via web, mobile, or
              WhatsApp, receiving real-time updates or appointment confirmations. This proactive
              engagement saves time and improves flow before patients even arrive.
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
            <p className="text-[#535862] text-base dark:text-[#94979C]">
              Upon arrival, patients use self-service kiosks or WhatsApp-enabled virtual queuing
              systems. Patients check in at kiosks and receive SMS alerts of their estimated wait
              and service point, creating a seamless and digital-first check-in experience.
            </p>
            <div className="text-[#004EEB] dark:text-[#CECFD2] flex items-center font-semibold cursor-pointer">
              Learn More <IoMdArrowForward className="ml-2" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-l-4 border-[#F5F5F5] pl-4 space-y-1">
            <h2 className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              Waiting & After Being Served
            </h2>
            <p className="text-[#535862] text-base dark:text-[#94979C]">
              Patients wait with clarity; via SMS/WhatsApp alerts or digital signage, and are guided
              when it's their turn. Tickets are issued through WhatsApp, updates are delivered to
              patients, and staff are notified - creating a fully managed, touchpoint-aware patient
              flow.
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

'use client';

import Image from 'next/image';
import Kiosk from '@/public/assets/kiosk.png';
import WhatsApp from '@/public/assets/whatsapp.png';

const solutions = [
  {
    title: 'Enterprise Virtual Queue Management',
    img: Kiosk,
  },
  {
    title: 'WhatsApp Queuing',
    img: WhatsApp,
  },
  {
    title: 'Online Appointment Booking, Scheduling and Management',
    img: Kiosk,
  },
  {
    title: 'Self-service Ticket Dispensing kiosk',
    img: WhatsApp,
  },
  {
    title: 'Customer Feedback',
    img: Kiosk,
  },
  {
    title: 'Analysis and Reporting',
    img: WhatsApp,
  },
];

export default function HealthSolution() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-background">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Solutions for Healthcare
        </h2>
        <p className="text-muted-foreground mt-2 text-sm md:text-md lg:text-lg">
          Innovative Solutions Designed for Healthcare Excellence
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 cursor-pointer rounded-2xl border border-white shadow-sm hover:shadow-lg transition bg-background"
          >
            <div className="w-[200px] h-[200px] mb-4 flex items-center justify-center">
              <Image
                src={solution.img}
                alt={solution.title}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-sm md:text-base font-medium text-gray-800 dark:text-white">
              {solution.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

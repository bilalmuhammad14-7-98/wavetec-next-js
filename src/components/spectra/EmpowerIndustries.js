'use client';

import Image from 'next/image';
import Kiosk from '@/public/assets/kiosk.png';
import WhatsApp from '@/public/assets/whatsapp.png';
import Container from '../shared/Container/Container';
import Bank from '@/public/assets/bank-image.png';
import Store from '@/public/assets/store.png';
import Telecommunication from '@/public/assets/telecommunication.png';
import Government from '@/public/assets/government.png';
import Education from '@/public/assets/education.png';
import HealthCare from '@/public/assets/healthcare.png';
const solutions = [
  {
    title: 'Omni-channel branch experience',
    img: Bank,
  },
  {
    title: 'Boost sales, cut costs',
    img: Store,
  },
  {
    title: 'Better onboarding & flows',
    img: Telecommunication,
  },
  {
    title: 'Tech for governance',
    img: Government,
  },
  {
    title: 'Safe admissions & exams',
    img: Education,
  },
  {
    title: 'Manage patient flows',
    img: HealthCare,
  },
];

export default function EmpowerIndusries() {
  return (
    <section className="py-16 bg-[#3390BE]/3  dark:bg-background">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
             Designed to empower <span className="text-[#05A2F0]">different industries</span>
          </h2>
          <p className="px-6 mt-3 text-muted-foreground  text-sm md:text-md lg:text-lg">
            Globally more than <span className="text-[#05A2F0]">2 million people</span>  pass
            through our Queue management solutions, daily.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center p-6 cursor-pointer  transition ">
              <div className="w-[100px] h-[100px] mb-4 flex items-center justify-center">
                <Image
                  src={solution.img}
                  alt={solution.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm md:text-md lg:text-lg font-semibold text-gray-800 dark:text-white">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

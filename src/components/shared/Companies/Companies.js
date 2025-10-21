'use client';

import React from 'react';
import Image from 'next/image';

import Icon1 from '@/public/assets/icon1.png';
import Icon2 from '@/public/assets/icon2.png';
import Icon3 from '@/public/assets/icon3.png';
import Icon4 from '@/public/assets/icon4.png';
import Icon5 from '@/public/assets/icon5.png';
import Icon6 from '@/public/assets/icon6.png';
import Icon7 from '@/public/assets/icon7.png';
import Icon8 from '@/public/assets/icon8.png';
import Icon9 from '@/public/assets/icon9.png';
import Icon10 from '@/public/assets/icon10.png';
export default function Companies() {
  const data = [
    { name: 'Ephemeral', logo: Icon1 },
    { name: 'Wildcrafted', logo: Icon2 },
    { name: 'Codecraft', logo: Icon3 },
    { name: 'Convergence', logo: Icon4 },
    { name: 'ImgCompress', logo: Icon5 },
    { name: 'Epicurios', logo: Icon6 },
    { name: 'Watchtower', logo: Icon7 },
    { name: 'Renaissance', logo: Icon8 },
    { name: 'ContrastAI', logo: Icon9 },
    { name: 'Nietzsche', logo: Icon10 },
  ];

  return (
    <section className="w-full py-10 bg-white dark:bg-[#0C0E12] text-center">
      <p className="text-base md:text-lg text-muted-foreground  font-medium">
        We’ve worked with some great companies
      </p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {data.map((company, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-sm md:text-base lg:text-lg xl:text-2xl text-dark font-semibold">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

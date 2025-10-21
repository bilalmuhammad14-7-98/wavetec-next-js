'use client';

import React from 'react';
import Image from 'next/image';

export default function SolutionCompanies({ value }) {
  return (
    <section className="w-full py-10 bg-white dark:bg-[#0C0E12] text-center">
      <p className="text-base md:text-lg text-muted-foreground  font-medium mb-6">
        {value?.text || 'We’ve worked with some great companies'}
      </p>

      <div>
        <Image
          src={value?.images?.[0]}
          alt="Company"
          width={600}
          height={400}
          className="w-full object-cover "
        />
      </div>
      {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"> */}
      {/* {data.map((company, index) => (
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
        ))} */}
      {/* </div> */}
    </section>
  );
}

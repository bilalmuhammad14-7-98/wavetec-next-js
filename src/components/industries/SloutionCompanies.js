// src/components/industries/SolutionCompanies.jsx
'use client';

import React from 'react';
import Image from 'next/image';

export default function SolutionCompanies({ value }) {
  return (
    <section className="w-full py-10 bg-white dark:bg-[#0C0E12] text-center">
      <p className="text-base md:text-lg text-muted-foreground font-medium mb-6">
        {value?.text || 'We’ve worked with some great companies'}
      </p>

      {/* Same width both modes; background only appears in dark */}
      <div
        className="
          inline-block w-full
          rounded-2xl
          p-3 sm:p-4
          bg-transparent
          dark:bg-white dark:shadow-sm dark:ring-1 dark:ring-black/10
        "
      >
        <Image
          src={value?.images?.[0]}
          alt="Company"
          width={600}
          height={400}
          className="w-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
}

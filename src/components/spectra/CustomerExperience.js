'use client';

import React from 'react';
import Image from 'next/image';
import CustomerExperienceDiagram from '@/public/assets/customer-experience.png';
import Container from '../shared/Container/Container';
import Spectra from '@/public/assets/spectra.png';

const CustomerExperience = () => {
  return (
    <>
      <section className="bg-[#E0EFF6] py-12 dark:bg-[#0C0E12]">
        <Container className="flex flex-col gap-6 pt-8 pb-4">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#181D27] dark:text-[#F7F7F7] mb-6">
            Control the Customer Experience with Spectra
          </h2>

          <Image src={CustomerExperienceDiagram} alt="Customer Experience" className="w-full" />

          <p className="mt-8 text-muted-foreground text-md md:text-lg text-justify">
            An enterprise queuing system software that integrates with all peripheral devices to
            minimize customers efforts across all channels and touchpoints, ensuring a seamless
            experience every time a customer visits your branch.
          </p>
          <p className="mt-4 font-bold text-center text-md md:text-lg text-[#181D27] dark:text-[#F7F7F7]">
            Spectra allows you to redefine the way your team will handle customers when they visit
            your branch.
          </p>
        </Container>
      </section>
      <div className="bg-[#826BA9] dark:bg-[#0C0E12] w-full pt-8 ">
        <Container>
          <Image src={Spectra} alt="Spectra" className="w-full h-full" />
        </Container>
      </div>
    </>
  );
};

export default CustomerExperience;

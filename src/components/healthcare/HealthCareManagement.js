'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Import assets from public folder
import ICON from '@/public/assets/f-icon.png';
import ICON2 from '@/public/assets/f2-icon.png';
import Container from '../shared/Container/Container';
import Videos from '../shared/Video/Videos';

export default function HealthCareManagement() {
  return (
    <section className="w-full bg-background">
      {/* Top content */}
      <div className="bg-background-two py-16 lg:py-20 mb-6">
        <Container>
          <div className="grid grid-cols-12 gap-x-8 gap-y-8 items-start">
            {/* Left text */}
            <div className="col-span-12 lg:col-span-6 min-w-0 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold leading-snug bg-card">
                Healthcare Management Made Simple
              </h2>
              <p className="mt-4 text-lg md:text-lg leading-relaxed text-muted-foreground">
                Wavetec’s healthcare solutions are designed to deliver seamless, safe, and
                high-quality patient experiences. From consulting and innovation to implementation,
                we help providers streamline patient flow, reduce friction, and enable contactless
                interactions.
              </p>
            </div>

            {/* Right features */}
            <div className="col-span-12 lg:col-span-6 lg:justify-self-end space-y-6">
              <FeatureBlock
                icon={ICON}
                title="Streamlined & Contactless Patient Journeys"
                description="Our solutions ensure smooth patient flow with minimal wait times and safe, contactless processes—improving efficiency while prioritizing comfort and care."
              />
              <FeatureBlock
                icon={ICON2}
                title="Safe, Reliable, and Scalable"
                description="In today’s healthcare climate - covering pandemics, testing, and vaccinations; we deliver hardware and software that protect patients and staff, ensure uninterrupted service, and maintain personalized attention at scale."
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Video block */}
      {/* <Container>
        <div className="bg-background">
          <div className="mt-0  pb-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-md bg-neutral-200 dark:bg-neutral-800
                aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10]"
            >
              <video
                src=""
                className="absolute inset-0 h-full w-full object-cover"
                controls
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </Container> */}
      <Videos url={'/assets/healthcare.mp4'} />
    </section>
  );
}

function FeatureBlock({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <Image src={icon} alt={title} width={48} height={48} className="rounded-md object-cover" />
      <div className="leading-relaxed">
        <h3 className="text-lg font-semibold bg-card">{title}</h3>
        <p className="mt-1 text-sm md:text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

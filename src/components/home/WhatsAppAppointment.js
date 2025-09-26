'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Import assets from public folder
import ICON from '@/public/assets/f-icon.png';
import ICON2 from '@/public/assets/f2-icon.png';
import Container from '../shared/Container/Container';

export default function WhatsAppAppointment() {
  return (
    <section className="w-full bg-background">
      {/* Top content */}
      <div className="bg-background-two py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-12 gap-x-8 gap-y-8 items-start">
            {/* Left text */}
            <div className="col-span-12 lg:col-span-6 min-w-0 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold leading-snug bg-card">
                Meet WhatsApp Appointments, Our Brand New Solution
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                To meet current client expectations, banks and financial institutions are investing
                in digital capabilities. Now make banking appointments through WhatsApp from
                anywhere.
              </p>
            </div>

            {/* Right features */}
            <div className="col-span-12 lg:col-span-6 lg:justify-self-end space-y-6">
              <FeatureBlock
                icon={ICON}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut ligula."
              />
              <FeatureBlock
                icon={ICON2}
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut ligula."
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Video block */}
      <Container>
        <div className="bg-background">
          <div className="mt-0 lg:-mt-10 pb-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-md bg-neutral-200 dark:bg-neutral-800
                aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10]"
            >
              <video
                src="/assets/video.mp4"
                className="absolute inset-0 h-full w-full object-cover"
                controls
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </Container>
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

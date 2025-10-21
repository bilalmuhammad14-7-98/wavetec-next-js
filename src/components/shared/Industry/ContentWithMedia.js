'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Import assets from public folder

import Container from '../Container/Container';
import Videos from '../Video/Videos';

function FeatureBlock({ icon, title, description }) {
  console.log(icon);
  return (
    <div className="flex items-start gap-4">
      <Image src={icon} width={48} height={48} className="rounded-md object-cover" />
      <div className="leading-relaxed">
        <h3 className="text-lg font-semibold bg-card">{title}</h3>
        <p className="mt-1 text-sm md:text-base text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function ContentWithMedia({ value }) {
  return (
    <section className="w-full bg-background">
      {/* Top content */}
      <div className="bg-background-two py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-12 gap-x-8 gap-y-8 items-start">
            {/* Left text */}
            <div className="col-span-12 lg:col-span-6 min-w-0 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold leading-snug bg-card">
                {value?.title}
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                {value?.description}
              </p>
            </div>

            {/* Right features */}
            <div className="col-span-12 lg:col-span-6 lg:justify-self-end space-y-6">
              {value?.features.map((feature, index) => (
                <FeatureBlock key={index} {...feature} />
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Video block */}
      {/* <Container>
        <div className="bg-background">
          <div className="mt-0 lg:-mt-10 pb-8">
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-md bg-neutral-200 dark:bg-neutral-800
                aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/10]"
            >
              <video
                src={value?.video}
                className="absolute inset-0 h-full w-full object-cover"
                controls
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </Container> */}
      <Videos url={value?.video} className="mt-[-35px] mb-[40px]" />
    </section>
  );
}

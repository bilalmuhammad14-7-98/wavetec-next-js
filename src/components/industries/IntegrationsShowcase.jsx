// src/components/shared/IntegrationsShowcase.jsx
import Image from 'next/image';

export default function IntegrationsShowcase({ value }) {
  return (
    <section className="w-full bg-[#FAFAFA] dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <p className="text-base font-semibold text-[#175CD3] dark:text-[#84ADFF]">
            {value?.blocks?.[0]?.text}
          </p>
          <h2 className="mt-2 text-2xl sm:text-4xl md:text-6xl font-semibold text-[#181D27] dark:text-white">
            {value?.blocks?.[1]?.text?.replace(/amp;/g, '')}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {value?.blocks?.[2]?.text}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-5xl">
            <Image
              src={value?.images?.[0]}
              width={200}
              height={100}
              alt="Supported integrations"
              className="w-full h-auto object-contain"
              priority
              sizes="(min-width: 1280px) 800px, (min-width: 768px) 70vw, 90vw"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            // href={cta.href}
            className="mt-4 sm:mt-0 text-white text-sm font-medium px-4 py-2 rounded-md btn-primary-color cursor-pointer"
            // className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white bg-[#175CD3] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900"
          >
            {value?.buttons?.[0]?.text || 'Learn More'}
          </a>
        </div>
      </div>
    </section>
  );
}

// src/components/industries/DigitalSolutionsGrid.jsx
import { FiArrowRight } from 'react-icons/fi';

export default function DigitalSolutionsGrid({ value }) {
  function splitByLineBreaks(str) {
    return str.split(/\n+/).filter(Boolean);
  }

  const data = splitByLineBreaks(value?.text).map((item) => item.replace(/&nbsp;/g, '').trim());
  console.log('Solution IndustryIntro Value:', data);
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181D27] dark:text-white">
          {data?.[0] || 'Our Digital Solutions'}
        </h2>

        {/* Items */}
        <div className="mt-10 rounded-xl">
          <div className="grid gap-x-12 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#181D27] dark:text-white">{data?.[1]}</h3>

              <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
                {data?.[2]}
              </p>

              <a
                // href={item.link.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                // aria-label={item.link.label || item.heading}
              >
                {value?.buttons?.[0]?.text || 'Learn More'}
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#181D27] dark:text-white">{data?.[3]}</h3>

              <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
                {data?.[4]}
              </p>

              <a
                // href={item.link.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                // aria-label={item.link.label || item.heading}
              >
                {value?.buttons?.[1]?.text || 'Learn More'}
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#181D27] dark:text-white">{data?.[5]}</h3>

              <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
                {data?.[6]}
              </p>

              <a
                // href={item.link.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                // aria-label={item.link.label || item.heading}
              >
                {value?.buttons?.[2]?.text || 'Learn More'}
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#181D27] dark:text-white">{data?.[7]}</h3>

              <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
                {data?.[8]}
              </p>

              <a
                // href={item.link.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                // aria-label={item.link.label || item.heading}
              >
                {value?.buttons?.[3]?.text || 'Learn More'}
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#181D27] dark:text-white">{data?.[9]}</h3>

              <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
                {data?.[10]}
              </p>

              <a
                // href={item.link.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                // aria-label={item.link.label || item.heading}
              >
                {value?.buttons?.[4]?.text || 'Learn More'}
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-[#181D27] dark:text-white">{data?.[11]}</h3>

              <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
                {data?.[12]}
              </p>

              <a
                // href={item.link.href}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                // aria-label={item.link.label || item.heading}
              >
                {value?.buttons?.[5]?.text || 'Learn More'}
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';

export default function BlogSection({ value }) {
  function splitByLineBreaks(str) {
    return str ? str.split(/\n+/).filter(Boolean) : [];
  }

  const data = splitByLineBreaks(value?.text).map((item) => item.replace(/&nbsp;/g, '').trim(','));

  return (
    <div className="dark:bg-[#0C0E12]">
      <section className="py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 max-w-7xl mx-auto px-4">
          {/* Left Panel */}
          <div className="md:w-1/3 space-y-4">
            <p className="text-base text-[#004EEB] dark:text-[#CECFD2] font-semibold">
              {data?.[0]}
            </p>
            <h2 className="text-4xl font-semibold text-[#181D27] dark:text-[#F7F7F7] leading-snug">
              {data?.[1]}
            </h2>
            <p className="text-lg text-[#535862] dark:text-[#94979C]">{data?.[2]}</p>
            <button
              className="mt-4 px-5 py-2.5 text-base font-semibold text-white rounded-md btn-primary-color cursor-pointer transition-all hover:opacity-90"
              aria-label={value?.buttons?.[0]?.text}
            >
              {value?.buttons?.[0]?.text}
            </button>
          </div>

          {/* Blog Cards */}
          <div className="md:w-2/3 grid gap-6 md:grid-cols-2">
            {[0, 1].map((i) => (
              <article
                key={i}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md bg-white dark:bg-[#111418]"
              >
                <div className="relative w-full h-[240px]">
                  <Image
                    src={value?.images?.[i] || '/assets/blog-one.png'}
                    alt={`Blog ${i + 1}`}
                    width={600}
                    height={400}
                    priority={i === 0}
                    className="object-cover w-full h-full"
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{ aspectRatio: '3 / 2' }}
                  />
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs w-fit bg-[#EFF8FF] border border-[#B2DDFF] dark:bg-[#0040C1] dark:border-[#0040C1] rounded-full px-2 py-1">
                    <span className="text-[#004EEB] dark:text-[#84CAFF] font-medium">Design</span>
                    <span className="text-[#004EEB] dark:text-[#84CAFF]">8 min read</span>
                  </div>

                  <h3 className="text-2xl font-semibold dark:text-[#F7F7F7] text-[#181D27] group-hover:underline leading-tight">
                    {data?.[i === 0 ? 3 : 5]}
                  </h3>

                  <p className="text-[#535862] dark:text-[#94979C] text-base leading-relaxed">
                    {data?.[i === 0 ? 4 : 6]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

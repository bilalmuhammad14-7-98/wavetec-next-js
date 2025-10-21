'use client';

import Image from 'next/image';
import Container from '../Container/Container';

export default function BenefitsSection({ value }) {
  function splitByLineBreaks(str) {
    return str.split(/\n+/).filter(Boolean);
  }

  const data = splitByLineBreaks(value?.text).map((item) => item.replace(/&nbsp;/g, '').trim());

  console.log(data);

  return (
    <section className="bg-[#0040C1] dark:bg-[#0C0E12] py-16 md:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* ✅ Optimized Image Section */}
          <div className="w-full lg:w-1/2">
            {value?.images?.[0] && (
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src={value?.images?.[0]}
                  alt="Feature"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-2xl"
                  priority={false}
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* ✅ Text Content Section */}
          <div className="w-full h-full lg:w-1/2 flex flex-col justify-center gap-6">
            <div>
              <p className="text-base text-[#B2DDFF] font-semibold pb-4">{data?.[0]}</p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                {data?.[1]}
              </h2>
            </div>

            {/* ✅ Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 xl:pt-25">
              <div>
                <h3 className="text-5xl text-white font-bold">{data?.[2]}</h3>
                <p className="text-[#B2DDFF] text-lg font-medium pt-2">{data?.[3]}</p>
              </div>
              <div>
                <h3 className="text-5xl text-white font-bold">{data?.[4]}</h3>
                <p className="text-[#B2DDFF] text-lg font-medium pt-2">{data?.[5]}</p>
              </div>
              <div>
                <h3 className="text-5xl text-white font-bold">{data?.[6]}</h3>
                <p className="text-[#B2DDFF] text-lg font-medium pt-2">{data?.[7]}</p>
              </div>
              <div>
                <h3 className="text-5xl text-white font-bold">{data?.[8]}</h3>
                <p className="text-[#B2DDFF] text-lg font-medium pt-2">{data?.[9]}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

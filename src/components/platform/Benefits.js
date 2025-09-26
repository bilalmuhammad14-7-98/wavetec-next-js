'use client';

import Image from 'next/image';
import BGImage from '@/public/assets/feature-bg.png';
import Container from '../shared/Container/Container';

export default function Benefits() {
  return (
    <section className="bg-[#0040C1] dark:bg-[#0C0E12] py-16 md:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image src={BGImage} alt="Feature" className="w-full h-auto object-cover" priority />
          </div>

          {/* Text Content */}
          <div className="w-full h-full lg:w-1/2 flex flex-col justify-center gap-6">
            <div>
              <p className="text-base text-[#B2DDFF] font-semibold pb-4">
                Build better, launch faster
              </p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                Benefits of Customer Journey Solutions for the Bank branch
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 xl:pt-25">
              {[
                { title: '400+', desc: 'Projects completed' },
                { title: '600%', desc: 'Return on investment' },
                { title: '10k', desc: 'Global' },
                { title: '200+', desc: '5-star reviews' },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-5xl text-white font-bold">{item.title}</h3>
                  <p className="text-[#B2DDFF] text-lg font-medium pt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

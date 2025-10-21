'use client';

import { IoPlayCircleOutline } from 'react-icons/io5';
import Image from 'next/image';
import ButtonOne from '../Buttons/ButtonOne';
import ButtonTwo from '../Buttons/ButtonTwo';
import Container from '../Container/Container';

export default function BenefitsSection({ value }) {
  return (
    <div className="bg-background">
      <div className="w-full bg-background-three  h-[500px] py-24">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl text-center space-y-6">
            <div className="text-[#B2DDFF] dark:text-[#CECFD2] text-base font-semibold">
              {value?.heading}
            </div>
            <h2 className="text-white font-semibold text-3xl md:text-4xl">{value?.title}</h2>
            <p className="text-[#B2DDFF] dark:text-[#94979C] text-base md:text-xl">
              {value?.description}
            </p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <ButtonOne
                title={value?.secondary?.label}
                icon={<IoPlayCircleOutline className="mr-2 w-5 h-5" color="#A4A7AE" />}
                className="flex items-center justify-center"
              />
              <ButtonTwo
                title={value?.primary?.label}
                className="btn-primary-color border hover:border border-[#155EEF] cursor-pointer text-white px-5 py-2 rounded-lg font-semibold"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}

      <div className="mt-[-50px]">
        <Container>
          <div
            style={{
              backgroundImage: 'url(/assets/blog.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="bg-white dark:bg-gray-800 px-6 py-12 flex justify-center"
          >
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {value?.stats?.map((stat, ind) => (
                <div
                  key={ind}
                  style={{ backdropFilter: 'blur(16px)' }}
                  className="bg-white shadow-md rounded-xl text-center p-6"
                >
                  <div className="text-6xl font-bold text-[#0040C1]">{stat?.value}</div>
                  <div className="text-[#181D27] font-semibold mt-2">{stat?.title}</div>
                  <p className="text-[#535862] text-sm lg:text-base mt-1">{stat?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

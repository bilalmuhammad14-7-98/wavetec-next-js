'use client';

import { IoPlayCircleOutline } from 'react-icons/io5';
import Image from 'next/image';
import ButtonOne from '../shared/Buttons/ButtonOne';
import ButtonTwo from '../shared/Buttons/ButtonTwo';
import Container from '../shared/Container/Container';

export default function Benefits() {
  return (
    <div className="bg-background">
      {/* Top Blue Section (full-bleed background, content on rails) */}
      <div className="w-full bg-background-three  h-[500px] py-24">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl text-center space-y-6">
            <div className="text-[#B2DDFF] dark:text-[#CECFD2] text-base font-semibold">
              Launch faster
            </div>
            <h2 className="text-white font-semibold text-3xl md:text-4xl">
              Benefits of Customer Journey Solutions for the Bank branch
            </h2>
            <p className="text-[#B2DDFF] dark:text-[#94979C] text-base md:text-xl">
              As banks are under extraordinary pressure to manage costs, progressive players are
              pushing for more advanced customer facing technologies.
            </p>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <ButtonOne
                title={'Demo'}
                icon={<IoPlayCircleOutline className="mr-2 w-5 h-5" color="#A4A7AE" />}
                className="flex items-center justify-center"
              />
              <ButtonTwo
                title={'Get started'}
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
              {/* Card 1 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6"
              >
                <div className="text-6xl font-bold text-[#0040C1]">400+</div>
                <div className="text-[#181D27] font-semibold mt-2">Projects completed</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Card 2 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6"
              >
                <div className="text-6xl font-bold text-[#0040C1]">600%</div>
                <div className="text-[#181D27] font-semibold mt-2">Return on investment</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Card 3 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6"
              >
                <div className="text-6xl font-bold text-[#0040C1]">10K</div>
                <div className="text-[#181D27] font-semibold mt-2">Globals</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

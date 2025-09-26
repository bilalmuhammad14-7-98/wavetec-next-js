'use client';

import { IoPlayCircleOutline } from 'react-icons/io5';
import Image from 'next/image';
import Container from '../shared/Container/Container';
import ButtonOne from '../shared/Buttons/ButtonOne';
import ButtonTwo from '../shared/Buttons/ButtonTwo';
import Icon1 from '@/public/assets/icon-1.png';
import Icon2 from '@/public/assets/icon-2.png';
import Icon3 from '@/public/assets/icon-3.png';
import Icon4 from '@/public/assets/icon-4.png';
import Icon5 from '@/public/assets/icon-5.png';
import Icon6 from '@/public/assets/icon-6.png';

export default function SpectraBenefits() {
  return (
    <div className="bg-background">
      {/* Top Blue Section (full-bleed background, content on rails) */}
      <div className="w-full bg-background-three  h-[500px] py-24">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl text-center space-y-6">
            <h2 className="text-white font-semibold text-3xl md:text-4xl leading-10">
               Designed to deliver great 
              <span className="text-[#47A5D4]">Customer Experience </span> & Proven Results
            </h2>
            <p className="text-[#B2DDFF] dark:text-[#94979C] text-base md:text-xl">
              Wavetec’s healthcare solutions help you deliver safer, faster, and more efficient
              patient care. From improving satisfaction to streamlining operations, we make every
              visit smoother and smarter.
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
      <div className="mt-[-50px] mb-12">
        <Container>
          <div
            style={{
              backgroundImage: 'url(/assets/bg-blog.png)',
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
                <Image src={Icon1} alt="Icon" width={80} height={80} className="mx-auto" />
                <div className="text-[#181D27] font-semibold mt-2">Ensure Safety & Compliance</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Enforce social distancing and control occupancy limits.
                </p>
              </div>

              {/* Card 2 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6"
              >
                <Image src={Icon2} alt="Icon" width={80} height={80} className="mx-auto" />
                <div className="text-[#181D27] font-semibold mt-2">Boost Patient Satisfaction</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Increase satisfaction by up to 30%.
                </p>
              </div>

              {/* Card 3 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6"
              >
                <Image src={Icon3} alt="Icon" width={80} height={80} className="mx-auto" />

                <div className="text-[#181D27] font-semibold mt-2">
                  Flexible & Centralized Control
                </div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Fully customizable and managed from one platform.
                </p>
              </div>
              {/* Card 1 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6"
              >
                <Image src={Icon4} alt="Icon" width={80} height={80} className="mx-auto" />

                <div className="text-[#181D27] font-semibold mt-2">Cut Wait Times in Half</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Reduce waiting by 50% and manage queue lengths effectively.
                </p>
              </div>

              {/* Card 2 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6"
              >
                <Image src={Icon5} alt="Icon" width={80} height={80} className="mx-auto" />

                <div className="text-[#181D27] font-semibold mt-2">Seamless Integrations</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Connect with messaging apps, appointment scheduling, and feedback systems.
                </p>
              </div>

              {/* Card 3 */}
              <div
                style={{ backdropFilter: 'blur(16px)' }}
                className="bg-white shadow-md rounded-xl text-center p-6 "
              >
                <Image src={Icon6} alt="Icon" width={80} height={80} className="mx-auto" />

                <div className="text-[#181D27] font-semibold mt-2">Data-Driven Insights</div>
                <p className="text-[#535862] text-sm lg:text-base mt-1">
                  Get real-time analysis and reports via Spectra Dashboards.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

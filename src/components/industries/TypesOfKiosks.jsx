import Image from 'next/image';
import Icon from '@/public/assets/Icon.png';
import Mockup from '@/public/assets/Screenmockup.png';
import { FiArrowRight } from 'react-icons/fi';

export default function TypesOfKiosks({ value }) {
  console.log(value, 'TypesOfKiosks Section Data');

  const image_One_Url = value?.images[0];
  console.log('Image One URL:', image_One_Url);
  return (
    <section className="w-full bg-white dark:bg-[#0C0E12] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            {value?.blocks?.[0]?.text || 'OUR SOLUTIONS'}
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {value?.blocks?.[1]?.text || 'OUR SOLUTIONS'}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {value?.blocks?.[2]?.text || 'OUR SOLUTIONS'}
          </p>
        </div>

        {/* Kiosk Types */}
        <div className="space-y-16">
          {/* Block 1 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {value?.blocks?.[3]?.text || 'OUR SOLUTIONS'}
              </h3>
              <ul className="space-y-2">
                <li
                  // key={`qsr-${i}`}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  {/* <Image src={Icon} alt="check" className="w-5 h-5 mt-1" /> */}
                  {value?.blocks?.[4]?.text || 'OUR SOLUTIONS'}
                </li>

                <a
                  // href={item.link.href}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                  // aria-label={item.link.label || item.heading}
                >
                  {value?.blocks?.[12]?.text || 'Learn More'}
                  <FiArrowRight aria-hidden="true" />
                </a>

                {/* {Array.from({ length: 3 }).map((_, i) => (
                  <li
                    key={`qsr-${i}`}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <Image src={Icon} alt="check" className="w-5 h-5 mt-1" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                ))} */}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={value?.images?.[0]}
                alt="Kiosk mockup"
                className="w-full rounded-lg shadow-md"
                priority
                width={500}
                height={400}
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Image
                src={value?.images?.[1]}
                width={500}
                height={400}
                alt="Kiosk mockup"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {value?.blocks?.[5]?.text || 'OUR SOLUTIONS'}
              </h3>
              <ul className="space-y-2">
                <li
                  // key={`sco-${i}`}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  {/* <Image src={Icon} alt="check" className="w-5 h-5 mt-1" /> */}
                  {value?.blocks?.[6]?.text || 'OUR SOLUTIONS'}
                </li>
                <a
                  // href={item.link.href}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                  // aria-label={item.link.label || item.heading}
                >
                  {value?.blocks?.[13]?.text || 'Learn More'}
                  <FiArrowRight aria-hidden="true" />
                </a>
                {/* {Array.from({ length: 3 }).map((_, i) => (
                  <li
                    key={`sco-${i}`}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <Image src={Icon} alt="check" className="w-5 h-5 mt-1" />
                     {value?.blocks?.[6]?.text || 'OUR SOLUTIONS'}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {value?.blocks?.[7]?.text.replace(/ &amp;/g, ' &') || 'OUR SOLUTIONS'}
              </h3>
              <ul className="space-y-2">
                <li
                  // key={`sim-${i}`}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  {/* <Image src={Icon} alt="check" className="w-5 h-5 mt-1" /> */}
                  {value?.blocks?.[8]?.text || 'OUR SOLUTIONS'}
                </li>
                <a
                  // href={item.link.href}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#175CD3] dark:text-[#84ADFF] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#175CD3] dark:focus:ring-[#84ADFF] dark:focus:ring-offset-slate-900 rounded"
                  // aria-label={item.link.label || item.heading}
                >
                  {value?.blocks?.[14]?.text || 'Learn More'}
                  <FiArrowRight aria-hidden="true" />
                </a>
                {/* {Array.from({ length: 3 }).map((_, i) => (
                  <li
                    key={`sim-${i}`}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <Image src={Icon} alt="check" className="w-5 h-5 mt-1" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                ))} */}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={value?.images?.[2]}
                width={500}
                height={400}
                alt="Kiosk mockup"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

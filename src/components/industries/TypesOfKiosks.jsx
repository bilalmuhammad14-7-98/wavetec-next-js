import Image from 'next/image';
import Icon from '@/public/assets/Icon.png';
import Mockup from '@/public/assets/Screenmockup.png';

export default function TypesOfKiosks() {
  return (
    <section className="w-full bg-white dark:bg-[#0C0E12] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Self-Service Kiosks
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Types of Self Service Kiosks
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet risus ut urna
            vehicula malesuada ut a ligula.
          </p>
        </div>

        {/* Kiosk Types */}
        <div className="space-y-16">
          {/* Block 1 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Service Restaurant Self-Service Kiosks
              </h3>
              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li
                    key={`qsr-${i}`}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <Image src={Icon} alt="check" className="w-5 h-5 mt-1" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={Mockup}
                alt="Kiosk mockup"
                className="w-full rounded-lg shadow-md"
                priority
              />
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Image src={Mockup} alt="Kiosk mockup" className="w-full rounded-lg shadow-md" />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Self Checkout Kiosks
              </h3>
              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li
                    key={`sco-${i}`}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <Image src={Icon} alt="check" className="w-5 h-5 mt-1" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sim Dispensing Kiosks
              </h3>
              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li
                    key={`sim-${i}`}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <Image src={Icon} alt="check" className="w-5 h-5 mt-1" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src={Mockup} alt="Kiosk mockup" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

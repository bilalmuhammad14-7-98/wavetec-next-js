import Image from 'next/image';
import Icon from '@/public/assets/Icon.png';
import Mockup from '@/public/assets/telco-mobile-kiosk.png';

// Background image for the whole section
import SectionBg from '@/public/assets/telco-features-bg.png';

export default function TypesOfKiosks() {
  const kiosks = [
    {
      id: 'qsr',
      title: 'Quick Service Restaurant Self-Service Kiosks',
      points: [
        'Order & pay at kiosk with upsell prompts.',
        'Reduce queue times and improve throughput.',
        'Integrates with POS & kitchen display systems.',
      ],
      image: Mockup,
    },
    {
      id: 'sco',
      title: 'Self Checkout Kiosks',
      points: [
        'Barcode scanning and scale verification.',
        'Multiple payment options with receipt printer.',
        'Real-time loss-prevention flags.',
      ],
      image: Mockup,
    },
    {
      id: 'sim',
      title: 'SIM Dispensing Kiosks',
      points: [
        'eKYC & ID verification with biometrics.',
        'Instant SIM issuance & top-up support.',
        'Remote monitoring and device telemetry.',
      ],
      image: Mockup,
    },
    {
      id: 'sim',
      title: 'SIM Dispensing Kiosks',
      points: [
        'eKYC & ID verification with biometrics.',
        'Instant SIM issuance & top-up support.',
        'Remote monitoring and device telemetry.',
      ],
      image: Mockup,
    },
  ];

  return (
    <section
      className="relative w-full py-16 md:py-20 "
      style={{
        backgroundImage: 'url(/assets/telco-features-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background image */}
      {/* <Image
        src={SectionBg}
        alt=""
        fill
        sizes="100vw"
        priority={false}
        aria-hidden
        className="pointer-events-none -z-10 object-cover"
      /> */}
      {/* Light overlay so bg is visible but text readable */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-white/15 dark:bg-black/30" /> */}

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

        {/* Alternating rows: image LEFT then RIGHT, etc. */}
        <div className="space-y-16">
          {kiosks.map((item, i) => {
            const imageOnRight = i % 2 === 0; // 0,2,4... right; 1,3,5... left
            return (
              <div key={item.id} className="flex flex-col lg:flex-row items-center gap-8">
                {/* Text column */}
                <div
                  className={
                    imageOnRight ? 'lg:order-1 w-full lg:w-1/2' : 'lg:order-2 w-full lg:w-1/2'
                  }
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <Image src={Icon} alt="" className="w-5 h-5 mt-1" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image column */}
                <div
                  className={
                    imageOnRight ? 'lg:order-2 w-full lg:w-1/2' : 'lg:order-1 w-full lg:w-1/2'
                  }
                >
                  <Image
                    src={item.image}
                    alt="Kiosk mockup"
                    className="w-full rounded-xl shadow-md"
                    priority={i === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

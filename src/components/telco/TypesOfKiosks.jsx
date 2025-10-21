import Image from 'next/image';
import Icon from '@/public/assets/Icon.png';
import Mockup from '@/public/assets/telco-mobile-kiosk.png';
import MultiPayment from '@/public/assets/multi-payment.png';
import Biometric from '@/public/assets/advanced-biometric.png';
import Scanning from '@/public/assets/document-scanning.png';
import Sensors from '@/public/assets/sensors.png';

// Background image for the whole section
import SectionBg from '@/public/assets/telco-features-bg.png';

export default function TypesOfKiosks() {
  const kiosks = [
    {
      id: 'qsr',
      title: 'SIM Card Dispensing & Mobile Top-Up',
      description:
        'Enable instant SIM issuance, activation, and mobile balance recharge to serve customers anytime, anywhere. Perfect for reducing queues at physical branches and increasing accessibility.',
      points: [
        'Dispense new SIM cards with real-time backend integration.',
        'Support for prepaid & postpaid top-ups.',
        'eKYC process with automated ID verification.',
      ],
      image: Mockup,
    },
    {
      id: 'sco',
      title: 'Multi-Payment Options',
      description:
        'Offer customers the flexibility to pay in their preferred way, increasing transaction success rates and customer satisfaction.',
      points: [
        'Accept cash, cheque, POS card, and QR code payments.',
        'PCI-compliant payment processing.',
        'Secure, encrypted transaction handling.',
      ],
      image: MultiPayment,
    },
    {
      id: 'sim',
      title: 'Advanced Biometric Verification',
      description:
        'Ensure compliance with telecom regulations and enhance security with fast, accurate biometric checks.',
      points: [
        'Thumbprint scanning.',
        'Facial recognition verification.',
        'ID card scanning for instant authentication.',
      ],
      image: Biometric,
    },
    {
      id: 'sim',
      title: 'Document & ID Scanning',
      description:
        'Speed up telecom processes like SIM registration and account opening with integrated scanning capabilities.',
      points: [
        'A4 document scanner for contracts & forms.',
        'OCR-enabled ID scanning.',
        'High-speed processing for minimal wait time.',
      ],
      image: Scanning,
    },
    {
      id: 'sim',
      title: 'Proximity Sensors & Dynamic Display',
      description:
        'Capture customer attention and improve engagement with smart display technology.',
      points: [
        'Motion-activated proximity sensors.',
        '32-inch responsive touchscreen interface.',
        'Display targeted ads and promotions during idle time.',
      ],
      image: Sensors,
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
            Our Self-Service Kiosks
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Key Features of Our SIM Dispensing Kiosks
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our kiosks are engineered to deliver speed, security, and customer convenience, helping
            telcos offer seamless 24/7 services while reducing operational costs.
          </p>
        </div>

        {/* Alternating rows: image LEFT then RIGHT, etc. */}
        <div className="space-y-16">
          {kiosks.map((item, i) => {
            const imageOnRight = i % 2 === 0; // 0,2,4... right; 1,3,5... left
            return (
              <div key={i} className="flex flex-col lg:flex-row items-center gap-8">
                {/* Text column */}
                <div
                  className={
                    imageOnRight ? 'lg:order-1 w-full lg:w-1/2' : 'lg:order-2 w-full lg:w-1/2'
                  }
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className=" text-gray-900 dark:text-white">{item?.description}</p>
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

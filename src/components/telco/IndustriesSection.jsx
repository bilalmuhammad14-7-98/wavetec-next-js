import Image from 'next/image';
import RestaurantsIcon from '@/public/assets/restaurant.png';
import TelecomIcon from '@/public/assets/telecom.png';
import BankIcon from '@/public/assets/bank.png';
import RetailIcon from '@/public/assets/retail.png';
import ArrowVector from '@/public/assets/vector.png';
import ScreenMockup from '@/public/assets/telco-mockup.png';

export default function IndustriesSection() {
  const items = [
    { icon: RestaurantsIcon, title: 'Restaurants' },
    { icon: TelecomIcon, title: 'Telecom' },
    { icon: BankIcon, title: 'Bank' },
    { icon: RetailIcon, title: 'Retail' },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0C0E12] py-16">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Arrow Vector */}
        <div className="hidden lg:block absolute top-[120px] right-[340px] w-28 h-auto z-10">
          <Image src={ArrowVector} alt="Arrow" className="w-28 h-auto" />
        </div>

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Industries
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
            Offerings & Benefits of Wavetec’s SIM Dispensing Kiosks
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Our telecom-focused self-service kiosks help operators serve more customers efficiently
            while ensuring security and compliance.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-1">
            {items.map((item, idx) => (
              <div className="flex gap-3 items-start" key={idx}>
                <Image src={item.icon} alt={item.title} className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus
                    et urna vehicula maximus a ut.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mockup */}
          <div className="w-full lg:w-[48%] xl:w-[50%] mt-6 lg:mt-0">
            <Image
              src={ScreenMockup}
              alt="Dashboard mockup"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

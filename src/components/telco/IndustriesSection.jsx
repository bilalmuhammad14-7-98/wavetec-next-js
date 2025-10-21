import Image from 'next/image';
import RestaurantsIcon from '@/public/assets/restaurant.png';
import TelecomIcon from '@/public/assets/telecom.png';
import BankIcon from '@/public/assets/bank.png';
import RetailIcon from '@/public/assets/retail.png';
import ArrowVector from '@/public/assets/vector.png';
import ScreenMockup from '@/public/assets/telco-mockup.png';

export default function IndustriesSection() {
  const items = [
    {
      icon: RestaurantsIcon,
      title: '24/7 Availability',
      description:
        'Operate beyond store hours with kiosks that handle SIM issuance, activation, and mobile top-ups anytime. This constant accessibility reduces branch dependency, improves customer satisfaction, and strengthens brand loyalty.',
    },
    {
      icon: TelecomIcon,
      title: 'Cost Effectiveness',
      description:
        'Lower operational costs by automating routine transactions. SIM dispensing kiosks reduce staff requirements, ease branch traffic, and streamline workflows, allowing telecom providers to allocate resources more effectively.',
    },
    {
      icon: BankIcon,
      title: 'Faster Customer Onboarding',
      description:
        'Complete SIM verification, activation, and dispensing in under two minutes. Integrated eKYC, biometrics, payments, and document scanning create a secure, one-stop experience that reduces wait times.',
    },
    {
      icon: RetailIcon,
      title: 'Revenue Growth Opportunities',
      description:
        'Use the 32-inch display to promote offers, plans, and add-on services during transactions. Strategically placed kiosks can upsell data packages and expand your telecom brand’s presence in high-footfall areas.',
    },
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
          {/* <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide"></h4> */}
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
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
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

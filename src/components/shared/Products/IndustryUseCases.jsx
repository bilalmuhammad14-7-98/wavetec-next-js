import Image from 'next/image';

export default function IndustryUseCases({
  eyebrow = 'Industries',
  title = 'How Are Self-Service Kiosks Used in Different Industries',
  subtitle,
  items = [], // [{ icon, title, description }]
  mockup, // string | StaticImageData
  arrowVector, // optional decorative image (StaticImageData|string)
}) {
  return (
    <section className="w-full bg-white dark:bg-[#0C0E12] py-16">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Arrow Vector (decorative) */}
        {arrowVector && (
          <div className="hidden lg:block absolute top-[120px] right-[340px] w-28 h-auto z-10">
            <Image src={arrowVector} alt="" width={112} height={112} className="w-28 h-auto" />
          </div>
        )}

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          {eyebrow && (
            <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              {eyebrow}
            </h4>
          )}
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-1">
            {items.map((it, idx) => (
              <div className="flex gap-3 items-start" key={idx}>
                {it.icon && (
                  <Image
                    src={it.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 mt-1"
                    aria-hidden
                  />
                )}
                <div>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {it.title}
                  </h3>
                  {it.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{it.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mockup */}
          {mockup && (
            <div className="w-full lg:w-[48%] xl:w-[50%] mt-6 lg:mt-0">
              <Image
                src={mockup}
                alt="Industry mockup"
                className="w-full h-auto object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

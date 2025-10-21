import Image from 'next/image';
import Link from 'next/link';

export default function ProductOverview({ title, description, items = [], media }) {
  return (
    <section className="bg-white dark:bg-[#0C0E12] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] leading-tight font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[15px] md:text-base text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: list */}
          <div className="lg:col-span-7 space-y-8">
            {items.map((it, idx) => (
              <article
                key={idx}
                className="group rounded-md p-4 transition
                           hover:bg-gray-50 hover:shadow-sm hover:ring-1 hover:ring-black/5
                           dark:hover:bg-gray-800 dark:hover:ring-white/10
                           focus-within:ring-1 focus-within:ring-black/5 dark:focus-within:ring-white/10"
              >
                <div
                  className="pl-4 border-l-2 border-transparent transition
                             group-hover:border-blue-600 group-focus-within:border-blue-600"
                >
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-gray-900 dark:text-white">
                    {it.title}
                  </h3>

                  {it.description && (
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {it.description}
                    </p>
                  )}

                  {it.href && (
                    <Link
                      href={it.href}
                      className="mt-2 inline-block text-sm font-medium text-blue-600 dark:text-blue-400
                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Right: mockups */}
          <div className="lg:col-span-5 relative min-h-[320px] md:min-h-[380px] lg:min-h-[460px] flex justify-center lg:justify-end">
            {media?.tabletSrc && (
              <div className="hidden lg:block w-[92%] rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-xl self-start">
                <Image
                  src={media.tabletSrc}
                  alt={media.altTablet || 'Tablet mockup'}
                  className="block w-full h-auto"
                  priority
                />
              </div>
            )}
            {media?.phoneSrc && (
              <div
                className="w-[70%] sm:w-[56%] rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 shadow-2xl
                           lg:w-[42%] lg:absolute lg:left-[-5%] lg:top-[22%] lg:z-10"
              >
                <Image
                  src={media.phoneSrc}
                  alt={media.altPhone || 'Phone mockup'}
                  className="block w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export default function ProductHero({
  title,
  description,
  backgroundSrc, // string or imported image
  heroSrc, // string or imported image
  primary, // { label, href }
  secondary,
  data, // { label, href }
}) {
  console.log(data, 'tile===');
  return (
    <section className="relative bg-white bg-background w-full py-16 z-40">
      {/* Background Image */}
      {backgroundSrc && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={backgroundSrc}
            alt="background"
            fill
            sizes="100vw"
            className="object-cover mix-blend-color-burn dark:mix-blend-color-burn pointer-events-none dark:opacity-20"
            priority={false}
          />
        </div>
      )}

      {/* Foreground */}
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <div className="w-full lg:w-2/3 py-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {title}
          </h1>

          {description && (
            <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
              {description}
            </p>
          )}

          {(primary || secondary) && (
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {secondary && (
                <Link
                  href={secondary.href || '#'}
                  className="bg-white cursor-pointer dark:bg-gray-100 text-gray-900 dark:text-black border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-200 transition"
                >
                  {secondary.label}
                </Link>
              )}
              {primary && (
                <Link
                  href={primary.href || '#'}
                  className="btn-primary-color cursor-pointer text-white px-6 py-3 rounded-lg font-medium"
                >
                  {primary.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Hero Image */}
      {heroSrc && (
        <div className="max-w-7xl mx-auto px-4 mt-10 relative z-20">
          <Image
            src={heroSrc}
            alt="Hero section illustration"
            width={1920}
            height={1080}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="w-full max-h-[400px] rounded-xl object-cover shadow-md"
            priority
          />
        </div>
      )}
    </section>
  );
}

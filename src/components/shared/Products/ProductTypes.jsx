import Image from 'next/image';
import Link from 'next/link';

export default function ProductTypes({
  eyebrow, // "Self-Service Kiosks"
  title, // "Types of Self Service Kiosks"
  subtitle, // paragraph under title
  items = [], // [{ id, title, points:[], image, href, alt? }]
  bulletIcon, // image or string path for bullet icon
  bgImage, // string or StaticImageData for section background
  overlay = false, // add subtle overlay when bgImage exists
  alternating = true, // alternate image/text columns
}) {
  // handle both string and imported images
  const bgUrl = typeof bgImage === 'string' ? bgImage : bgImage?.src;

  return (
    <section
      className="relative w-full py-16 md:py-20"
      style={
        bgUrl
          ? {
              backgroundImage: `url(${bgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : undefined
      }
    >
      {/* Optional overlay for readability */}
      {bgUrl && overlay && (
        <div className="pointer-events-none absolute inset-0 bg-white/15 dark:bg-black/30" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-12">
          {eyebrow && (
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{eyebrow}</p>
          )}
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* rows */}
        <div className="space-y-16">
          {items.map((item, i) => {
            const imageOnRight = alternating ? i % 2 === 0 : true;

            // support string or imported icon
            const Bullet = () =>
              bulletIcon ? (
                <Image
                  src={typeof bulletIcon === 'string' ? bulletIcon : bulletIcon}
                  alt=""
                  width={20}
                  height={20}
                  className="mt-1"
                />
              ) : null;

            return (
              <div key={item.id ?? i} className="flex flex-col lg:flex-row items-center gap-8">
                {/* text */}
                <div
                  className={
                    imageOnRight ? 'lg:order-1 w-full lg:w-1/2' : 'lg:order-2 w-full lg:w-1/2'
                  }
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>

                  {Array.isArray(item.points) && item.points.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {item.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <Bullet />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.href && (
                    <Link
                      href={item.href}
                      className="mt-3 inline-block text-sm font-medium text-blue-600 dark:text-blue-400"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>

                {/* image */}
                <div
                  className={
                    imageOnRight ? 'lg:order-2 w-full lg:w-1/2' : 'lg:order-1 w-full lg:w-1/2'
                  }
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.alt ?? 'Kiosk mockup'}
                      className="w-full rounded-xl shadow-md"
                      priority={i === 0}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

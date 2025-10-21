import Image from 'next/image';
import Link from 'next/link';

/**
 * BlogPreview
 * props:
 * - eyebrow?: string
 * - title: string
 * - subtitle?: string
 * - cta?: { label: string, href: string }
 * - posts: Array<{
 *     image: string|StaticImageData,
 *     category?: string,
 *     title: string,
 *     description?: string,
 *     author?: string,
 *     authorAvatar?: string|StaticImageData,
 *     date?: string,
 *     href?: string
 *   }>
 */
export default function BlogPreview({ eyebrow, title, subtitle, cta, posts = [] }) {
  return (
    <section className="w-full bg-white dark:bg-[#0C0E12] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            {eyebrow && (
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">
                {eyebrow}
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            {subtitle && <p className="text-gray-600 dark:text-gray-300 mt-2">{subtitle}</p>}
          </div>
          {cta?.label && (
            <Link
              href={cta.href || '#'}
              className="mt-4 sm:mt-0 text-white text-sm font-medium px-4 py-2 rounded-md btn-primary-color"
            >
              {cta.label}
            </Link>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white dark:bg-[#1D2939] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition hover:shadow-md"
            >
              <Link href={post.href || '#'} className="block focus:outline-none">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                    priority={i === 0}
                  />
                )}
                <div className="p-4">
                  {post.category && (
                    <span className="text-xs text-blue-600 font-semibold">{post.category}</span>
                  )}
                  <h3 className="text-md font-semibold mt-1 text-gray-900 dark:text-white group-hover:underline">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {post.description}
                    </p>
                  )}
                  {/* Author */}
                  {(post.author || post.date) && (
                    <div className="flex items-center gap-2 mt-4">
                      {post.authorAvatar && (
                        <Image
                          src={post.authorAvatar}
                          alt={post.author || 'Author'}
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded-full"
                        />
                      )}
                      {post.author && (
                        <span className="text-xs text-gray-900 dark:text-white">{post.author}</span>
                      )}
                      {post.date && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          • {post.date}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

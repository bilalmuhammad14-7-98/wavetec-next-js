import Image from 'next/image';

// Blog Thumbnails & Avatars
import BlogImage1 from '@/public/assets/blog-one.png';
import BlogImage2 from '@/public/assets/blog-two.png';
import BlogImage3 from '@/public/assets/blog-three.png';

import Avatar1 from '@/public/assets/blog-avatar-one.png';
import Avatar2 from '@/public/assets/blog-avatar-two.png';
import Avatar3 from '@/public/assets/blog-avatar-three.png';

export default function BlogSection() {
  const posts = [
    {
      category: 'Featured',
      title: 'Decreased Wait Times',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula.',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      avatar: Avatar1,
      image: BlogImage1,
    },
    {
      category: 'Product',
      title: 'Improved Accuracy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      avatar: Avatar2,
      image: BlogImage2,
    },
    {
      category: 'Software Engineering',
      title: 'Reduced Point of Contact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      avatar: Avatar3,
      image: BlogImage3,
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0C0E12] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">
              Our blog
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Latest blog posts
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Tools and strategies modern teams need to help their companies grow.
            </p>
          </div>

          <button className="mt-4 sm:mt-0 text-white text-sm font-medium px-4 py-2 rounded-md btn-primary-color cursor-pointer">
            View all posts
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1D2939] rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
                priority={index === 0}
              />
              <div className="p-4">
                <span className="text-xs text-blue-600 font-semibold">{post.category}</span>
                <h3 className="text-md font-semibold mt-1 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{post.description}</p>

                {/* Author */}
                <div className="flex items-center gap-2 mt-4">
                  <Image src={post.avatar} alt={post.author} className="w-6 h-6 rounded-full" />
                  <span className="text-xs text-gray-900 dark:text-white">{post.author}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">• {post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

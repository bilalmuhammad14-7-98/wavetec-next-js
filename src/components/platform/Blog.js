'use client';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/assets/blog-one.png',
    tag: 'Design',
    readTime: '8 min read',
    author: 'Olivia Rhye',
    date: '20 Jan 2025',
    avatar: '/assets/blog-one.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/assets/blog-one.png',
    tag: 'Design',
    readTime: '8 min read',
    author: 'Phoenix Baker',
    date: '19 Jan 2025',
    avatar: '/assets/blog-one.png',
  },
];

export default function BlogSection() {
  return (
    <div className="dark:bg-[#0C0E12]">
      <section className="py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          {/* Left Panel */}
          <div className="md:w-1/3 space-y-2">
            <p className="text-base text-[#004EEB] dark:text-[#CECFD2] font-semibold">Latest</p>
            <h2 className="text-4xl font-semibold text-[#181D27] dark:text-[#F7F7F7]">
              From the blog
            </h2>
            <p className="text-lg text-[#535862] dark:text-[#94979C]">
              The latest industry news, interviews, technologies, and resources.
            </p>
            <button className="mt-4 px-4 py-2 text-base font-semibold text-white rounded-md btn-primary-color cursor-pointer">
              View all posts
            </button>
          </div>

          {/* Blog Cards */}
          <div className="md:w-2/3 grid gap-6 md:grid-cols-2">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-[240px] object-cover rounded-md"
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs w-[160px] bg-[#EFF8FF] border border-[#B2DDFF] dark:bg-[#0040C1] dark:border-[#0040C1] rounded-full">
                    <span className="m-1 bg-white dark:bg-[#0040C1] dark:text-[#84CAFF] text-xs text-[#004EEB] font-medium border border-[#B2DDFF] px-2 py-0.5 rounded-full">
                      {post.tag}
                    </span>
                    <span className="px-2 text-[#004EEB] dark:text-[#84CAFF] rounded-full">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold dark:text-[#F7F7F7] text-[#181D27] group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-[#535862] dark:text-[#94979C] text-base">{post.description}</p>

                  {/* Author info */}
                  <div className="flex items-center gap-2 mt-3">
                    <Image
                      src={post.avatar}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#181D27] dark:text-[#F7F7F7]">
                        {post.author}
                      </p>
                      <p className="text-sm text-[#535862] dark:text-[#94979C]">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

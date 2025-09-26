'use client';

import React from 'react';
import BlogCard from '../../components/shared/Card/BlogCard';
import Blog from '@/public/assets/blog.png';

const posts = [
  {
    image: Blog,
    category: 'Design',
    date: 'Jul 10, 2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Olivia Rhye',
  },
  {
    image: Blog,
    category: 'Design',
    date: 'Jul 12, 2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Pedro Duarte',
  },
  {
    image: Blog,
    category: 'Design',
    date: 'Jul 15, 2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Lois Vernon',
  },
  {
    image: Blog,
    category: 'Design',
    date: 'Jul 17, 2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'Alex Wildman',
  },
];

export default function CustomerSuccesStories() {
  return (
    <section className="py-16 bg-background">
      <h2 className="text-4xl font-semibold bg-card">View Our Customer Success Stories</h2>
      <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mt-2 mb-8 max-w-2xl">
        See How Leading Healthcare Providers Transform Patient Journeys with Wavetec’s customized
        healthcare solutions
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      <div className="mt-10 text-end">
        <button className="w-full sm:w-auto cursor-pointer px-6 py-3 text-white text-sm font-semibold rounded-lg btn-primary-color">
          View all posts
        </button>
      </div>
    </section>
  );
}

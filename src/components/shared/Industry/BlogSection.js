'use client';

import React from 'react';
import BlogCard from '../Card/BlogCard';

export default function BlogSection({ value }) {
  return (
    <section className="py-16 bg-background">
      <h2 className="text-4xl font-semibold bg-card">{value?.title}</h2>
      <p className="text-muted-foreground text-sm sm:text-base lg:text-xl mt-2 mb-8 max-w-2xl">
        {value?.description}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {value?.posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>

      <div className="mt-10 text-end">
        <button className="w-full sm:w-auto cursor-pointer px-6 py-3 text-white text-sm font-semibold rounded-lg btn-primary-color">
          {value?.button?.label}
        </button>
      </div>
    </section>
  );
}

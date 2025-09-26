'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';

export default function BlogCard({ image, category, date, author, title }) {
  return (
    <div className="rounded-sm overflow-hidden cursor-pointer group">
      {/* Image Section */}
      <div className="relative h-[380px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-5 font-semibold flex justify-between text-white text-sm"
          style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        >
          <span>{author}</span>
          <span>{date}</span>
        </div>
      </div>

      {/* Text Section */}
      <div className="py-4 px-2">
        <h3 className="text-lg font-semibold bg-card mt-1 leading-snug">{title}</h3>
        <p className="text-base text-muted-foreground mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a
          href="#"
          className="mt-3 flex items-center gap-1 text-base text-accent font-semibold hover:underline"
        >
          Read post <MdOutlineArrowOutward />
        </a>
      </div>
    </div>
  );
}

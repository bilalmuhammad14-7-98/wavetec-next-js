// src/components/layout/Footer.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../Container/Container';
import ButtonOne from '../Buttons/ButtonOne';
import ButtonTwo from '../Buttons/ButtonTwo';

const sections = [
  {
    title: 'Product',
    links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
    badge: 'Solutions',
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Newsletter', 'Events', 'Help centre', 'Tutorials', 'Support'],
  },
  {
    title: 'Use cases',
    links: ['Startups', 'Enterprise', 'Government', 'SaaS centre', 'Marketplaces', 'Ecommerce'],
  },
  {
    title: 'Social',
    links: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribbble'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0040C1] dark:bg-gray-900 text-white px-4 md:px-16 py-10">
      <Container>
        {/* Top CTA */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Let’s get started on something great
          </h2>
          <p className="text-sm md:text-base mb-6 text-[#B2DDFF] dark:text-[#94979C]">
            Join over 4,000+ companies already growing with Wavetec.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ButtonOne
              title={'Chat to us'}
              icon={null}
              className={'px-5 !py-2 rounded-lg font-semibold'}
            />
            <ButtonTwo
              title={'Get started'}
              className="btn-primary-color border hover:border !py-2 border-[#155EEF] cursor-pointer text-white px-5  rounded-lg font-semibold"
            />
          </div>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-sm text-white/90 mb-12 px-4">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="font-semibold text-base mb-3 text-[#84CAFF] dark:text-[#94979C]">
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="flex items-center text-[#B2DDFF] dark:text-[#CECFD2] font-medium cursor-pointer hover:underline"
                  >
                    {link}
                    {section.badge === link && (
                      <span className="ml-2 text-xs bg-white text-blue-700 px-1 rounded">New</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-100 px-4">
          <Image
            src="/assets/logo-white.png"
            alt="Logo"
            width={100}
            height={24}
            className="h-6 w-auto"
            priority
          />
          <span className="text-center sm:text-left">© 2025 Wavetec. All rights reserved.</span>
        </div>
      </Container>
    </footer>
  );
}

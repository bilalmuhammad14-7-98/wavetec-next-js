'use client';

import Image from 'next/image';
import { IoPlayCircleOutline } from 'react-icons/io5';

import Vector from '@/public/assets/n.png';
import Jira from '@/public/assets/jira.png';
import Slack from '@/public/assets/slack.png';
import Zapier from '@/public/assets/zapier.png';
import ButtonOne from '../shared/Buttons/ButtonOne';
import ButtonTwo from '../shared/Buttons/ButtonTwo';

const icons = [
  { src: Vector, alt: 'Notion' },
  { src: Slack, alt: 'Slack' },
  { src: Jira, alt: 'Google Drive' },
  { src: Vector, alt: 'Intercom' },
  { src: Jira, alt: 'Jira' },
  { src: Vector, alt: 'Dropbox' },
  { src: Zapier, alt: 'Stripe' },
  { src: Zapier, alt: 'Zapier' },
];

export default function IntegrationsSection() {
  return (
    <section className="py-20 bg-white dark:bg-[#0C0E12]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="max-w-xl">
          <span className="text-sm font-medium text-[#004EEB] bg-[#EFF8FF] border border-[#B2DDFF] px-3 py-1 rounded-full">
            Integrations
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-[#181D27] dark:text-[#F7F7F7]">
            Customer Flow Management Solutions
          </h2>
          <p className="text-[#535862] text-xl dark:text-[#94979C] mt-4">
            To meet current client expectations, banks and financial institutions are investing in
            digital capabilities. Retail banking is now increasingly focused on the acquisition of
            new customers through physical branches.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 mt-8 mb-12">
            <ButtonOne
              title={'Demo'}
              icon={<IoPlayCircleOutline className="mr-2 h-5 w-5 text-[#A4A7AE]" />}
              className="flex items-center justify-center"
            />
            <ButtonTwo title={'Sign up'} />
          </div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-4 gap-6">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] flex items-center justify-center bg-gray-100 rounded-xl shadow-sm"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

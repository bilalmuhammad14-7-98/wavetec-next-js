'use client';

import Image from 'next/image';
import ContactImage from '@/public/assets/contact-image.png';
import { useEffect } from 'react';

const productOptions = [
  'WhatsApp Queuing',
  'Queue Management System',
  'WhatsApp Appointment',
  'WhatsApp Marketing Conversation',
  'Digital Signage Solution',
  'Other',
];

export default function Contact({ value }) {
  useEffect(() => {
    // Check if script already added
    if (
      !document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/244100998.js"]')
    ) {
      const script = document.createElement('script');
      script.src = 'https://js-na2.hsforms.net/forms/embed/244100998.js';
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <section className="w-full dark:bg-[#0C0E12] pt-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 border-b border-[#D5D7DA]">
        {/* Left: Image */}
        <div className="order-2 lg:order-1">
          <div className="relative h-full overflow-hidden">
            <Image
              src={value?.images?.[0]}
              alt="Contact"
              width={600}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Form */}
        <div className="order-1 lg:order-2 flex w-full flex-col justify-center px-0 lg:px-6">
          {/* Header */}
          {/* <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#181D27] dark:text-[#F7F7F7] leading-tight">
              Let’s level up your <br /> brand, together
            </h2>
            <p className="mt-2 text-lg text-[#535862] dark:text-[#94979C]">
              You can reach us anytime via{' '}
              <a href="mailto:sales@wavetec.com" className="text-[#004EEB] underline">
                sales@wavetec.com
              </a>
            </p>
          </div> */}

          {/* Contact Form */}
          <form className="w-full space-y-6">
            <div
              className="hs-form-frame"
              data-region="na2"
              data-form-id="ccfdc585-4204-4133-81ff-a5653b089f6a"
              data-portal-id="244100998"
            ></div>
            {/* Name Fields */}
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="fname"
                  className="mb-1 block text-sm font-medium text-[#414651] dark:text-[#CECFD2]"
                >
                  First name<span className="text-[#155EEF]">*</span>
                </label>
                <input
                  id="fname"
                  type="text"
                  required
                  placeholder="First name"
                  className="w-full rounded-md border border-[#D5D7DA] p-2 px-2 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white dark:placeholder-[#85888E]"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="mb-1 block text-sm font-medium text-[#414651] dark:text-white"
                >
                  Last name<span className="text-[#155EEF]">*</span>
                </label>
                <input
                  id="lname"
                  type="text"
                  required
                  placeholder="Last name"
                  className="w-full rounded-md border border-[#D5D7DA] p-2 px-2 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white dark:placeholder-[#85888E]"
                />
              </div>
            </div> */}

            {/* Email */}
            {/* <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-[#414651] dark:text-white"
              >
                Email<span className="text-[#155EEF]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-md border border-[#D5D7DA] p-2 px-2 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white dark:placeholder-[#85888E]"
              />
            </div> */}

            {/* Phone */}
            {/* <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-[#414651] dark:text-white"
              >
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-md border border-[#D5D7DA] p-2 px-2 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white dark:placeholder-[#85888E]"
              />
            </div> */}

            {/* Message */}
            {/* <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-[#414651] dark:text-white"
              >
                Message<span className="text-[#155EEF]">*</span>
              </label>
              <textarea
                id="message"
                required
                placeholder="Leave us a message..."
                className="h-28 w-full resize-none rounded-md border border-[#D5D7DA] p-2 px-2 outline-none focus:ring-2 focus:ring-blue-500 dark:border-[#373A41] dark:text-white dark:placeholder-[#85888E]"
              />
            </div> */}

            {/* Products */}
            {/* <div>
              <label className="mb-4 block text-base font-medium text-[#414651] dark:text-white">
                Products<span className="text-[#155EEF]">*</span>
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {productOptions.map((option) => (
                  <label key={option} className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                    />
                    <span className="text-base text-[#414651] dark:text-[#CECFD2]">{option}</span>
                  </label>
                ))}
              </div>
            </div> */}

            {/* Submit */}
            {/* <button
              type="submit"
              className="w-full cursor-pointer rounded-md py-2 font-medium text-white btn-primary-color transition"
            >
              Submit
            </button> */}
          </form>
        </div>
      </div>
    </section>
  );
}

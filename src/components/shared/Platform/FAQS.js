'use client';

import { useState, useMemo } from 'react';
import { GoPlusCircle } from 'react-icons/go';
import { FiMinusCircle } from 'react-icons/fi';
import Image from 'next/image';

export default function FAQs({ value, value2 }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Helper to clean and split text lines safely
  const splitByLineBreaks = (str = '') =>
    str
      .split(/\n+/)
      .filter(Boolean)
      .map((item) => item.replace(/&nbsp;/g, '').trim(','));

  // Memoized processed data to prevent recalculation on every render
  const data = useMemo(() => splitByLineBreaks(value?.text), [value]);
  const data2 = useMemo(() => splitByLineBreaks(value2?.text), [value2]);

  // Extract FAQ blocks cleanly
  const faqs = useMemo(
    () =>
      value?.blocks
        ?.filter((block) => block.tag === 'vc_toggle')
        .map((block) => ({
          question: block.attrs?.title || '',
          answer: block.text || '',
        })) || [],
    [value]
  );

  return (
    <div className="dark:bg-[#0C0E12] pb-12">
      {/* FAQ Section */}
      <section className="py-16">
        {data?.[0] && (
          <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#181D27] dark:text-[#F7F7F7]">
            {data[0]}
          </h2>
        )}
        {data?.[1] && (
          <p className="text-center text-lg text-[#535862] dark:text-[#94979C] mt-2 mb-8">
            {data[1]}
          </p>
        )}

        <div className="space-y-4 max-w-3xl mx-auto px-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#E9EAEB] dark:border-gray-700 pb-4 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-[#181D27] dark:text-[#F7F7F7] font-semibold text-base py-4 focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <FiMinusCircle color="#A4A7AE" className="text-xl shrink-0" />
                ) : (
                  <GoPlusCircle color="#A4A7AE" className="text-xl shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="text-[#535862] dark:text-[#94979C] text-md mt-1 pr-3 transition-all duration-300 ease-in-out">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-[#FAFAFA] dark:bg-[#13161B] rounded-2xl h-auto py-12 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
        {value2?.images?.[0] && (
          <Image
            src={value2.images[0]}
            alt={value2?.altText || 'CTA Image'}
            width={120}
            height={50}
            className="object-contain"
            loading="lazy"
          />
        )}

        <div>
          {data2?.[0] && (
            <div className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7] mb-1">
              {data2[0]}
            </div>
          )}
          {data2?.[1] && <p className="text-lg text-[#535862] dark:text-[#94979C]">{data2[1]}</p>}
        </div>

        {value2?.buttons?.[0]?.text && (
          <button className="btn-primary-color text-white text-base font-semibold py-2 px-4 rounded-lg mt-4 transition-colors hover:opacity-90">
            {value2.buttons[0].text}
          </button>
        )}
      </div>
    </div>
  );
}

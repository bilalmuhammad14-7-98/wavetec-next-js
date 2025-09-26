'use client';

import { useState } from 'react';
import { GoPlusCircle } from 'react-icons/go';
import { FiMinusCircle } from 'react-icons/fi';
import Image from 'next/image';

import Avatar from '@/public/assets/avatar-group.png';

const faqData = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can change your plan at any time from your account settings.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'You can cancel your subscription anytime. Your plan will remain active until the end of the billing period.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can add custom information like company name, tax ID, or address from the billing settings.',
  },
  {
    question: 'How does billing work?',
    answer:
      'We offer monthly and yearly billing options. You can choose your preference during checkout.',
  },
  {
    question: 'How do I change my account email?',
    answer: 'You can update your email address from your profile settings.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dark:bg-[#0C0E12] pb-12">
      {/* FAQ Section */}
      <section className="py-16">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-[#181D27] dark:text-[#F7F7F7]">
          Frequently asked questions
        </h2>
        <p className="text-center text-lg text-[#535862] dark:text-[#94979C] mt-2 mb-8">
          Everything you need to know about the product and billing.
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#E9EAEB] dark:border-gray-700 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer w-full text-left text-[#181D27] dark:text-[#F7F7F7] font-semibold text-base py-4 focus:outline-none"
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <FiMinusCircle color="#A4A7AE" className="text-xl" />
                ) : (
                  <GoPlusCircle color="#A4A7AE" className="text-xl" />
                )}
              </button>
              <div
                className={`text-[#535862] dark:text-[#94979C] text-md mt-1 pr-3 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-[#FAFAFA] dark:bg-[#13161B] rounded-2xl h-[300px] max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
        <Image src={Avatar} alt="Avatar" width={120} height={50} />
        <div className="text-center">
          <div className="text-xl font-semibold text-[#181D27] dark:text-[#F7F7F7] mb-1">
            Still have questions?
          </div>
          <p className="text-lg text-[#535862] dark:text-[#94979C]">
            Can’t find the answer you’re looking for? Please chat to our friendly team.
          </p>
        </div>
        <button className="btn-primary-color cursor-pointer text-white text-base font-semibold py-2 px-4 rounded-lg mt-4">
          Get in touch
        </button>
      </div>
    </div>
  );
}

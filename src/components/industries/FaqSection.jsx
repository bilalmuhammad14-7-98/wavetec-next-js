export default function FaqSection() {
  const faqs = [
    {
      question: 'How do self service solutions work?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut.',
    },
    {
      question: 'Can I Also Place My Self-Service Kiosk Outdoors?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut.',
    },
    {
      question: 'How does self service advantage customers?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut.',
    },
    {
      question: 'I’m Not a Restaurant. Does My Business Need Self-Service Kiosks, Too?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut.',
    },
    {
      question: 'What Type Of Payment Self-Order Kiosk Accepts? Do Kiosks Accept Cash?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut.',
    },
    {
      question: 'Where can our Self Service kiosks be deployed?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut.',
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#0C0E12] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-left max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Your Questions, Answered!
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Everything you need to know about the product and billing. Can’t find the answer you’re
            looking for? Please chat to our friendly team.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-2">
              <div className="text-md font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Prompt */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-6 bg-gray-50 dark:bg-[#1B2431] rounded-lg border border-gray-200 dark:border-gray-700">
          <div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              Still have questions?
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Can’t find the answer you’re looking for? Please chat to our friendly team.
            </p>
          </div>
          <button className="mt-2 sm:mt-0 px-4 py-2 text-white text-sm font-medium rounded-md btn-primary-color cursor-pointer">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}

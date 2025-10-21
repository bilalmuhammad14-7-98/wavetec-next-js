'use client';

export default function Email({ value }) {
  function splitByLineBreaks(str) {
    return str?.split(/\n+/).filter(Boolean);
  }
  const data = splitByLineBreaks(value?.text)?.map((item) => item.replace(/&nbsp;/g, '').trim(','));
  return (
    <section className="py-20 dark:bg-[#13161B]">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Heading Section */}
        <div className="text-center">
          <h2 className="font-semibold text-[#181D27] text-3xl md:text-4xl dark:text-[#F7F7F7]">
            {data?.[0]}
          </h2>
          <p className="max-w-2xl mt-2 text-lg text-[#535862] dark:text-[#94979C] mx-auto">
            {data?.[1]}
          </p>
        </div>

        {/* Input + Button */}
        <div className="w-full flex flex-col sm:flex-row items-start justify-center gap-4">
          {value?.blocks?.filter((blog) => blog?.tag === 'vc_raw_html') && (
            <div className="w-full md:w-[400px]">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full h-12 p-3 lg:px-3 rounded-lg 
                           border border-[#717680] 
                           dark:border-[#373A41] dark:bg-none 
                           dark:placeholder:text-white 
                           px-4 text-base text-[#4A4D54] 
                           outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-[#535862] dark:text-[#94979C] mt-2">
                We care about your data in our privacy policy.
              </p>
            </div>
          )}
          <button
            type="submit"
            className="w-full cursor-pointer sm:w-auto h-12 px-6 rounded-lg text-white font-semibold btn-primary-color"
          >
            {value?.buttons?.[0]?.text}
          </button>
        </div>
      </div>
    </section>
  );
}

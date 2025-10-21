// src/components/industries/IndustryIntro.jsx
export default function IndustryIntro({ value }) {
  function splitByLineBreaks(str) {
    return str?.split(/\n+/).filter(Boolean);
  }

  const data = splitByLineBreaks(value?.text).map((item) => item.replace(/&nbsp;/g, '').trim());
  console.log('Solution IndustryIntro Value:', data);
  return (
    <section className="relative w-full bg-[#175CD3] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-14 md:py-20">
        <p className="font-semibold leading-none text-sm sm:text-base tracking-wide">{data?.[0]}</p>

        <h1 className="mt-3 font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl tracking-tight">
          {data?.[1] || 'Transforming Customer Experiences with Innovative Solutions'}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed">
          {data?.[2] ||
            'Discover how our cutting-edge technologies are revolutionizing customer interactions across various industries. From AI-driven insights to seamless digital platforms, we empower businesses to deliver exceptional service and foster lasting relationships with their customers.'}
        </p>
      </div>
    </section>
  );
}

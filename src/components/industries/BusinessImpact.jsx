export default function BusinessImpact({ value }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Heading + intro */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181D27] dark:text-white">
          {value?.blocks?.[0]?.text || 'Business Impact & Key Statistics'}
        </h2>
        <p className="mt-3 text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {value?.blocks?.[1]?.text ||
            'Discover the transformative impact of our solutions through key statistics that highlight improved customer satisfaction, increased operational efficiency, and significant cost savings for businesses across various industries.'}
        </p>

        {/* Blue pill with stats (no borders) */}
        <div className="mt-8 rounded-2xl bg-[#175CD3] text-white px-6 py-8 sm:px-10 sm:py-12">
          <div className="grid grid-cols-1 gap-y-8 text-center md:grid-cols-3">
            {/* {stats.map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-semibold leading-none tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm sm:text-base font-medium opacity-95">{s.label}</div>
              </div>
            ))} */}
            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl font-semibold leading-none tracking-tight">
                {value?.blocks?.[2]?.text || '95%'}
              </div>
              <div className="text-sm sm:text-lg font-medium opacity-95">
                {value?.blocks?.[3]?.text}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl font-semibold leading-none tracking-tight">
                {value?.blocks?.[4]?.text || '95%'}
              </div>
              <div className="text-sm sm:text-lg font-medium opacity-95">
                {value?.blocks?.[5]?.text}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl sm:text-6xl font-semibold leading-none tracking-tight">
                {value?.blocks?.[6]?.text || '95%'}
              </div>
              <div className="text-sm sm:text-lg font-medium opacity-95">
                {value?.blocks?.[7]?.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

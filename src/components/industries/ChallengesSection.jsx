// src/components/industries/ChallengesSection.jsx
import Image from 'next/image';
import ICON from '../../../public/assets/correct-icon.png';

export default function ChallengesSection({ value, value2 }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181D27] dark:text-white">
          {value?.blocks?.[0]?.text || 'Industry Challenges We Address'}
        </h2>

        <p className="mt-3 max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300">
          {value?.blocks?.[1]?.text ||
            'Wavetec’s integrated CX solutions enable banks to achieve measurable improvements in efficiency, compliance, and customer satisfaction across every branch and digital channel.'}
        </p>

        {/* items — no borders between columns */}
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {/* {items.map((item, i) => (
          
          ))} */}
          <div>
            {/* icon — no extra border/shadow; your PNG/SVG already has styling */}
            <div
              className="grid place-items-start rounded-xl "
              // style={{ width: iconSize, height: iconSize }}
              aria-hidden="true"
            >
              <Image
                src={ICON}
                alt="correct-icon"
                // alt={item.iconAlt || ''}
                width={48}
                height={48}
                className="text-leftobject-contain"
                // priority={i < 3}
              />
            </div>

            <h3 className="mt-4  font-semibold text-lg text-[#181D27] dark:text-white">
              {value2?.blocks?.[0]?.text}
            </h3>
            <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
              {value2?.blocks?.[1]?.text}
            </p>
          </div>
          <div>
            {/* icon — no extra border/shadow; your PNG/SVG already has styling */}
            <div
              className="grid place-items-start rounded-xl "
              // style={{ width: iconSize, height: iconSize }}
              aria-hidden="true"
            >
              <Image
                src={ICON}
                alt="correct-icon"
                // alt={item.iconAlt || ''}
                width={48}
                height={48}
                className="text-leftobject-contain"
                // priority={i < 3}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#181D27] dark:text-white">
              {value2?.blocks?.[2]?.text}
            </h3>
            <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
              {value2?.blocks?.[3]?.text}
            </p>
          </div>
          <div>
            {/* icon — no extra border/shadow; your PNG/SVG already has styling */}
            <div
              className="grid place-items-start rounded-xl "
              // style={{ width: iconSize, height: iconSize }}
              aria-hidden="true"
            >
              <Image
                src={ICON}
                alt="correct-icon"
                // alt={item.iconAlt || ''}
                width={48}
                height={48}
                className="text-leftobject-contain"
                // priority={i < 3}
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[#181D27] dark:text-white">
              {value2?.blocks?.[4]?.text}
            </h3>
            <p className="mt-2 text-base leading-6 text-slate-600 dark:text-slate-300">
              {value2?.blocks?.[5]?.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Logomark from '@/public/assets/du-logo.png';
import Avatar from '@/public/assets/avatarimage.png';

export default function Testimonial() {
  return (
    <section className="bg-white dark:bg-[#0C0E12] py-10 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
        {/* Company Logo */}
        <div className="flex items-center justify-center gap-2">
          <Image src={Logomark} alt="Company Logo" className="w-15 h-15 object-contain" priority />
        </div>

        {/* Testimonial Text */}
        <p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-white leading-relaxed">
          We&apos;ll no doubt be working with Wavetec on future projects. Finding the right company
          to work with is a daunting task, but we absolutely found the right team and haven’t looked
          back.
        </p>

        {/* Avatar */}
        <div className="flex flex-col items-center space-y-1 mt-4">
          <Image
            src={Avatar}
            alt="Amélie Laurent"
            className="w-12 h-12 rounded-full object-cover"
          />
          <p className="font-semibold text-gray-900 dark:text-white">Amélie Laurent</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Product Manager, Wildcrafted</p>
        </div>
      </div>
    </section>
  );
}

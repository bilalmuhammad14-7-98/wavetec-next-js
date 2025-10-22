// import Companies from '../components/home/Companies';
// import Container from '../components/shared/Container/Container';
// import BlogSection from '../components/shared/Industry/BlogSection';
// import Hero from '../components/shared/Industry/Hero';
// import heroImage from '@/public/assets/hero.jpg';
// import Blog from '@/public/assets/blog.png';
// import ContentWithMedia from '../components/shared/Industry/ContentWithMedia';
// import BenefitsSection from '../components/shared/Industry/BenefitsSection';
// import Email from '../components/shared/Contact/Email';
// import Contact from '../components/shared/Contact/Contact';
// import FeatureSection from '../components/shared/Industry/FeatureSection';
// import Platform from './industries/platform/page';

// export default function Home() {
//   const data = {
//     hero: {
//       title: 'Digital Banking Solutions',
//       description:
//         'Streamline your customer journey with Wavetec bank branch management solutions and offer a superior branch banking customer experience for all.',
//       bgImage: '/public/assets/background.png',
//       primary: { label: 'Sign up', link: '#' },
//       secondary: { label: 'Demo', link: '#' },
//       heroImage: heroImage,
//       heroBadge: { label: "What's new?", info: 'Instantly issue virtual cards', link: '#' },
//     },
//     blogs: {
//       title: 'From the blog',
//       description: 'The latest industry news, interviews, technologies, and resources.',
//       posts: [
//         {
//           image: Blog,
//           category: 'Design',
//           date: 'Jul 10, 2025',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//           author: 'Olivia Rhye',
//         },
//         {
//           image: Blog,
//           category: 'Design',
//           date: 'Jul 12, 2025',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//           author: 'Pedro Duarte',
//         },
//         {
//           image: Blog,
//           category: 'Design',
//           date: 'Jul 15, 2025',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//           author: 'Lois Vernon',
//         },
//         {
//           image: Blog,
//           category: 'Design',
//           date: 'Jul 17, 2025',
//           title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//           author: 'Alex Wildman',
//         },
//       ],
//       button: {
//         label: 'View all posts',
//         link: '#',
//       },
//     },
//     contentWithMedias: {
//       title: 'Meet WhatsApp Appointments, Our Brand New Solution',
//       description:
//         'To meet current client expectations, banks and financial institutions are investing in digital capabilities. Now make banking appointments through WhatsApp from anywhere.',
//       features: [
//         {
//           icon: '/assets/f-icon.png',
//           title: 'Lorem ipsum dolor sit amet',
//           description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut ligula.',
//         },
//         {
//           icon: '/assets/f2-icon.png',
//           title: 'Lorem ipsum dolor sit amet',
//           description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut ligula.',
//         },
//       ],
//       video: '/assets/video.mp4',
//     },
//     benefits: {
//       heading: ' Launch faster',
//       title: ' Benefits of Customer Journey Solutions for the Bank branch',
//       description:
//         'As banks are under extraordinary pressure to manage costs, progressive players are pushing for more advanced customer facing technologies.',
//       secondary: { label: 'Demo', link: '#' },
//       primary: { label: 'Get started', link: '#' },
//       bgImage: '/assets/blog.png',
//       stats: [
//         {
//           value: '400+',
//           title: 'Projects completed',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         },
//         {
//           value: '600%',
//           title: 'Return on investment',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         },
//         {
//           value: '10k',
//           title: 'Global',
//           description: 'Lorem ipsum , consectetur adipiscing elit.',
//         },
//       ],
//     },
//     features: {
//       heading: 'Features',
//       title: ' Customer Flow Management Solutions',
//       description:
//         'To meet current client expectations, banks and financial institutions are investing in digital capabilities. Retail banking is now increasingly focused on the acquisition of new customers through physical branches.',
//       image: '/assets/dummy.png',
//       stats: [
//         {
//           title: 'Pre-Arrival',
//           description:
//             'A customer decides to visit your bank branch and schedules an online appointment via your website or application. They select the branch, the time and the services required. They receive regular notifications updating them about the appointment.',
//           button: {
//             label: 'Learn More',
//             link: '#',
//           },
//         },
//         {
//           title: 'Arrival & Check In',
//           description: '',
//           button: {
//             label: 'Learn More',
//             link: '#',
//           },
//         },
//         {
//           title: 'Waiting & After Being Served',
//           description: '',
//           button: {
//             label: 'Learn More',
//             link: '#',
//           },
//         },
//       ],
//     },
//   };
//   return (
//     <div>
//       <Platform />

//       {/* <Container>
//         <Hero value={data?.['hero']} />
//         <Companies />
//         <BlogSection value={data?.['blogs']} />
//       </Container>
//       <ContentWithMedia value={data?.['contentWithMedias']} />
//       <BenefitsSection value={data?.['benefits']} />
//       <Container>
//         <FeatureSection value={data?.['features']} />
//         <Contact />
//         <Email />
//       </Container> */}
//     </div>
//   );
// }

'use client';
import BusinessImpact from '@/src/components/industries/BusinessImpact';
import CaseStudies from '@/src/components/industries/CaseStudies';
import ChallengesSection from '@/src/components/industries/ChallengesSection';
import DigitalSolutionsGrid from '@/src/components/industries/DigitalSolutionsGrid';
import IndustryIntro from '@/src/components/industries/IndustryIntro';
import IntegrationsShowcase from '@/src/components/industries/IntegrationsShowcase';
import SolutionCompanies from '@/src/components/industries/SloutionCompanies';
import SolutionHero from '@/src/components/industries/SolutionHero';
import TypesOfKiosks from '@/src/components/industries/TypesOfKiosks';
import FAQs from '@/src/components/platform/FAQs';
import Contact from '@/src/components/shared/Contact/Contact';
import Container from '@/src/components/shared/Container/Container';
import FeatureSection from '@/src/components/shared/Industry/FeatureSection';
import IndustryUseCases from '@/src/components/shared/Products/IndustryUseCases';
import { fetchPlatformDetails } from '@/src/lib/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useSelector } from 'react-redux';

function page() {
  const language = useSelector((state) => state.language.lang);
  const { data, isLoading } = useQuery({
    queryKey: ['solution', language],
    queryFn: () => fetchPlatformDetails(80339, language),
    staleTime: 1000 * 60 * 2, // ✅ Cache for 5 mins
    refetchOnWindowFocus: false,
  });
  const sections = data?.sections;

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  return (
    <>
      <SolutionHero value={sections?.[0]} />
      <Container>
        <SolutionCompanies value={sections?.[1]} />
      </Container>
      <IndustryIntro value={sections?.[2]} />
      <ChallengesSection value={sections?.[3]} value2={sections?.[4]} />
      <Container>
        <div className="h-[1px] bg-[#E9EAEB] my-2"></div>
      </Container>
      <TypesOfKiosks value={sections?.[5]} />
      <Container>
        <div className="h-[1px] bg-[#E9EAEB] my-2"></div>
      </Container>
      <BusinessImpact value={sections?.[6]} />
      <Container>
        <div className="h-[1px] bg-[#E9EAEB] my-2"></div>
      </Container>
      <DigitalSolutionsGrid value={sections?.[7]} />
      <IntegrationsShowcase value={sections?.[8]} />
      <Container>
        {/* <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}> */}
        <FeatureSection value={sections?.[9]} value2={sections?.[10]} />
        {/* </Suspense> */}
      </Container>
      <CaseStudies value={sections?.[11]} />
      <Container>
        <FAQs value={sections?.[12]} value2={sections?.[13]} />
        <Contact value={sections?.[14]} />
      </Container>
    </>
  );
}

export default page;

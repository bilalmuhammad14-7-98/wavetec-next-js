'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { fetchPlatformDetails } from '@/src/lib/api';
import Container from '@/src/components/shared/Container/Container';

// ✅ Lazy load heavy sections
const Hero = dynamic(() => import('@/src/components/shared/Platform/Hero'), { ssr: false });
const FeatureSection = dynamic(() => import('@/src/components/shared/Industry/FeatureSection'), {
  ssr: false,
});
const BenefitsSection = dynamic(() => import('@/src/components/shared/Platform/BenefitsSection'), {
  ssr: false,
});
const ContentWithLogos = dynamic(
  () => import('@/src/components/shared/Platform/ContentWithLogos'),
  { ssr: false }
);
const FAQs = dynamic(() => import('@/src/components/shared/Platform/FAQS'), { ssr: false });
const BlogSection = dynamic(() => import('@/src/components/shared/Platform/BlogSection'), {
  ssr: false,
});
const Contact = dynamic(() => import('@/src/components/shared/Contact/Contact'), { ssr: false });
const Email = dynamic(() => import('@/src/components/shared/Contact/Email'), { ssr: false });

function Platform() {
  const language = useSelector((state) => state.language.lang);

  const { data, isLoading } = useQuery({
    queryKey: ['platform', language],
    queryFn: () => fetchPlatformDetails(80033, language),
    staleTime: 1000 * 60 * 2, // ✅ Cache for 5 mins
    refetchOnWindowFocus: false,
  });

  const sections = data?.sections;

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="overflow-x-hidden">
      <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
        <Hero value={sections?.[0]} />
      </Suspense>

      <Container>
        <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
          <FeatureSection value={sections?.[1]} value2={sections?.[2]} />
        </Suspense>
      </Container>

      <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
        <BenefitsSection value={sections?.[3]} />
      </Suspense>

      <Container>
        <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
          <ContentWithLogos value={sections?.[4]} />
          <FAQs value={sections?.[5]} value2={sections?.[6]} />
          <BlogSection value={sections?.[7]} />
          <Contact value={sections?.[8]} />
          <Email value={sections?.[9]} />
        </Suspense>
      </Container>
    </div>
  );
}

export default Platform;

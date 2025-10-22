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

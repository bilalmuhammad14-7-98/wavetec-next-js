import Benefits from '@/src/components/platform/Benefits';
import BlogSection from '@/src/components/platform/Blog';
import CustomerFlow from '@/src/components/platform/CustomerFlow';
import FAQs from '@/src/components/platform/FAQs';
import Hero from '@/src/components/platform/Hero';
import IntegrationsSection from '@/src/components/platform/Integration';
import Contact from '@/src/components/shared/Contact/Contact';
import Email from '@/src/components/shared/Contact/Email';
import Container from '@/src/components/shared/Container/Container';
import React from 'react';

function Platform() {
  return (
    <div>
      <Hero />
      <Container>
        <CustomerFlow />
      </Container>
      <Benefits />
      <Container>
        <IntegrationsSection />
        <FAQs />
        <BlogSection />
        <Contact />
        <Email />
      </Container>
    </div>
  );
}

export default Platform;

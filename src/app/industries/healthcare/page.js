import CustomerSuccesStories from '@/src/components/healthcare/CustomerSuccesStories';
import HealthBenefits from '@/src/components/healthcare/HealthBenefits';
import HealthCareManagement from '@/src/components/healthcare/HealthCareManagement';
import HealthCustomerFlow from '@/src/components/healthcare/HealthCustomerFlow';
import HealthSolution from '@/src/components/healthcare/HealthSolution';
import Hero from '@/src/components/healthcare/Hero';
import Companies from '@/src/components/home/Companies';
import Contact from '@/src/components/shared/Contact/Contact';
import Email from '@/src/components/shared/Contact/Email';
import Container from '@/src/components/shared/Container/Container';
import React from 'react';

function HealthCare() {
  return (
    <div>
      <Container>
        <Hero />
        <Companies />
      </Container>
      <HealthCareManagement />
      <Container>
        <HealthCustomerFlow />
      </Container>
      <HealthBenefits />
      <Container>
        <HealthSolution />
        <CustomerSuccesStories />
        {/* <Contact />
        <Email /> */}
      </Container>
    </div>
  );
}

export default HealthCare;

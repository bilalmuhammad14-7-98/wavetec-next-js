import Contact from '@/src/components/shared/Contact/Contact';
import Email from '@/src/components/shared/Contact/Email';
import Container from '@/src/components/shared/Container/Container';
import CustomerExperience from '@/src/components/spectra/CustomerExperience';
import EmpowerIndusries from '@/src/components/spectra/EmpowerIndustries';
import Hero from '@/src/components/spectra/Hero';
import PredictCustomerNeeds from '@/src/components/spectra/PredictCustomerNeeds';
import SpectraBenefits from '@/src/components/spectra/SpectraBenefits';
import React from 'react';

function Spectra() {
  return (
    <div>
      <Hero />
      <CustomerExperience />
      <PredictCustomerNeeds />
      <SpectraBenefits />
      <EmpowerIndusries />
      <Container>
        <Contact />
      </Container>
      <Email />
    </div>
  );
}

export default Spectra;

import Container from '../../components/shared/Container/Container';
import Companies from '../../components/home/Companies';
import HeroSection from '../../components/telco/HeroSection';
import SelfService from '../../components/telco/SelfService';
import Testimonial from '../../components/telco/Testimonial';
import TypesOfKiosks from '../../components/telco/TypesOfKiosks';
import IndustriesSection from '../../components/telco/IndustriesSection';
import CaseStudies from '../../components/telco/CaseStudies';
import BlogSection from '../../components/telco/BlogSection';
import FaqSection from '../../components/telco/FaqSection';

export const revalidate = 60;

export default function TelcoPage() {
  const hero = {
    eyebrow: 'TELCO PRODUCT',
    heading: 'Self Service Kiosks help your business grow and thrive in the digital age',
    body: 'Learn how Wavetec’s self-service kiosks for cheque depositing, SIM dispensing & account opening can enable you and your customers to carry flexible and convenient transactions 24/7.',
    primary: { label: 'Get in touch', href: '/contact' },
    secondary: { label: 'Showreel', href: '#showreel' },

    // ✅ put your files in /public/assets/…
    bg: '/assets/bg2.png', // background image you added
    image: '/assets/telco-hero.png', // hero image you added
  };

  return (
    <div>
      <Container>
        <HeroSection data={hero} />
        <Companies />
        <SelfService />
        <Testimonial />
      </Container>
      <TypesOfKiosks />
      <IndustriesSection />
      <Container>
        <CaseStudies />
        <BlogSection />
        <FaqSection />
      </Container>
    </div>
  );
}

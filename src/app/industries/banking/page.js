import Companies from '../../../components/home/Companies';
import BlogSection from '../../../components/industries/BlogSection';
import FaqSection from '../../../components/industries/FaqSection';
import HeroMain from '../../../components/industries/HeroMain';
import IndustriesSection from '../../../components/industries/IndustriesSection';
import SelfService from '../../../components/industries/SelfService';
import Testimonial from '../../../components/industries/Testimonial';
import TypesOfKiosks from '../../../components/industries/TypesOfKiosks';
import Container from '../../../components/shared/Container/Container';
import Email from '../../../components/shared/Contact/Email';
import Contact from '../../../components/shared/Contact/Contact';

export default function Banking() {
  return (
    <div>
      <HeroMain />
      {/* <Container> */}
      <Container>
        <Companies />
      </Container>
      {/* </Container> */}
      <SelfService />
      <Testimonial />
      <TypesOfKiosks />
      <IndustriesSection />
      <BlogSection />
      <FaqSection />
      <Container>
        <Contact />
        <Email />
      </Container>
    </div>
  );
}

import Image from 'next/image';
import Hero from '../components/home/Hero';
import Companies from '../components/home/Companies';
import BlogSection from '../components/home/Blogs';
import WhatsAppAppointment from '../components/home/WhatsAppAppointment';
import Benefits from '../components/home/Benefits';
import CustomerFlow from '../components/home/CustomerFlow';
import Contact from '../components/shared/Contact/Contact';
import Email from '../components/shared/Contact/Email';
import Container from '../components/shared/Container/Container';

export default function Home() {
  return (
    <div>
      <Container>
        <Hero />
        <Companies />
        <BlogSection />
      </Container>
      <WhatsAppAppointment />
      <Benefits />
      <Container>
        <CustomerFlow />
        <Contact />
        <Email />
      </Container>
    </div>
  );
}

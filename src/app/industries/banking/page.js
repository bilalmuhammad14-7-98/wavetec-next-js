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
import IndustryIntro from '@/src/components/industries/IndustryIntro';
import ChallengesSection from '@/src/components/industries/ChallengesSection';
import DigitalSolutionsGrid from '@/src/components/industries/DigitalSolutionsGrid';
import BusinessImpact from '@/src/components/industries/BusinessImpact';
import IntegrationsShowcase from '@/src/components/industries/IntegrationsShowcase';

// src/data/products/banking.data.js
// Hero section images
import HeroImage from '@/public/assets/hero.jpg';
import BGImage from '@/public/assets/bg2.png';
import ProductHero from '../../../components/shared/Products/ProductHero';
import ProductOverview from '@/src/components/shared/Products/ProductOverview';
import ProductTypes from '@/src/components/shared/Products/ProductTypes';

// Product Overview section images
import TabletMockup from '@/public/assets/telco-full.png';
import PhoneMockup from '@/public/assets/telco-mobile.png';

// Product Types Section images
import Mockup from '@/public/assets/telco-mobile-kiosk.png';
import SectionBg from '@/public/assets/telco-features-bg.png';
import Icon from '@/public/assets/Icon.png';

// Industries Use cases images
import IndustryUseCases from '@/src/components/shared/Products/IndustryUseCases';
import RestaurantsIcon from '@/public/assets/restaurant.png';
import TelecomIcon from '@/public/assets/telecom.png';
import BankIcon from '@/public/assets/bank.png';
import RetailIcon from '@/public/assets/retail.png';
import ArrowVector from '@/public/assets/vector.png';
import ScreenMockup from '@/public/assets/dashboardmockup.png';

// Blog Section images
// imports you already have for images
import BlogImage1 from '@/public/assets/blog-one.png';
import BlogImage2 from '@/public/assets/blog-two.png';
import BlogImage3 from '@/public/assets/blog-three.png';
import Avatar1 from '@/public/assets/blog-avatar-one.png';
import Avatar2 from '@/public/assets/blog-avatar-two.png';
import Avatar3 from '@/public/assets/blog-avatar-three.png';
import BlogPreview from '@/src/components/shared/Products/BlogPreview';

// Challenges Section images
import FeaturedIcon from '@/public/assets/Featured icon.png'; // the check-in-square icon you shared

// Industries UseCases Section images
import LogosStrip from '@/public/assets/Content.png';
export default function Banking() {
  const bankingData = [
    {
      hero: {
        title: 'Self Service Kiosks help your business grow and thrive in the digital age',
        description:
          'Learn how Wavetec’s self-service kiosks for cheque depositing, SIM dispensing & account opening can enable you and your customers to carry flexible and convenient transactions 24/7.',
        backgroundSrc: BGImage, // or "/assets/bg2.png"
        heroSrc: HeroImage, // or "/assets/hero.jpg"
        primary: { label: 'Get in touch', href: '/contact' },
        secondary: { label: 'Showcase', href: '/showcase' },
      },
    },
    {
      overview: {
        title: 'What is a Self-Service Kiosk?',
        description:
          'Self-service kiosks have emerged as game-changers, redefining the way customers interact with businesses.',
        items: [
          {
            title: 'Self Service Kiosk for Banking & Cash Management',
            description:
              'Automate deposits, speed up service, and reduce queues with secure validation and receipts. ',
            href: '#',
            featured: true, // renders the blue left rule card
          },
          {
            title: 'Self Service Kiosk for Telecom',
            description:
              'SIM vending, KYC workflows, and activation flows integrated with your stack.',
            href: '#',
          },
          {
            title: 'Smart Integration With ViaOS',
            description:
              'Orchestrate flows and connect to your backend with ViaOS modules and APIs.',
            href: '#',
          },
        ],
        media: {
          tabletSrc: TabletMockup,
          phoneSrc: PhoneMockup,
        },
      },
    },
    {
      types: {
        eyebrow: 'Self-Service Kiosks',
        title: 'Types of Self Service Kiosks',
        subtitle: 'Choose the right kiosk for your use case.',
        items: [
          {
            id: 'qsr',
            title: 'Quick Service Restaurant Self-Service Kiosks',
            points: [
              'Order & pay at kiosk with upsell prompts.',
              'Reduce queue times and improve throughput.',
              'Integrates with POS & kitchen display systems.',
            ],
            image: Mockup,
          },
          {
            id: 'sco',
            title: 'Self Checkout Kiosks',
            points: [
              'Barcode scanning and scale verification.',
              'Multiple payment options with receipt printer.',
              'Real-time loss-prevention flags.',
            ],
            image: Mockup,
          },
          {
            id: 'sim',
            title: 'SIM Dispensing Kiosks',
            points: [
              'eKYC & ID verification with biometrics.',
              'Instant SIM issuance & top-up support.',
              'Remote monitoring and device telemetry.',
            ],
            image: Mockup,
          },
          {
            id: 'sime',
            title: 'SIM Dispensing Kiosks',
            points: [
              'eKYC & ID verification with biometrics.',
              'Instant SIM issuance & top-up support.',
              'Remote monitoring and device telemetry.',
            ],
            image: Mockup,
          },
          {
            id: 'simet',
            title: 'SIM Dispensing Kiosks',
            points: [
              'eKYC & ID verification with biometrics.',
              'Instant SIM issuance & top-up support.',
              'Remote monitoring and device telemetry.',
            ],
            image: Mockup,
          },
        ],
        bulletIcon: Icon,
        bgImage: SectionBg, // optional; remove or set to null to disable background
        overlay: true, // optional subtle overlay for readability
        alternating: true, // keep the left/right alternation
      },
    },
    {
      industries: {
        eyebrow: 'Industries',
        title: 'How Are Self-Service Kiosks Used in Different Industries',
        subtitle:
          'Tools and strategies modern teams use to help their companies grow. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut',
        items: [
          {
            icon: RestaurantsIcon,
            title: 'Restaurants',
            description:
              'Order, pay, and pickup flows. Tools and strategies modern teams use to help their companies grow.',
          },
          {
            icon: TelecomIcon,
            title: 'Telecom',
            description:
              'SIM vending and KYC. Tools and strategies modern teams use to help their companies grow.',
          },
          {
            icon: BankIcon,
            title: 'Bank',
            description:
              'Cash/cheque deposit, onboarding. Tools and strategies modern teams use to help their companies grow.',
          },
          {
            icon: RetailIcon,
            title: 'Retail',
            description:
              'Self-checkout and returns. Tools and strategies modern teams use to help their companies grow. ',
          },
        ],
        mockup: ScreenMockup,
        arrowVector: ArrowVector,
      },
    },
    {
      blogs: {
        eyebrow: 'Our blog',
        title: 'Latest blog posts',
        subtitle: 'Tools and strategies modern teams need to help their companies grow.',
        cta: { label: 'View all posts', href: '/blog' },
        posts: [
          {
            image: BlogImage1,
            category: 'Featured',
            title: 'Decreased Wait Times',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula.',
            author: 'Olivia Rhye',
            date: '20 Jan 2024',
            authorAvatar: Avatar1,
            href: '/blog/decreased-wait-times',
          },
          {
            image: BlogImage2,
            category: 'Product',
            title: 'Improved Accuracy',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula.',
            author: 'Phoenix Baker',
            date: '19 Jan 2024',
            authorAvatar: Avatar2,
            href: '/blog/improved-accuracy',
          },
          {
            image: BlogImage3,
            category: 'Software Engineering',
            title: 'Reduced Point of Contact',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula.',
            author: 'Lana Steiner',
            date: '18 Jan 2024',
            authorAvatar: Avatar3,
            href: '/blog/reduced-point-of-contact',
          },
        ],
      },
    },
  ];

  // console.log('Banking data:', bankingData[0].hero);
  return (
    <>
      <div>
        {/* <HeroMain data={bankingData[0].hero} /> */}
        {/* <ProductHero {...bankingData[0].hero} data={bankingData} /> */}
        {/* <Container> */}
        {/* <Container>
        <Companies />
      </Container>

      <IndustryIntro
        eyebrow="Industries We Serve"
        title="Banking Solutions"
        description="Wavetec helps banks enhance customer experiences using queue management, self-service kiosks, ATMs, analytics, and AI to streamline operations."
      />

      <ChallengesSection
        title="Banking Challenges"
        intro="Banks face pressure to deliver faster, personalized experiences while reducing costs, managing queues, ensuring service consistency, and improving overall performance"
        items={[
          {
            icon: FeaturedIcon,
            iconAlt: 'Check',
            heading: 'Long Queues',
            description:
              'Long waiting times frustrate customers and reduce satisfaction, impacting both in-branch and digital experiences.',
          },
          {
            icon: FeaturedIcon,
            iconAlt: 'Check',
            heading: 'Inconsistent Service',
            description:
              'Variations in staff performance create unpredictable experiences, undermining trust and service quality.',
          },
          {
            icon: FeaturedIcon,
            iconAlt: 'Check',
            heading: 'Limited Insights',
            description:
              'Lack of analytics prevents banks from optimizing resources, measuring performance, and improving operational efficiency.',
          },
        ]}
      />

      <BusinessImpact
        title="Proven Business Impact"
        intro="Wavetec’s integrated CX solutions enable banks to achieve measurable improvements in efficiency, compliance, and customer satisfaction across every branch and digital channel."
        stats={[
          { value: '40%', label: 'Reduced average wait times' },
          { value: '25%', label: 'Increase in staff productivity' },
          { value: '30%', label: 'Higher customer satisfaction' },
        ]}
      />

      <DigitalSolutionsGrid
        title="Digital Transformation Solutions"
        items={[
          {
            heading: 'WhatsApp Virtual Queuing Solution',
            description:
              'Enable customers to join queues via WhatsApp, reducing wait times and improving experience.',
            link: { label: 'WhatsApp Queuing', href: '#' },
          },
          {
            heading: 'Mobile-Q – Virtual Mobile Queuing App',
            description:
              'Customers join queues from smartphones with real-time updates, improving efficiency.',
            link: { label: 'Mobile-Q App', href: '#' },
          },
          {
            heading: 'UNO-Q Linear Queuing',
            description:
              'Single-line system that streamlines customer flow and reduces wait times.',
            link: { label: 'UNO-Q Linear Queue', href: '#' },
          },
          {
            heading: 'SafeQ People Counting',
            description: 'Monitor foot traffic in real time to optimize space and service.',
            link: { label: 'SafeQ People Counting', href: '#' },
          },
          {
            heading: 'Customer Feedback System',
            description:
              'Collect and analyze customer feedback in real time to improve service quality.',
            link: { label: 'Customer Feedback', href: '#' },
          },
          {
            heading: 'Ticket Dispenser',
            description:
              'Automate ticket issuance to manage queues efficiently and reduce customer wait times.',
            link: { label: 'Learn more', href: '#' },
          },
        ]}
      /> */}

        {/* </Container> */}
        {/* <SelfService /> */}
        {/* <ProductOverview {...bankingData[1].overview} />
      <Testimonial /> */}
        {/* <TypesOfKiosks /> */}
        {/* <ProductTypes {...bankingData[2].types} /> */}
        {/* <IndustriesSection /> */}
        {/* <IndustryUseCases {...bankingData[3].industries} /> */}
        {/* <BlogSection /> */}
        {/* <BlogPreview {...bankingData[4].blogs} />
      <FaqSection />
      <Container>
        <Contact />
        <Email />
      </Container> */}
      </div>
    </>
  );
}

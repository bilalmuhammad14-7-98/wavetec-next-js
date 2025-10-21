import Companies from '../components/home/Companies';
import Container from '../components/shared/Container/Container';
import BlogSection from '../components/shared/Industry/BlogSection';
import Hero from '../components/shared/Industry/Hero';
import heroImage from '@/public/assets/hero.jpg';
import Blog from '@/public/assets/blog.png';
import ContentWithMedia from '../components/shared/Industry/ContentWithMedia';
import BenefitsSection from '../components/shared/Industry/BenefitsSection';
import Email from '../components/shared/Contact/Email';
import Contact from '../components/shared/Contact/Contact';
import FeatureSection from '../components/shared/Industry/FeatureSection';
import Platform from './industries/platform/page';

export default function Home() {
  const data = {
    hero: {
      title: 'Digital Banking Solutions Wavetec',
      description:
        'Streamline your customer journey with Wavetec bank branch management solutions and offer a superior branch banking customer experience for all.',
      bgImage: '/public/assets/background.png',
      primary: { label: 'Sign up', link: '#' },
      secondary: { label: 'Demo', link: '#' },
      heroImage: heroImage,
      heroBadge: { label: "What's new?", info: 'Instantly issue virtual cards', link: '#' },
    },
    blogs: {
      title: 'From the blog',
      description: 'The latest industry news, interviews, technologies, and resources.',
      posts: [
        {
          image: Blog,
          category: 'Design',
          date: 'Jul 10, 2025',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Olivia Rhye',
        },
        {
          image: Blog,
          category: 'Design',
          date: 'Jul 12, 2025',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Pedro Duarte',
        },
        {
          image: Blog,
          category: 'Design',
          date: 'Jul 15, 2025',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Lois Vernon',
        },
        {
          image: Blog,
          category: 'Design',
          date: 'Jul 17, 2025',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Alex Wildman',
        },
      ],
      button: {
        label: 'View all posts',
        link: '#',
      },
    },
    contentWithMedias: {
      title: 'Meet WhatsApp Appointments, Our Brand New Solution',
      description:
        'To meet current client expectations, banks and financial institutions are investing in digital capabilities. Now make banking appointments through WhatsApp from anywhere.',
      features: [
        {
          icon: '/assets/f-icon.png',
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut ligula.',
        },
        {
          icon: '/assets/f2-icon.png',
          title: 'Lorem ipsum dolor sit amet',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae risus et urna vehicula maximus a ut ligula.',
        },
      ],
      video: '/assets/video.mp4',
    },
    benefits: {
      heading: ' Launch faster',
      title: ' Benefits of Customer Journey Solutions for the Bank branch',
      description:
        'As banks are under extraordinary pressure to manage costs, progressive players are pushing for more advanced customer facing technologies.',
      secondary: { label: 'Demo', link: '#' },
      primary: { label: 'Get started', link: '#' },
      bgImage: '/assets/blog.png',
      stats: [
        {
          value: '400+',
          title: 'Projects completed',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          value: '600%',
          title: 'Return on investment',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          value: '10k',
          title: 'Global',
          description: 'Lorem ipsum , consectetur adipiscing elit.',
        },
      ],
    },
    features: {
      heading: 'Features',
      title: ' Customer Flow Management Solutions',
      description:
        'To meet current client expectations, banks and financial institutions are investing in digital capabilities. Retail banking is now increasingly focused on the acquisition of new customers through physical branches.',
      image: '/assets/dummy.png',
      stats: [
        {
          title: 'Pre-Arrival',
          description:
            'A customer decides to visit your bank branch and schedules an online appointment via your website or application. They select the branch, the time and the services required. They receive regular notifications updating them about the appointment.',
          button: {
            label: 'Learn More',
            link: '#',
          },
        },
        {
          title: 'Arrival & Check In',
          description: '',
          button: {
            label: 'Learn More',
            link: '#',
          },
        },
        {
          title: 'Waiting & After Being Served',
          description: '',
          button: {
            label: 'Learn More',
            link: '#',
          },
        },
      ],
    },
  };
  return (
    <div>
      {/* <Platform /> */}

      <Container>
        <Hero value={data?.['hero']} />
        <Companies />
        <BlogSection value={data?.['blogs']} />
      </Container>
      <ContentWithMedia value={data?.['contentWithMedias']} />
      <BenefitsSection value={data?.['benefits']} />
      <Container>
        <FeatureSection value={data?.['features']} />
        <Contact />
        <Email />
      </Container>
    </div>
  );
}

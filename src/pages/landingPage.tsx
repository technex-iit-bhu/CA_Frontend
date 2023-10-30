import FAQ from '@/components/faq';
import OurReach from '../components/ourReach';
import Landingpage from '@/components/landingpage';
import Testimonials from '@/components/testimonials';
import AboutTechnex from '@/components/abouttechnex';
import ScrollIcon from '@/components/scrollicon';

export default function LandingPage() {
  return (
    <>
      <Landingpage />
      <ScrollIcon/>
      <AboutTechnex />
      <OurReach />
      <Testimonials/>
      <FAQ />
    </>
  );
}


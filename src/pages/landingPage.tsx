import OurReach from '../components/ourReach';
import Landingpage from '@/components/landingPage';
import Testimonials from '@/components/testimonials';
import AboutTechnex from '@/components/abouttechnex';
import ScrollIcon from '@/components/scrollicon';
import Navbar from '../components/navbar';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <ScrollIcon />
      <AboutTechnex />
      <OurReach />
      <Testimonials />
    </>
  );
}

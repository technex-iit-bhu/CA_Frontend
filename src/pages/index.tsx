import { Inter, Outfit } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import LandingPage from './landingPage';
import DashboardPage from './dashboardPage';
import Navbar from '@/components/navbar';
// import IncentiveCard from '@/components/incentive_card';
import IncCarousel from '@/components/carousel';
import ResponsibilityCard_Symbol from '@/components/responsibility_card_symbol';
import ResponsibilityCarousel from '@/components/responsibility_carousel';
import ResponsibilityCard_Symbol_Bottom from '@/components/responsibility_card_Symbol_Bottom';
import IncentivePage from './incentivesPage';

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}

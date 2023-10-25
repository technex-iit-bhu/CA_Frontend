import { Inter, Outfit } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import LandingPage from './landingPage';
import DashboardPage from './dashboardPage';
import Navbar from '@/components/navbar';
import IncentiveCard from '@/components/incentive_card';
import IncentivesCarousel from '@/components/carousel';


export default function Home() {
  return (
    <main>
      <div>
        <LandingPage />
        <DashboardPage />


        <IncentivesCarousel />

      </div>
    </main>
  );
}

import Landingpage from '@/components/landingpage'
import { Inter, Outfit } from 'next/font/google';
import OurReach from '../components/ourReach';
const inter = Inter({ subsets: ['latin'] });
import LandingPage from './landingPage';
import DashboardPage from './dashboardPage';

export default function Home() {
  return (
    <main>
      <div>
        <DashboardPage />
        <LandingPage />
        <OurReach />
      </div>
    </main>
  );
}

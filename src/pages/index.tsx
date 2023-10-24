import { Inter, Outfit } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import LandingPage from './landingPage';
import DashboardPage from './dashboardPage';
import Navbar from '@/components/navbar';


export default function Home() {
  return (
    <main>
      <div>
        <LandingPage />
        <DashboardPage />
        
      </div>
    </main>
  );
}

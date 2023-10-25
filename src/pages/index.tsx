import { Inter, Outfit } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import LandingPage from './landingPage';
import Contactus from '@/components/contactus';


export default function Home() {
  return (
    <main>
      <div>
        <LandingPage />
        <Contactus/>

      </div>
    </main>
  );
}

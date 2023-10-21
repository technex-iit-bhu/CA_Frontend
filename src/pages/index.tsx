
import Landingpage from '@/components/landingpage'
import { Inter } from 'next/font/google';
import OurReach from '../components/ourReach';

const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <main>
      <div>
        <Landingpage />
        <OurReach />
      </div>
    </main>
  );
}

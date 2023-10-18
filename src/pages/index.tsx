import { Inter } from 'next/font/google';
import OurReach from './ourReach';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div>
        <OurReach />
      </div>
    </main>
  );
}

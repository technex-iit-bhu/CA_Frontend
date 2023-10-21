import LandingPage from './landingPage';
import Footer from '@/components/footer';
import DashboardPage from './dashboardPage';

export default function Home() {
  return (
    <main>
      <div>
        {/* <Navbar /> */}
        <DashboardPage />
        <LandingPage />
        <Footer />
      </div>
    </main>
  );
}

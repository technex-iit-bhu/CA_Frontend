import FAQ from '@/components/faq';
import OurReach from '../components/ourReach';
import Landingpage from '@/components/landingpage';
// import Leaderboard from '@/components/leaderboard';

export default function LandingPage(){
    return(
        <>
            <Landingpage />
            <OurReach />
            <FAQ />
            {/* <Leaderboard/> */}
        </>
    )
}
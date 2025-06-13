import Navbar from './components/landing/navbar.jsx';
import Hero from './components/landing/hero.jsx';
import Features from './components/landing/features.jsx';
import HowItWorks from './components/landing/how-it-works.jsx';
import SchoolSearch from './components/landing/school-search.jsx';
// import TrustSection from './components/landing/trust-section.jsx';
import PricingPreview from './components/landing/pricing-preview.jsx';
import Footer from './components/landing/footer.jsx';
import './index.css'
import TeamSection from './components/landing/TeamSection.jsx';
import ComingFeatures from './components/landing/UpcomingFeatures.jsx';
import Loader from "./components/ui/Loader.jsx"
import { useEffect, useState } from 'react';
export default function LandingPage() {

  const [loading, setLoading] = useState(true); // start in loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-background text-foreground">
        <Loader width={200} height={200}/>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />

        <SchoolSearch />
        <ComingFeatures /> 
        <PricingPreview />
        <TeamSection />

        {/* <TrustSection /> */}
      </main>
      <Footer />
    </div>
  );
} 
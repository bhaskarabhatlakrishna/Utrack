'use client';

import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import ThemeSelector from '@/components/ThemeSelector';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import CentralOperations from '@/components/sections/CentralOperations';
import FlipCards from '@/components/sections/FlipCards';
import Tracking from '@/components/sections/Tracking';
import GPSLocations from '@/components/sections/GPSLocations';
import TechStack from '@/components/sections/TechStack';
import FleetDashboard from '@/components/sections/FleetDashboard';
import MobileExperience from '@/components/sections/MobileExperience';
import Team from '@/components/sections/Team';
import RequestDemo from '@/components/sections/RequestDemo';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/lib/theme-context';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="pb-16 lg:pb-0">
          <Hero />
          <ValueProposition />
          <CentralOperations />
          <FlipCards />
          <Tracking />
          <GPSLocations />
          <TechStack />
          <FleetDashboard />
          <MobileExperience />
          <Team />
          <RequestDemo />
        </main>
        <Footer />
        <MobileNav />
        <ThemeSelector />
      </div>
    </ThemeProvider>
  );
}

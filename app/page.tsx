import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutCourse from '@/components/AboutCourse';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import TargetAudience from '@/components/TargetAudience';
import VideoSection from '@/components/VideoSection';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutCourse />
      <Benefits />
      <Testimonials />
      <TargetAudience />
      <VideoSection />
      <PricingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
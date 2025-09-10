import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MultimodalDemo from '@/components/MultimodalDemo'
import ContentSections from '@/components/ContentSections'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MultimodalDemo />
      <ContentSections />
      <Footer />
    </main>
  );
}

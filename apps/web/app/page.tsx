import { Header } from "./(marketing)/_components/Header";
import { Hero } from "./(marketing)/_components/Hero";
import { SocialProof } from "./(marketing)/_components/SocialProof";
import { HowItWorks } from "./(marketing)/_components/HowItWorks";
import { AudienceTabs } from "./(marketing)/_components/AudienceTabs";
import { FeaturesGrid } from "./(marketing)/_components/FeaturesGrid";
import { CodeExample } from "./(marketing)/_components/CodeExample";
import { TrustSecurity } from "./(marketing)/_components/TrustSecurity";
import { Pricing } from "./(marketing)/_components/Pricing";
import { FAQ } from "./(marketing)/_components/FAQ";
import { CTABanner } from "./(marketing)/_components/CTABanner";
import { Footer } from "./(marketing)/_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <FeaturesGrid />
        <AudienceTabs />
        <CodeExample />
        <TrustSecurity />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

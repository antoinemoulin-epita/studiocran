import { AboutIntro } from '@/components/sections/about-intro';
import { CaseStudies } from '@/components/sections/case-studies';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <AboutIntro />
    </>
  );
}

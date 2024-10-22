import Main from '@/ui/Main';
import OfferSection from '@/components/OfferSection/OfferSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersLogosSection from '@/components/PartnersLogosSection/PartnersLogosSection';
import ProjectsCarousel from '@/components/ProjectsCarousel/ProjectsCarousel';
import HomepageHeader from '@/components/HomepageHeader/HomepageHeader';
import CoreValuesSection from '@/components/CoreValuesSection/CoreValuesSection';

export default function Home() {
  return (
    <Main>
      <HomepageHeader />
      <CoreValuesSection />
      <OfferSection />
      <ProjectsCarousel />
      <PartnersLogosSection />
      <ContactSection />
    </Main>
  );
}

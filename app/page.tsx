import Main from '@/ui/Main';
import OfferSection from '@/components/OfferSections/OfferSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';
import Slider from '@/components/Slider/Slider';
import ValuesSection from '@/components/ValuesSection/ValuesSection';

export default function Home() {
  return (
    <Main>
      <Slider />
      <OfferSection />
      <ValuesSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactSection />
    </Main>
  );
}

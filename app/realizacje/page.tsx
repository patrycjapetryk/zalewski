import Main from '@/ui/Main';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersLogosSection from '@/components/PartnersLogosSection/PartnersLogosSection';
import AllProjectsSection from '@/components/AllProjectsSection/AllProjectsSection';

export default function Offer() {
  return (
    <Main className="xl:mt-10">
      <AllProjectsSection />
      <PartnersLogosSection />
      <ContactSection />
    </Main>
  );
}

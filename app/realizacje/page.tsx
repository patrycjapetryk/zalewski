import Main from '@/ui/Main';
import ContactFormSection from '@/components/ContactFormSection/ContactFormSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import AllProjectsSection from '@/components/AllProjectsSection/AllProjectsSection';

export default function Offer() {
  return (
    <Main className="xl:mt-10">
      <AllProjectsSection />
      <PartnersSection />
      <ContactFormSection />
    </Main>
  );
}

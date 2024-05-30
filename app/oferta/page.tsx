import Main from '@/ui/Main';
import OfferSection from '@/components/OfferSections/OfferSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';

export default function Offer() {
  return (
    <Main className="xl:mt-10">
      <OfferSection />
      <PartnersSection />
      <ContactSection />
    </Main>
  );
}

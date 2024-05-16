import Main from '@/ui/Main';
import OfferSection from '@/components/OfferSections/OfferSection';
import ContactFormSection from '@/components/ContactFormSection/ContactFormSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';

export default function Offer() {
  return (
    <Main className="mt-10">
      <OfferSection />
      <PartnersSection />
      <ContactFormSection />
    </Main>
  );
}

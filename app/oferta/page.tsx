import Main from '@/ui/Main';
import OfferSection from '@/components/OfferSection/OfferSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersLogosSection from '@/components/PartnersLogosSection/PartnersLogosSection';

export default function Offer() {
  return (
    <Main className="xl:mt-10">
      <OfferSection />
      <PartnersLogosSection />
      <ContactSection />
    </Main>
  );
}

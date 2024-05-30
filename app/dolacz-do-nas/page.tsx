import Main from '@/ui/Main';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersLogosSection from '@/components/PartnersLogosSection/PartnersLogosSection';
import JoinUsSection from '@/components/JoinUsSection/JoinUsSection';

export default function AboutUs() {
  return (
    <Main className="xl:mt-6">
      <JoinUsSection />
      <PartnersLogosSection />
      <ContactSection />
    </Main>
  );
}

import Main from '@/ui/Main';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import JoinUsSection from '@/components/JoinUsSection/JoinUsSection';

export default function AboutUs() {
  return (
    <Main className="xl:mt-6">
      <JoinUsSection />
      <PartnersSection />
      <ContactSection />
    </Main>
  );
}

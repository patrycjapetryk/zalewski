import ClientsSection from '@/components/clientsSections/ClientsSection';
import ContactFormSection from '@/components/contactFormSection/ContactFormSection';
import PartnersSection from '@/components/partnersSection/PartnersSection';
import ProjectsSection from '@/components/projectsSection/ProjectsSection';
import Slider from '@/components/slider/Slider';
import ValuesSection from '@/components/valuesSection/ValuesSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 py-14 lg:pb-28 lg:pt-12">
      <Slider />
      <ClientsSection />
      <ValuesSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactFormSection />
    </main>
  );
}

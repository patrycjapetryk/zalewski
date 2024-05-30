import Main from '@/ui/Main';
import ContactSection from '@/components/ContactSection/ContactSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import TeamSection from '@/components/TeamSection/TeamSection';
import ArticleSection from '@/components/ArticleSection/ArticleSection';

export default function AboutUs() {
  return (
    <Main className="xl:mt-6">
      <ArticleSection />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
    </Main>
  );
}

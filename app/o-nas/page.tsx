import Main from '@/ui/Main';
import ContactFormSection from '@/components/ContactFormSection/ContactFormSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import TeamSection from '@/components/TeamSection/TeamSection';
import ArticleSection from '@/components/ArticleSection/ArticleSection';

export default function AboutUs() {
  return (
    <Main className="xl:mt-6">
      <ArticleSection />
      <TeamSection />
      <PartnersSection />
      <ContactFormSection />
    </Main>
  );
}

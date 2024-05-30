import ContactForm from '../../ui/ContactForm';
import Section from '../../ui/Section';
import SectionHeader from '../../ui/SectionHeader';

export default function PartnersSection() {
  return (
    <Section id="kontakt">
      <SectionHeader>Opowiedz nam o swoim projekcie</SectionHeader>
      <div className="w-full">
        <ContactForm />
      </div>
    </Section>
  );
}

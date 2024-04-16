import ContactForm from '../ui/ContactForm';
import SectionHeader from '../ui/SectionHeader';

export default function PartnersSection() {
  return (
    <section className="w-full">
      <SectionHeader>Opowiedz nam o swoim projekcie</SectionHeader>
      <div className="w-full">
        <ContactForm />
      </div>
    </section>
  );
}

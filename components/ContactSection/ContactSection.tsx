import ContactForm from '@/ui/ContactForm';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <Section id="kontakt" className="px-2">
      <SectionHeader>Opowiedz nam o swoim projekcie</SectionHeader>
      <div className="relative w-full">
        <ContactForm />
        <figure className="absolute -top-3 right-2 hidden md:block">
          <Image
            className="h-auto w-[190px]"
            src="/images/za.png"
            alt="ZA"
            width={283}
            height={209}
          />
        </figure>
      </div>
    </Section>
  );
}

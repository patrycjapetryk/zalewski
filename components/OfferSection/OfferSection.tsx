import Image from 'next/image';

import Header from '@/ui/Header';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';
import ClientsLink from '@/components/ClientsSection/ClientsLink';
import SectionHeader from '@/ui/SectionHeader';

export default function ClientsSection() {
  return (
    <Section>
      <SectionHeader>Klienci zaufali nam</SectionHeader>

      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
        <ClientsLink href="/oferta/klienci-indywidualni">
          <Header>
            Klienci <br />
            Indywidualni
          </Header>
          <Paragraph>
            Budujesz dom? Zespół naszych specjalistów pomoże spełnić Twoje
            marzenia
          </Paragraph>
        </ClientsLink>

        <ClientsLink href="/oferta/architekci-i-biura-projektowe">
          <Header>Architekci i&nbsp;biura projektowe</Header>
          <Paragraph>
            Szukasz firmy, która kompleksowo zajmie się Twoim projektem? Zaufaj
            naszemu doświadczeniu.
          </Paragraph>
        </ClientsLink>

        <ClientsLink href="/oferta/firmy-branzowe">
          <Header>
            Firmy <br />
            branżowe
          </Header>
          <Paragraph className="md:max-w-[48%]">
            Oferta obejmuje wszystkie etapy procesu inwestycyjnego od analiz po
            doradztwo.
          </Paragraph>

          <div className="absolute bottom-0 right-4 hidden h-[100%] w-[48%] md:block">
            <Image
              className="h-full w-full object-contain"
              src="/images/photo-1.png"
              alt="Klienci inwestycyjni"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </ClientsLink>

        <ClientsLink href="/oferta/klienci-inwestycyjni">
          <Header>
            Klienci <br />
            Inwestycyjni
          </Header>
          <Paragraph className="md:max-w-[48%]">
            Oferta obejmuje wszystkie etapy procesu inwestycyjnego od analiz po
            doradztwo.
          </Paragraph>

          <div className="absolute bottom-0 right-4 hidden h-[100%] w-[48%] md:block">
            <Image
              className="h-full w-full object-contain"
              src="/images/photo-2.png"
              alt="Klienci inwestycyjni"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </ClientsLink>
      </div>
    </Section>
  );
}

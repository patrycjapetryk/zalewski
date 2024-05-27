import Image from 'next/image';

import Header from '@/ui/Header';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';
import ClientsLink from './ClientsLink';

export default function ClientsSection() {
  return (
    <Section>
      <div className="grid w-full grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3">
        <ClientsLink
          href="/oferta/klienci-indywidualni"
          className="pl-[40%] xs:col-span-2 xl:pl-[50%]"
        >
          <Header>
            Klienci <br />
            Indywidualni
          </Header>
          <Paragraph>
            Budujesz dom? Zespół naszych specjalistów pomoże spełnić Twoje
            marzenia
          </Paragraph>
          <div className="absolute -left-10 bottom-0 h-[123%] w-[62%] xs:-left-14 xl:left-0 xl:w-[51%]">
            <Image
              className="h-full w-full object-contain object-left-bottom"
              src="/images/photo-2.png"
              alt="Klienci indywidualni"
              sizes="(max-width: 768px) 50vw, 33vw"
              fill
            />
          </div>
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
          <Paragraph>
            Prowadzisz inwestycje o wysokich kosztach? Oferujemy swoją pomoc.
            Sprawdź nasze referencje.
          </Paragraph>
        </ClientsLink>

        <ClientsLink
          href="/oferta/klienci-inwestycyjni"
          className="pr-[46%] xs:col-span-2 xl:pr-[55%]"
        >
          <Header>
            Klienci <br />
            Inwestycyjni
          </Header>
          <Paragraph>
            Oferta obejmuje wszystkie etapy procesu inwestycyjnego od analiz po
            doradztwo.
          </Paragraph>

          <div className="absolute -bottom-7 -right-2 h-full w-[48%] xl:right-7">
            <Image
              className="h-full w-full object-contain"
              src="/images/photo-3.png"
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

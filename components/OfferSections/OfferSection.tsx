import Link from 'next/link';
import Image from 'next/image';

import Header from '@/ui/Header';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';

export default function ClientsSection() {
  return (
    <Section>
      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3">
        <Link
          className={`
          relative
          col-span-2 rounded-2xl bg-red py-14 pl-[50%] pr-6
          after:absolute after:right-2 after:top-1 after:scale-75 after:content-arrow
          hover:after:right-1 hover:after:top-0
          xl:py-28 xl:pr-10
        `}
          href="/oferta/klienci-indywidualni"
        >
          <Header>
            Klienci <br />
            Indywidualni
          </Header>
          <Paragraph>
            Budujesz dom? Zespół naszych specjalistów pomoże spełnić Twoje
            marzenia
          </Paragraph>
          <Image
            className="absolute bottom-0 left-0 w-[51%]"
            src="/images/photo-2.png"
            alt=""
            width={592}
            height={592}
          />
        </Link>

        <article
          className={`
          relative 
          col-span-2 rounded-2xl bg-red py-14 pl-8 pr-6 after:absolute 
          after:right-2 after:top-1 after:scale-75 after:content-arrow 
          sm:col-span-1 
          xl:py-28 xl:pl-14 xl:pr-10
        `}
        >
          <Header>Architekci i biura projektowe</Header>
          <Paragraph>
            Szukasz firmy, która kompleksowo zajmie się Twoim projektem? Zaufaj
            naszemu doświadczeniu.
          </Paragraph>
        </article>

        <article
          className={`
          relative
          col-span-2 rounded-2xl bg-red py-14 pl-8 pr-6 after:absolute 
          after:right-2 after:top-1 after:scale-75 after:content-arrow 
          sm:col-span-1 
          xl:py-28 xl:pl-14 xl:pr-10
        `}
        >
          <Header>
            Firmy <br />
            branżowe
          </Header>
          <Paragraph>
            Prowadzisz inwestycje o wysokich kosztach? Oferujemy swoją pomoc.
            Sprawdź nasze referencje.
          </Paragraph>
        </article>

        <article
          className={`
          relative 
          col-span-2 rounded-2xl bg-red py-14 pl-8 pr-[50%] after:absolute after:right-2 
          after:top-1 after:scale-75 after:content-arrow 
          xl:py-28 xl:pl-14
        `}
        >
          <Header>
            Klienci <br />
            Inwestycyjni
          </Header>
          <Paragraph>
            Oferta obejmuje wszystkie etapy procesu inwestycyjnego od analiz po
            doradztwo.
          </Paragraph>

          <div className="absolute bottom-0 right-2 h-[94%] w-[50%]">
            <Image
              className="h-full w-full object-contain"
              src="/images/photo-3.png"
              alt=""
              width={592}
              height={592}
            />
          </div>
        </article>
      </div>
    </Section>
  );
}

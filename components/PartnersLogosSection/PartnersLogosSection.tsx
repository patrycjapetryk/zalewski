import Image from 'next/image';

import SectionHeader from '@/ui/SectionHeader';
import Section from '@/ui/Section';

export default function PartnersLogosSection() {
  return (
    <Section>
      <SectionHeader>Partnerzy</SectionHeader>
      <div className="hide-scroll w-full overflow-x-scroll">
        <div className="my-6 flex w-[200%] items-center justify-between gap-6 lg:w-full">
          <figure>
            <Image
              src="/images/partners/varso-tower-logo.png"
              alt="Logo Varso Tower"
              width={115}
              height={115}
              priority
            />
          </figure>

          <figure>
            <Image
              className="h-auto w-[160px]"
              src="/images/partners/skf-logo.png"
              alt="Logo SKF"
              width={170}
              height={90}
              priority
            />
          </figure>

          <figure>
            <Image
              className="h-auto w-[190px]"
              src="/images/partners/ferrero-logo.png"
              alt="Logo Ferrero"
              width={234}
              height={31}
              priority
            />
          </figure>

          <figure>
            <Image
              className="h-auto w-[190px]"
              src="/images/partners/putka-logo.png"
              alt="Logo Putka"
              width={207}
              height={88}
              priority
            />
          </figure>

          <figure>
            <Image
              className="h-auto w-[170px]"
              src="/images/partners/tuszynscy-logo.png"
              alt="Logo Tuszyńscy"
              width={206}
              height={107}
              priority
            />
          </figure>

          <figure>
            <Image
              className="h-auto w-[65px]"
              src="/images/partners/gmina-warka-logo.png"
              alt="Logo Gminy Warka"
              width={71}
              height={84}
              priority
            />
          </figure>

          <figure>
            <Image
              className="h-auto w-[130px]"
              src="/images/partners/oskroba-logo.png"
              alt="Logo Oskroba"
              width={151}
              height={131}
              priority
            />
          </figure>
        </div>
      </div>
    </Section>
  );
}

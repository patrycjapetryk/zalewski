import Image from 'next/image';

import SectionHeader from '@/ui/SectionHeader';
import Section from '@/ui/Section';

export default function PartnersLogosSection() {
  return (
    <Section>
      <SectionHeader>Partnerzy</SectionHeader>
      <div className="hide-scroll w-full overflow-x-scroll">
        <div className="my-6 flex w-[200%] justify-between gap-6 lg:w-full">
          <a href="#" target="_blank">
            <Image
              className="h-[90px] w-auto"
              src="/images/logo-1.svg"
              alt=""
              width={148}
              height={181}
              priority
            />
          </a>

          <a href="#" target="_blank">
            <Image
              className="h-[90px] w-auto"
              src="/images/logo-2.svg"
              alt=""
              width={148}
              height={181}
              priority
            />
          </a>

          <a href="#" target="_blank">
            <Image
              className="h-[90px] w-auto"
              src="/images/logo-3.svg"
              alt=""
              width={148}
              height={181}
              priority
            />
          </a>

          <a href="#" target="_blank">
            <Image
              className="h-[90px] w-auto"
              src="/images/logo-4.svg"
              alt=""
              width={148}
              height={181}
              priority
            />
          </a>

          <a href="#" target="_blank">
            <Image
              className="h-[90px] w-auto"
              src="/images/logo-5.svg"
              alt=""
              width={148}
              height={181}
              priority
            />
          </a>

          <a href="#" target="_blank">
            <Image
              className="h-[90px] w-auto"
              src="/images/logo-6.svg"
              alt=""
              width={148}
              height={181}
              priority
            />
          </a>
        </div>
      </div>
    </Section>
  );
}

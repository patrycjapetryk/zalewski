import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

export default function PartnersSection() {
  return (
    <section className="w-full">
      <SectionHeader>Partnerzy</SectionHeader>
      <div className="my-6 flex w-full justify-between gap-6">
        <div>
          <Image
            className="h-[90px] w-auto"
            src="/images/logo-1.svg"
            alt=""
            width={148}
            height={181}
            priority
          />
        </div>
        <div>
          <Image
            className="h-[90px] w-auto"
            src="/images/logo-2.svg"
            alt=""
            width={148}
            height={181}
            priority
          />
        </div>
        <div>
          <Image
            className="h-[90px] w-auto"
            src="/images/logo-3.svg"
            alt=""
            width={148}
            height={181}
            priority
          />
        </div>
        <div>
          <Image
            className="h-[90px] w-auto"
            src="/images/logo-4.svg"
            alt=""
            width={148}
            height={181}
            priority
          />
        </div>
        <div>
          <Image
            className="h-[90px] w-auto"
            src="/images/logo-5.svg"
            alt=""
            width={148}
            height={181}
            priority
          />
        </div>
        <div>
          <Image
            className="h-[90px] w-auto"
            src="/images/logo-6.svg"
            alt=""
            width={148}
            height={181}
            priority
          />
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

import SectionHeader from '../ui/SectionHeader';
import Section from '../ui/Section';

export default function ProjectsSection() {
  return (
    <Section>
      <SectionHeader>Realizacje</SectionHeader>
      <div className="w-full overflow-x-auto ">
        <div className="grid w-[200%] grid-cols-3 gap-5 md:w-full">
          <a href="#">
            <figure className="bg-red">
              <Image
                className="w-full"
                src="/images/photo-1.jpg"
                alt=""
                width={507}
                height={420}
                priority
              />

              <figcaption className="px-4 py-6">
                <h3 className="text-sm leading-none">Filtry warszawskie</h3>
              </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure className="bg-red">
              <Image
                className="w-full"
                src="/images/photo-2.jpg"
                alt=""
                width={507}
                height={420}
                priority
              />

              <figcaption className="px-4 py-6">
                <h3 className="text-sm leading-none">Cedet Warszawa</h3>
              </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure className="bg-red">
              <Image
                className="w-full"
                src="/images/photo-3.jpg"
                alt=""
                width={507}
                height={420}
                priority
              />

              <figcaption className="px-4 py-6">
                <h3 className="text-sm leading-none">Franke Polska Sękocin</h3>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </Section>
  );
}

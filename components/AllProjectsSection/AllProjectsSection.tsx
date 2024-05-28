import Image from 'next/image';

import Section from '@/ui/Section';
import AllProjectsLink from './AllProjectsLink';
import AllProjectsCaption from './AllProjectsCaption';

export default function AllProjectsSection() {
  return (
    <Section>
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-[1.8%]">
        <AllProjectsLink
          href="/realizacje/filtry-warszawskie"
          className="sm:col-span-2"
        >
          <figure className="w-full">
            <div className="aspect-reg sm:aspect-long relative w-full">
              <Image
                className="rounded-lg object-cover lg:rounded-2xl"
                src="/images/projects-1.jpg"
                alt="Filtry Warszawskie"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>

            <AllProjectsCaption>Filtry Warszawskie</AllProjectsCaption>
          </figure>
        </AllProjectsLink>
        <AllProjectsLink href="/realizacje/filtry-warszawskie">
          <figure className="w-full">
            <div className="aspect-reg relative w-full">
              <Image
                className="rounded-lg object-cover lg:rounded-2xl"
                src="/images/projects-2.jpg"
                alt="Filtry Warszawskie"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <AllProjectsCaption>Filtry Warszawskie</AllProjectsCaption>
          </figure>
        </AllProjectsLink>

        <AllProjectsLink href="/realizacje/filtry-warszawskie">
          <figure className="w-full">
            <div className="aspect-reg relative w-full">
              <Image
                className="rounded-lg object-cover lg:rounded-2xl"
                src="/images/projects-3.jpg"
                alt="Franke Polska Sękocin"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <AllProjectsCaption>Franke Polska Sękocin</AllProjectsCaption>
          </figure>
        </AllProjectsLink>
        <AllProjectsLink
          href="/realizacje/filtry-warszawskie"
          className="sm:col-span-2"
        >
          <figure className="w-full">
            <div className="aspect-reg sm:aspect-long relative w-full">
              <Image
                className="rounded-lg object-cover lg:rounded-2xl"
                src="/images/projects-4.jpg"
                alt="Cedet Warszawa"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <AllProjectsCaption>Cedet Warszawa</AllProjectsCaption>
          </figure>
        </AllProjectsLink>

        <AllProjectsLink
          href="/realizacje/filtry-warszawskie"
          className="sm:col-span-2"
        >
          <figure className="w-full">
            <div className="aspect-reg sm:aspect-long relative w-full">
              <Image
                className="rounded-lg object-cover lg:rounded-2xl"
                src="/images/projects-5.jpg"
                alt="Filtry Warszawskie"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <AllProjectsCaption>Filtry Warszawskie</AllProjectsCaption>
          </figure>
        </AllProjectsLink>
        <AllProjectsLink href="/realizacje/filtry-warszawskie">
          <figure className="w-full">
            <div className="aspect-reg relative w-full">
              <Image
                className="rounded-lg object-cover lg:rounded-2xl"
                src="/images/projects-6.jpg"
                alt="Cedet Warszawa"
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
            <AllProjectsCaption>Cedet Warszawa</AllProjectsCaption>
          </figure>
        </AllProjectsLink>
      </div>
    </Section>
  );
}

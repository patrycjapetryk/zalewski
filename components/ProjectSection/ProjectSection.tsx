import Image from 'next/image';

import { type AllProjectsDataItem } from '../AllProjectsSection/allProjectsData';
import Section from '@/ui/Section';
import MainHeader from '@/ui/MainHeader';
import Paragraph from '@/ui/Paragraph';
import List from '@/ui/List';

type Props = {
  projectData: AllProjectsDataItem;
};

export default function ProjectSection({ projectData }: Props) {
  const { title, text, scope, description, photos } = projectData;

  return (
    <Section className="xl:mt-10">
      <div className="flex flex-col-reverse flex-wrap justify-between gap-12 sm:flex-row sm:gap-0">
        <div className="flex w-full flex-col gap-8 sm:w-[30%] md:w-[40%]">
          {photos.map(({ id, url, width, height, alt }) => (
            <Image
              className="h-auto w-full rounded-lg md:rounded-xl"
              key={id}
              src={url}
              width={width}
              height={height}
              alt={alt}
            />
          ))}
        </div>
        <div className="w-full self-start sm:w-[65%] md:w-[55%] lg:sticky lg:top-[150px] xl:top-[200px]">
          <MainHeader className="mt-0">{title}</MainHeader>
          <Paragraph className="mb-10">{text}</Paragraph>
          <List className="mb-10" title="Zakres prac:" list={scope} />
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
    </Section>
  );
}

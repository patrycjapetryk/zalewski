import Link from 'next/link';

import SectionHeader from '../../ui/SectionHeader';
import Section from '../../ui/Section';
import GalleryItem from '@/ui/GalleryItem';

export const galleryItems = [
  {
    id: '1',
    image: '/images/photo-1.jpg',
    link: '#',
    alt: 'Filtry warszawskie',
    caption: 'Filtry warszawskie',
  },
  {
    id: '2',
    image: '/images/photo-2.jpg',
    link: '#',
    alt: 'Cedet Warszawa',
    caption: 'Cedet Warszawa',
  },
  {
    id: '3',
    image: '/images/photo-3.jpg',
    link: '#',
    alt: 'Franke Polska Sękocin',
    caption: 'Franke Polska Sękocin',
  },
];

export default function ProjectsCarousel() {
  return (
    <Section>
      <SectionHeader>Realizacje</SectionHeader>
      <div className="w-full overflow-x-auto ">
        <div className="grid w-[200%] grid-cols-3 gap-6 md:w-full">
          {galleryItems.map(({ id, image, link, alt, caption }) => {
            return (
              <Link href={link} key={id} className="w-full">
                <GalleryItem image={image} alt={alt} caption={caption} />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

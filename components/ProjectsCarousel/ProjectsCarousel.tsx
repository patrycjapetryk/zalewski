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
      <div className="w-[calc(100%+48px)] -translate-x-6 overflow-x-auto px-6 pb-16 md:w-full md:translate-x-0">
        <div className="grid w-[200%] grid-cols-3 gap-3 md:w-full md:gap-6">
          {galleryItems.map(({ id, image, link, alt, caption }) => {
            return (
              <Link
                href={link}
                key={id}
                className="shadow-red-md w-full rounded-2xl bg-white"
              >
                <GalleryItem image={image} alt={alt} caption={caption} />
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

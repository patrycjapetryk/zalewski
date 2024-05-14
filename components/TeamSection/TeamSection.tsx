import SectionHeader from '@/ui/SectionHeader';
import Section from '@/ui/Section';
import GalleryItem from '@/ui/GalleryItem';
import GalleryCaption from '@/ui/GalleryCaption';

export const galleryItems = [
  {
    id: '1',
    type: 'image',
    image: '/images/about-us-1.jpg',
    alt: 'Tadeusz Zalewski',
    caption: 'Tadeusz Zalewski',
  },
  {
    id: '2',
    type: 'image',
    image: '/images/about-us-2.jpg',
    alt: 'Przemysław Zalewski',
    caption: 'Przemysław Zalewski',
  },
  {
    id: '3',
    type: 'image',
    image: '/images/about-us-3.jpg',
    alt: 'Przemysław Konarzewski',
    caption: 'Przemysław Konarzewski',
  },

  {
    id: '4',
    type: 'text',
    image: '',
    alt: '',
    caption:
      'Zespół liczy ponad dwudziestu wykwalifikowanych inżynierów mogących podjąć się każdego zadanie projektowego.',
  },
  {
    id: '5',
    type: 'image',
    image: '/images/about-us-4.jpg',
    alt: 'Przemysław Zalewski',
    caption: 'Przemysław Zalewski',
  },
  {
    id: '6',
    type: 'image',
    image: '/images/about-us-5.jpg',
    alt: 'Przemysław Zalewski',
    caption: 'Przemysław Zalewski',
  },
];

export default function TeamSection() {
  return (
    <Section>
      <SectionHeader smaller>Poznaj nasz zespół</SectionHeader>

      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 xl:gap-6">
          {galleryItems.map(({ id, type, image, alt, caption }) => {
            if (type === 'text') {
              return <GalleryCaption key={id} caption={caption} />;
            } else {
              return (
                <GalleryItem
                  key={id}
                  image={image}
                  alt={alt}
                  caption={caption}
                />
              );
            }
          })}
        </div>
      </div>
    </Section>
  );
}

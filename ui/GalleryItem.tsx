import Image from 'next/image';

type Props = {
  image: string;
  alt: string;
  caption: string;
  text?: string;
};

export default function GalleryItem({ image, alt, caption }: Props) {
  return (
    <figure className="bg-red">
      <Image
        className="w-full"
        src={image}
        alt={alt}
        width={507}
        height={420}
        priority
      />

      <figcaption className="-translate-y-1 bg-red px-4 py-6">
        <h3 className="text-sm leading-none">{caption}</h3>
      </figcaption>
    </figure>
  );
}

import Image from 'next/image';

type Props = {
  image: string;
  alt: string;
  caption: string;
  text?: string;
};

export default function GalleryItem({ image, alt, caption }: Props) {
  return (
    <figure className="rounded-2xl bg-white">
      <Image
        className="w-full rounded-t-2xl"
        src={image}
        alt={alt}
        width={507}
        height={420}
        priority
      />

      <figcaption className="-translate-y-1 rounded-b-2xl px-4 py-6">
        <h3 className="text-sm leading-none">{caption}</h3>
      </figcaption>
    </figure>
  );
}

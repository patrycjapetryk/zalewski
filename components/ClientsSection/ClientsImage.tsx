import Image from 'next/image';

import { type ClientsDataItem } from './clientsData';

type Props = {
  photo: ClientsDataItem['photo'];
};

export default function ClientsImage({ photo }: Props) {
  const { url, alt } = photo;

  return (
    <div className="absolute left-5 top-8 h-[340px] w-full xl:-left-5 xl:top-20 xl:h-[650px] xl:w-[44%]">
      <Image
        className="object-contain xl:object-left-top"
        src={url}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

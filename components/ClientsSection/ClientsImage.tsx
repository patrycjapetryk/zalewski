import Image from 'next/image';

import { type ClientsDataItem } from './clientsData';

type Props = {
  photo: ClientsDataItem['photo'];
};

export default function ClientsImage({ photo }: Props) {
  const { url, alt, bottom } = photo;

  return (
    <div className="absolute left-5 top-24 h-60 w-[85%] xl:-left-20 xl:top-44 xl:h-[calc(100%-11rem)] xl:w-[40%]">
      <Image
        className={`object-contain ${bottom ? 'xl:object-left-bottom' : 'xl:object-left-top'}`}
        src={url}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

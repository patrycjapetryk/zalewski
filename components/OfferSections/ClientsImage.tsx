import Image from 'next/image';

import { type ClientsDataItem } from './clientsData';

type Props = {
  photo: ClientsDataItem['photo'];
};

export default function ClientsImage({ photo }: Props) {
  return (
    <div
      className={`
          absolute -left-20 bottom-0 h-full w-[40%]
          `}
    >
      <Image
        className="object-contain object-left-bottom"
        src={photo.url}
        alt={photo.alt}
        fill
      />
    </div>
  );
}

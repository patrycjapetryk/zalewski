import { type ComponentProps, type ReactNode } from 'react';

import { cn } from '@/utils/cn';

type Props = {
  children: ReactNode;
} & ComponentProps<'a'>;

export default function AllProjectsCaption({
  children,
  className,
  ...spread
}: Props) {
  return (
    <figcaption
      className={cn('my-2 text-xs xl:mb-3 xl:mt-4 xl:text-sm', className)}
      {...spread}
    >
      {children}
    </figcaption>
  );
}

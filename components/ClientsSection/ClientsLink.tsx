import { type ComponentProps, type ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/utils/cn';

type Props = {
  href: string;
  children: ReactNode;
} & ComponentProps<'a'>;

export default function ClientsLink({
  href,
  children,
  className,
  ...spread
}: Props) {
  return (
    <Link
      className={cn(
        `
        relative rounded-2xl bg-red
        px-5 pb-10 pt-12
        after:absolute after:right-2 after:top-1
        after:scale-75 after:content-arrow
        hover:after:right-1 hover:after:top-0
        xl:px-10 xl:py-28
        `,
        className,
      )}
      href={href}
      {...spread}
    >
      {children}
    </Link>
  );
}

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
    <Link className={cn('rounded-2xl', className)} href={href} {...spread}>
      {children}
    </Link>
  );
}

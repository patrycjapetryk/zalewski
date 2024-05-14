import { type ReactNode, type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  children: string | string[] | ReactNode;
} & ComponentProps<'section'>;

export default function Section({ children, className, ...spread }: Props) {
  return (
    <section className={cn('w-full', className)} {...spread}>
      {children}
    </section>
  );
}

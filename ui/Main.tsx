import { type ReactNode, type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  children: string | string[] | ReactNode;
} & ComponentProps<'main'>;

export default function Main({ children, className, ...spread }: Props) {
  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center gap-20 py-14 lg:pb-28 lg:pt-12',
        className,
      )}
      {...spread}
    >
      {children}
    </main>
  );
}

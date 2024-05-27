import { type ComponentProps, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  children: ReactNode;
  uppercase?: boolean;
} & ComponentProps<'h1'>;

export default function MainHeader({
  className,
  children,
  uppercase,
  ...spread
}: Props) {
  return (
    <h1
      className={cn(
        `
        mb-10 text-xl leading-none tracking-tight
        xs:text-2xl md:text-3xl 
        ${uppercase ? 'uppercase' : 'mt-4 xl:text-4xl'}
        `,
        className,
      )}
      {...spread}
    >
      {children}
    </h1>
  );
}

import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  children: string | string[];
  smaller?: boolean;
} & ComponentProps<'h2'>;

export default function SectionHeader({
  children,
  smaller,
  className,
  ...spread
}: Props) {
  return (
    <h2
      className={cn(
        `mb-14 mt-4 leading-none tracking-tight
      ${
        smaller
          ? 'text-xl xs:text-2xl md:text-3xl xl:text-4xl'
          : 'text-2xl xs:text-3xl md:text-4xl xl:text-5xl'
      }
      `,
        className,
      )}
      {...spread}
    >
      {children}
    </h2>
  );
}

import { type ReactNode, type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  children: ReactNode;
} & ComponentProps<'p'>;

export default function Paragraph({ children, className, ...spread }: Props) {
  return (
    <p className={cn('font-sans', className)} {...spread}>
      {children}
    </p>
  );
}

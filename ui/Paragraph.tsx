import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  children: string | string[];
} & ComponentProps<'p'>;

export default function Paragraph({ children, className, ...spread }: Props) {
  return (
    <p className={cn('text-sm', className)} {...spread}>
      {children}
    </p>
  );
}

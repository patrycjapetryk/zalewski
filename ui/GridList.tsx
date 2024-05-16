import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  largerRectanglesIndexes: number[];
  list: string[];
} & ComponentProps<'div'>;

export default function GridList({
  largerRectanglesIndexes,
  list,
  className,
  ...spread
}: Props) {
  return (
    <div className={cn('mb-10 text-xs', className)} {...spread}>
      <ul className="grid grid-cols-3 gap-4">
        {list.map((item, index) => {
          return (
            <li
              className={`rounded-lg border px-4 py-5 ${largerRectanglesIndexes.includes(index) && 'col-span-2'}`}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

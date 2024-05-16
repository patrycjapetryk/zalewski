import { type ComponentProps } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  title: string;
  list: string[];
} & ComponentProps<'div'>;

export default function List({ title, list, className, ...spread }: Props) {
  return (
    <div className={cn('text-sm', className)} {...spread}>
      <h3 className="mb-1 mt-10 text-xl uppercase">{title}</h3>
      <ul>
        {list.map((item, index) => {
          return (
            <li className="list-inside list-disc" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

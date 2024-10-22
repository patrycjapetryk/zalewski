import { type ComponentProps, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & ComponentProps<'article'>;

export default function CoreValuesArticle({ children }: Props) {
  return (
    <article className="shadow-red-md rounded-2xl bg-white px-8 py-12 xl:px-9 xl:py-20">
      {children}
    </article>
  );
}

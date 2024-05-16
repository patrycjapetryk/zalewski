import { type ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-8 text-2xl leading-none xl:text-[1.75rem]">{children}</h3>
  );
}

import { type ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-5 text-2xl leading-none xl:mb-8 xl:text-[1.75rem]">
      {children}
    </h3>
  );
}

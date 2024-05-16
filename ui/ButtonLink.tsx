import { ReactNode } from 'react';

export default function ButtonLink({ children }: { children: ReactNode }) {
  return (
    <a
      className="leading-2 hidden rounded-xl bg-white px-12 py-[0.6rem] text-sm uppercase text-black transition-opacity hover:opacity-75 lg:block"
      href="#"
    >
      {children}
    </a>
  );
}

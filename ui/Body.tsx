'use client';

import { ReactElement } from 'react';

import { useMenuContext } from '@/components/Menu/MenuContext';

export default function Body({ children }: { children: ReactElement }) {
  const { showMenu } = useMenuContext();

  return (
    <body
      className={`bg-dark-red bg-texture bg-150% bg-center bg-repeat-y font-body text-white 2xl:bg-100%
      ${showMenu ? 'overflow-y-hidden' : 'overflow-y-auto'}
      `}
    >
      {children}
    </body>
  );
}

'use client';

import { ReactElement } from 'react';

import { useMenuContext } from '@/components/Menu/MenuContext';

export default function Body({ children }: { children: ReactElement }) {
  const { showMenu } = useMenuContext();

  return (
    <body
      className={`bg-gray font-body text-black ${showMenu ? 'overflow-y-hidden' : 'overflow-y-auto'} `}
    >
      {children}
    </body>
  );
}

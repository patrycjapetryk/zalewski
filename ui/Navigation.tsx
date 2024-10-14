'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type MenuItems } from '@/components/Menu/menuData';

type Props = {
  menuItems: MenuItems;
};

export default function Navigation({ menuItems }: Props) {
  const currentPath = usePathname();

  return (
    <nav className="flex w-full items-center justify-center">
      <ul className="flex gap-8 rounded-xl px-12 py-3 transition-all duration-300">
        {menuItems.map(({ url, label }, i) => (
          <li key={i} className="text-sm uppercase">
            <Link
              className={
                currentPath.includes(url) ? 'underline underline-offset-4' : ''
              }
              href={url}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { menuData } from './menuData';
import ButtonLink from '@/ui/ButtonLink';
import { useMenuContext } from './MenuContext';

export default function MobileMenu() {
  const { showMenu, openMenu, closeMenu } = useMenuContext();
  const currentPath = usePathname();

  const { menuItems, menuButton } = menuData;
  const { label, url } = menuButton;

  return (
    <>
      <button className="mt-2" onClick={openMenu}>
        <Image src="/images/menu.svg" alt="" width="55" height="55" />
      </button>

      {showMenu && (
        <nav className="animate-fade-in fixed bottom-3 left-3 right-3 top-3 z-20 flex items-center justify-center rounded-xl bg-red-2">
          <ul className="flex flex-col items-center gap-8">
            {menuItems.map(({ url, label }, i) => (
              <li key={i} className="uppercase">
                <Link
                  className={
                    currentPath.includes(url)
                      ? 'underline underline-offset-4'
                      : ''
                  }
                  href={url}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mt-20">
              <ButtonLink link={url}>{label}</ButtonLink>
            </li>
          </ul>
          <button className="absolute right-2 top-2" onClick={closeMenu}>
            <Image src="/images/close.svg" alt="" width="55" height="55" />
          </button>
        </nav>
      )}
    </>
  );
}

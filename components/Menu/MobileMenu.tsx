'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import { menuData } from './menuData';
import ButtonLink from '@/ui/ButtonLink';
import { useMenuContext } from './MenuContext';

export default function MobileMenu({ ...spread }) {
  const { showMenu, openMenu, closeMenu } = useMenuContext();
  const currentPath = usePathname();

  const { menuItems, menuButton } = menuData;
  const { label, url } = menuButton;

  return (
    <div {...spread}>
      <button className="mt-2" onClick={openMenu}>
        <Image src="/images/menu.svg" alt="" width="55" height="55" />
      </button>

      {showMenu && (
        <nav className="fixed bottom-0 left-0 right-0 top-0 z-20 flex animate-fade-in items-center justify-center bg-gray">
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
    </div>
  );
}

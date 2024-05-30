import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type MenuItems } from '@/components/Menu/menuData';

type Props = {
  menuItems: MenuItems;
};

export default function Navigation({ menuItems }: Props) {
  const currentPath = usePathname();

  return (
    <nav className="rounded-xl bg-white/10 px-12 py-3 backdrop-brightness-110 transition-all duration-300 hover:bg-white/15">
      <ul className="flex gap-8">
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

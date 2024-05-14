import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const menuItems = [
  {
    label: 'O nas',
    url: '/o-nas',
  },
  {
    label: 'Oferta',
    url: '#',
  },
  {
    label: 'Realizacje',
    url: '#',
  },
  {
    label: 'Dołącz do nas',
    url: '#',
  },
];

export default function Navigation() {
  const currentPath = usePathname();

  return (
    <nav className="hidden rounded-xl bg-white/10 px-12 py-3 backdrop-brightness-110 lg:block">
      <ul className="flex gap-8">
        {menuItems.map(({ url, label }, i) => (
          <li key={i} className="text-sm uppercase">
            <Link
              className={
                currentPath === url ? 'underline underline-offset-4' : ''
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

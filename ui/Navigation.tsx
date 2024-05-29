import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const menuItems = [
  {
    label: 'O nas',
    url: '/o-nas',
  },
  {
    label: 'Oferta',
    url: '/oferta',
  },
  {
    label: 'Realizacje',
    url: '/realizacje',
  },
  {
    label: 'Dołącz do nas',
    url: '/dolacz-do-nas',
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

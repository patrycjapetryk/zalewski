export const menuItems = [
  {
    label: 'O nas',
    url: '#',
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
  return (
    <nav className="hidden rounded-xl bg-white/10 px-12 py-3 backdrop-brightness-110 lg:block">
      <ul className="flex gap-8">
        {menuItems.map((item, i) => (
          <li key={i} className="text-sm uppercase">
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

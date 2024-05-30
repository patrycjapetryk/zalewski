export const menuData = {
  menuItems: [
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
  ],
  menuButton: {
    label: 'Kontakt',
    url: '#kontakt',
  },
};

export type MenuItems = typeof menuData.menuItems;
export type MenuButton = typeof menuData.menuButton;

'use client';

import { type ReactNode, createContext, useState, useContext } from 'react';

type MenuContextType = {
  showMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export const MenuContext = createContext<MenuContextType | null>(null);

MenuContext.displayName = 'MenuContext';

export function useMenuContext() {
  const context = useContext(MenuContext);

  if (context === null) {
    throw new Error(
      'Oh no! Component should be placed inside MenuContextProvider',
    );
  }
  return context;
}

function useMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return { showMenu, openMenu, closeMenu };
}

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const { showMenu, openMenu, closeMenu } = useMenu();

  return (
    <MenuContext.Provider value={{ showMenu, openMenu, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

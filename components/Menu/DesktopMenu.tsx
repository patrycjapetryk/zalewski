import ButtonLink from '@/ui/ButtonLink';
import Navigation from '@/ui/Navigation';

import { menuData } from './menuData';

export default function DesktopMenu() {
  const { menuItems, menuButton } = menuData;
  const { label, url } = menuButton;

  return (
    <>
      <Navigation menuItems={menuItems} />
      <ButtonLink link={url}>{label}</ButtonLink>
    </>
  );
}

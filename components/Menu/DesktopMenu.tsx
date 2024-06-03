import { type ComponentProps } from 'react';

import { cn } from '@/utils/cn';
import ButtonLink from '@/ui/ButtonLink';
import Navigation from '@/ui/Navigation';

import { menuData } from './menuData';

type Props = ComponentProps<'div'>;

export default function DesktopMenu({ className, ...spread }: Props) {
  const { menuItems, menuButton } = menuData;
  const { label, url } = menuButton;

  return (
    <div className={cn('flex w-full justify-end', className)} {...spread}>
      <Navigation menuItems={menuItems} />
      <ButtonLink link={url}>{label}</ButtonLink>
    </div>
  );
}

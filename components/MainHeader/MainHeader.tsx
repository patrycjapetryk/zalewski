'use client';

import Logo from '@/ui/Logo';
import DesktopMenu from '@/components/Menu/DesktopMenu';
import MobileMenu from '@/components/Menu/MobileMenu';
import { useViewPort } from '@/hooks/useViewPort';

export default function MainHeader() {
  const { x } = useViewPort();

  return (
    <header className="z-10 w-full lg:fixed lg:left-0 lg:top-0">
      <div className="m-auto flex w-full max-w-screen-3xl items-center justify-between py-6 pl-4 md:px-[5%] md:py-10 xl:px-[7%] 2xl:px-[10%]">
        <Logo />
        {x >= 1024 ? <DesktopMenu /> : <MobileMenu />}
      </div>
    </header>
  );
}

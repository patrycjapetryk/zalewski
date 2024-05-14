'use client';

import ButtonLink from '../../ui/ButtonLink';
import Logo from '../../ui/Logo';
import Navigation from '../../ui/Navigation';

export default function Header() {
  return (
    <header className="z-10 w-full lg:fixed lg:left-0 lg:top-0">
      <div
        className="m-auto flex w-full max-w-screen-3xl items-center justify-between px-5 py-6
        sm:px-10 md:px-[5%] md:py-10 xl:px-[7%] 2xl:px-[10%]"
      >
        <Logo />
        <Navigation />
        <ButtonLink>Kontakt</ButtonLink>
      </div>
    </header>
  );
}

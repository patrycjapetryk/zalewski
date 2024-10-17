import Logo from '@/ui/Logo';
import Menu from '../Menu/Menu';

export default function Header() {
  return (
    <header className="z-10 w-full lg:fixed lg:left-0 lg:top-0">
      <div className="m-auto flex w-full max-w-screen-3xl items-center justify-between py-6 md:px-[5%] md:py-10 md:pl-0 lg:pl-10 xl:px-[7%] 2xl:px-[10%]">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

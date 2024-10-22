import Logo from '@/ui/Logo';
import Menu from '../Menu/Menu';

export default function Header() {
  return (
    <header className="shadow-red-sm z-10 w-full bg-gray lg:fixed lg:left-0 lg:top-0">
      <div className="m-auto flex w-full max-w-screen-3xl items-center justify-between py-6 md:px-[5%] md:pb-3 md:pl-0 md:pt-7 lg:pl-10 xl:px-[7%] 2xl:px-[10%]">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}

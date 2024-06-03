import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Menu() {
  return (
    <>
      <DesktopMenu className="hidden lg:flex" />
      <MobileMenu className="lg:hidden" />
    </>
  );
}

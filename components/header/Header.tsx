import ButtonLink from '../ui/ButtonLink';
import Logo from '../ui/Logo';
import Navigation from '../ui/Navigation';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Navigation />
      <ButtonLink>Kontakt</ButtonLink>
    </header>
  );
}

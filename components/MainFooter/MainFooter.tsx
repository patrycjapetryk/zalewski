import FooterHeader from '../../ui/FooterHeader';

export const socialMedia = [
  { name: 'Instagram', url: '#' },
  { name: 'Facebook', url: '#' },
  { name: 'Linkedin', url: '#' },
];

export default function MainFooter() {
  return (
    <footer className="grid grid-cols-1 gap-x-10 gap-y-8 py-6 text-xxs sm:grid-cols-2 lg:grid-cols-3">
      <section>
        <FooterHeader>Znajdziesz nas</FooterHeader>
        <p>
          ul. Józefa Piłsudskiego 6B lok. 15, 05-600 Grójec <br />
          tel.(48) 664 56 86
        </p>
      </section>
      <section>
        <FooterHeader>Social Media</FooterHeader>
        <nav>
          <ul className="flex gap-5 uppercase">
            {socialMedia.map((item, i) => (
              <li key={i}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section>
        <FooterHeader>Oddział w Warszawie</FooterHeader>
        <p>
          ul. Grzybowska 12/14, lok. 37 B<br />
          tel(48) 605 824 145
        </p>
      </section>
    </footer>
  );
}

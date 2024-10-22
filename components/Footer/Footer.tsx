import Image from 'next/image';

import FooterHeader from '@/ui/FooterHeader';

export const socialMedia = [
  { name: 'Instagram', url: '#', icon: '/images/sm-icon-1.svg' },
  { name: 'Facebook', url: '#', icon: '/images/sm-icon-2.svg' },
  { name: 'Linkedin', url: '#', icon: '/images/sm-icon-3.svg' },
];

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-x-10 gap-y-8 py-6 text-xxs sm:grid-cols-2 lg:grid-cols-3">
      <section>
        <FooterHeader>Znajdziesz nas</FooterHeader>
        <div className="flex items-center gap-4">
          <div>
            <Image
              className="h-auto w-[50px]"
              src="/images/icon-1.png"
              alt="Logo Varso Tower"
              width={81}
              height={56}
            />
          </div>
          <p>
            ul. Józefa Piłsudskiego 6B lok. 15, 05-600 Grójec <br />
            tel.(48) 664 56 86
          </p>
        </div>
      </section>
      <section>
        <FooterHeader>Social Media</FooterHeader>
        <nav>
          <ul className="flex gap-5 uppercase">
            {socialMedia.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <Image
                  className="h-auto w-[32px]"
                  src={item.icon}
                  alt=""
                  width={62}
                  height={59}
                />
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section>
        <FooterHeader>Oddział w Warszawie</FooterHeader>
        <div className="flex items-center gap-4">
          <div>
            <Image
              className="h-auto w-[40px]"
              src="/images/icon-2.png"
              alt="Logo Varso Tower"
              width={61}
              height={56}
            />
          </div>
          <p>
            ul. Grzybowska 12/14, lok. 37 B<br />
            tel(48) 605 824 145
          </p>
        </div>
      </section>
    </footer>
  );
}

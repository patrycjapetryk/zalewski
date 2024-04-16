import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

export default function ProjectsSection() {
  return (
    <section className="w-full">
      <SectionHeader>Realizacje</SectionHeader>

      <div className="grid w-full grid-cols-3 gap-5">
        <a href="#">
          <figure className="bg-red">
            <Image
              className="w-full"
              src="/images/photo-1.jpg"
              alt=""
              width={507}
              height={420}
              priority
            />

            <figcaption className="px-4 py-6">
              <h3 className="text-sm leading-none">Filtry warszawskie</h3>
            </figcaption>
          </figure>
        </a>

        <a href="#">
          <figure className="bg-red">
            <Image
              className="w-full"
              src="/images/photo-2.jpg"
              alt=""
              width={507}
              height={420}
              priority
            />

            <figcaption className="px-4 py-6">
              <h3 className="text-sm leading-none">Cedet Warszawa</h3>
            </figcaption>
          </figure>
        </a>

        <a href="#">
          <figure className="bg-red">
            <Image
              className="w-full"
              src="/images/photo-3.jpg"
              alt=""
              width={507}
              height={420}
              priority
            />

            <figcaption className="px-4 py-6">
              <h3 className="text-sm leading-none">Franke Polska Sękocin</h3>
            </figcaption>
          </figure>
        </a>
      </div>
    </section>
  );
}

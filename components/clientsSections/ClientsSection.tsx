import Image from 'next/image';

export default function ClientsSection() {
  return (
    <section className="grid grid-cols-3 gap-5">
      <div
        className={`
          relative col-span-2 rounded-2xl bg-red py-28 pl-[50%] pr-10 
          after:absolute after:right-2 after:top-2
          after:text-6xl after:content-['*']
        `}
      >
        <h2 className="mb-8 text-[1.75rem] leading-none">
          Klienci <br />
          Indywidualni
        </h2>
        <p className="text-sm">
          Budujesz dom? Zespół naszych specjalistów pomoże spełnić Twoje
          marzenia
        </p>
        <Image
          className="absolute bottom-0 left-0 w-[51%]"
          src="/images/photo-2.png"
          alt=""
          width={592}
          height={592}
        />
      </div>

      <div
        className={`
          relative rounded-2xl bg-red py-28 pl-14 pr-10
        `}
      >
        <h2 className="mb-8 text-[1.75rem] leading-none">
          Architekci i biura projektowe
        </h2>
        <p className="text-sm">
          Szukasz firmy, która kompleksowo zajmie się Twoim projektem? Zaufaj
          naszemu doświadczeniu.
        </p>
      </div>

      <div className="relative rounded-2xl bg-red py-28 pl-14 pr-10">
        <h2 className="mb-8 text-[1.75rem] leading-none">
          Firmy <br />
          branżowe
        </h2>
        <p className="text-sm">
          Prowadzisz inwestycje o wysokich kosztach? Oferujemy swoją pomoc.
          Sprawdź nasze referencje.
        </p>
      </div>

      <div className="relative col-span-2 rounded-2xl bg-red py-28 pl-14 pr-[50%]">
        <h2 className="mb-8 text-[1.75rem] leading-none">
          Klienci <br />
          Inwestycyjni
        </h2>
        <p className="text-sm">
          Oferta obejmuje wszystkie etapy procesu inwestycyjnego od analiz po
          doradztwo.
        </p>

        <Image
          className="absolute bottom-0 right-2 w-[45%]"
          src="/images/photo-3.png"
          alt=""
          width={592}
          height={592}
        />
      </div>
    </section>
  );
}

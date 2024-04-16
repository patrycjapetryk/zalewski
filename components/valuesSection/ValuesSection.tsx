import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

export default function ClientsSection() {
  return (
    <section className="w-full">
      <SectionHeader>Klienci zaufali nam</SectionHeader>

      <div className="grid-cols-18 grid w-full grid-rows-12 gap-5">
        <div className="col-span-6 row-span-6 rounded-2xl bg-red px-9 py-20">
          <h2 className="mb-8 text-[1.75rem] leading-none">Doświadczenie</h2>
          <p className="text-sm">
            Działamy już ponad 30 lat. Setki zrealizowanych projektów oraz
            doświadczenie naszego zespołu pozwala nam tworzyć rozwiązania
            dopasowane do indywidualnych wizji i potrzeb klientów.
          </p>
        </div>
        <div className="col-span-5 row-span-7 rounded-2xl bg-red px-9 py-20">
          <h2 className="mb-8 text-[1.75rem] leading-none">
            Gwarancja Bezpieczeństwa
          </h2>
          <p className="text-sm">
            Wieloletnie doświadczenie oraz znakomity zespół specjalistów pozwala
            nam na realizacje bezpiecznych projektów w oparciu o nowoczesne
            rozwiązania.
          </p>
        </div>
        <div className="col-span-7 row-span-7 rounded-2xl bg-red px-9 py-20 pt-20">
          <h2 className="mb-8 text-[1.75rem] leading-none">Przezroczystość</h2>
          <p className="text-sm">
            To kim jesteśmy i jak realizujemy powierzone nam projekty, pozwala
            nam zdobywać kolejne referencje. Nieustannie podlegamy ocenom, i
            nieustannie powiększamy grono zadowolonych klientów.
          </p>
        </div>

        <div className="col-span-6 row-span-6 rounded-2xl bg-red px-9 py-20">
          <h2 className="mb-8 text-[1.75rem] leading-none">
            Kreatywność i ambicja
          </h2>
          <p className="text-sm">
            Stale rozwijamy się, aby dostarczać unikalne i nowoczesne
            rozwiązania na miarę nadchodzących wyzwań. Dla nas nie ma rzeczy
            niemożliwych.
          </p>
        </div>
        <div className="col-span-6 row-span-5 rounded-2xl bg-red px-9 py-20">
          <h2 className="mb-8 text-[1.75rem] leading-none">
            Relacje i współpraca
          </h2>
          <p className="text-sm">
            Ciągłość działania Twojego biznesu zależy także od naszych
            kompetencji, dlatego ogromną wagę przywiązujemy do budowania
            zaufania i pozytywnych relacji.
          </p>
        </div>
        <div className="col-span-6 row-span-5 rounded-2xl bg-red px-9 py-20">
          <h2 className="mb-8 text-[1.75rem] leading-none">
            Filozofia inwestycyjna
          </h2>
          <p className="text-sm">
            Naszą największą wartością są ludzie. Stale rozwijamy swoje
            kompetencje, aby z sukcesem realizować unikalne i nowoczesne
            rozwiązania powierzonych nam zadań.
          </p>
        </div>
      </div>
    </section>
  );
}

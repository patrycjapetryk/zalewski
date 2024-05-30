import SectionHeader from '@/ui/SectionHeader';
import Header from '@/ui/Header';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';

export default function CoreValuesSection() {
  return (
    <Section>
      <SectionHeader>Klienci zaufali nam</SectionHeader>

      <div className="grid w-full grid-cols-1 grid-rows-12 gap-5 sm:grid-cols-18">
        <article className="row-span-2 rounded-2xl bg-red px-8 py-12 sm:col-span-9 sm:row-span-6 lg:col-span-6 xl:px-9 xl:py-20">
          <Header>Doświadczenie</Header>
          <Paragraph>
            Działamy już ponad 30 lat. Setki zrealizowanych projektów oraz
            doświadczenie naszego zespołu pozwala nam tworzyć rozwiązania
            dopasowane do indywidualnych wizji i potrzeb klientów.
          </Paragraph>
        </article>

        <article className="row-span-2 rounded-2xl bg-red px-8 py-12 sm:col-span-9 sm:row-span-7 lg:col-span-5 xl:px-9 xl:py-20">
          <Header>Gwarancja Bezpieczeństwa</Header>
          <Paragraph>
            Wieloletnie doświadczenie oraz znakomity zespół specjalistów pozwala
            nam na realizacje bezpiecznych projektów w oparciu o nowoczesne
            rozwiązania.
          </Paragraph>
        </article>

        <article className="row-span-2 rounded-2xl bg-red px-8 py-12 sm:col-span-9 sm:row-span-7 lg:col-span-7 xl:px-9 xl:py-20">
          <Header>Przezroczystość</Header>
          <Paragraph>
            To kim jesteśmy i jak realizujemy powierzone nam projekty, pozwala
            nam zdobywać kolejne referencje. Nieustannie podlegamy ocenom, i
            nieustannie powiększamy grono zadowolonych klientów.
          </Paragraph>
        </article>

        <article className="row-span-2 rounded-2xl bg-red px-8 py-12 sm:col-span-9 sm:row-span-6 lg:col-span-6 xl:px-9 xl:py-20">
          <Header>Kreatywność i ambicja</Header>
          <Paragraph>
            Stale rozwijamy się, aby dostarczać unikalne i nowoczesne
            rozwiązania na miarę nadchodzących wyzwań. Dla nas nie ma rzeczy
            niemożliwych.
          </Paragraph>
        </article>

        <article className="row-span-2 rounded-2xl bg-red px-8 py-12 sm:col-span-9 sm:row-span-5 lg:col-span-6 xl:px-9 xl:py-20">
          <Header>Relacje i&nbsp;współpraca</Header>
          <Paragraph>
            Ciągłość działania Twojego biznesu zależy także od naszych
            kompetencji, dlatego ogromną wagę przywiązujemy do budowania
            zaufania i pozytywnych relacji.
          </Paragraph>
        </article>

        <article className="row-span-2 rounded-2xl bg-red px-8 py-12 sm:col-span-9 sm:row-span-5 lg:col-span-6 xl:px-9 xl:py-20">
          <Header>Filozofia inwestycyjna</Header>
          <Paragraph>
            Naszą największą wartością są ludzie. Stale rozwijamy swoje
            kompetencje, aby z sukcesem realizować unikalne i nowoczesne
            rozwiązania powierzonych nam zadań.
          </Paragraph>
        </article>
      </div>
    </Section>
  );
}

import Header from '@/ui/Header';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';
import CoreValuesArticle from './CoreValuesArticle';

export default function CoreValuesSection() {
  return (
    <Section>
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
        <CoreValuesArticle>
          <Header>Filozofia inwestycyjna</Header>
          <Paragraph>
            Naszą największą wartością są ludzie. Stale rozwijamy swoje
            kompetencje, aby z sukcesem realizować unikalne i nowoczesne
            rozwiązania powierzonych nam zadań.
          </Paragraph>
        </CoreValuesArticle>

        <CoreValuesArticle>
          <Header>Relacje i współpraca</Header>
          <Paragraph>
            Ciągłość działania Twojego biznesu zależy także od naszych
            kompetencji, dlatego ogromną wagę przywiązujemy do budowania
            zaufania i pozytywnych relacji.
          </Paragraph>
        </CoreValuesArticle>

        <CoreValuesArticle>
          <Header>Doświadczenie</Header>
          <Paragraph>
            Działamy już ponad 30 lat. Setki zrealizowanych projektów oraz
            doświadczenie naszego zespołu pozwala nam tworzyć rozwiązania
            dopasowane do indywidualnych wizji i potrzeb klientów.
          </Paragraph>
        </CoreValuesArticle>

        <CoreValuesArticle>
          <Header>Gwarancja Bezpieczeństwa</Header>
          <Paragraph>
            Wieloletnie doświadczenie oraz znakomity zespół specjalistów pozwala
            nam na realizacje bezpiecznych projektów w oparciu o nowoczesne
            rozwiązania.
          </Paragraph>
        </CoreValuesArticle>
      </div>
    </Section>
  );
}

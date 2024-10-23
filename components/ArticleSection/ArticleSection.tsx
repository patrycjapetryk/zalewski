import MainHeader from '@/ui/MainHeader';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';

export default function ArticleSection() {
  return (
    <Section>
      <article className="px-6 py-4 xl:px-16 xl:py-8">
        <MainHeader>O nas</MainHeader>

        <Paragraph className="mb-10">
          JESTEŚMY FIRMĄ RODZINNĄ, KTÓRA ŁĄCZY DWA POKOLENIA SPECJALISTÓW W
          ZAKRESIE INŻYNIERII ŚRODOWISKA. POSIADAMY ODPOWIEDNIĄ KADRĘ DO
          PODJĘCIA WSZYSTKICH ZADAŃ WYNIKAJĄCYCH Z PROCESU BUDOWLANEGO.
        </Paragraph>
        <Paragraph className="mb-10">
          Firma Przemysław Zalewski i Wspólnicy „PZW” kontynuuje doświadczenia
          projektowe rozpoczęte w 1985 roku przez Tadeusza Zalewskiego. Nasz
          wyspecjalizowany zespół projektowo-analityczny liczy ponad 20 osób.
          Świadczymy usługi zaczynając od początkowych prac koncepcyjnych,
          poprzez projekt, nadzór nad wykonaniem a kończąc na optymalizacji
          użytkowania obiektów budowlanych. Do prac używamy najnowszego
          oprogramowania z zakresu platform do projektowania sieci zewnętrznych,
          modelowania 3D oraz analiz obliczeniowych zagadnień z zakresu
          Inżynierii Środowiska. Stale rozwijamy się, aby dostarczać unikalne i
          nowoczesne rozwiązania na miarę nadchodzących wyzwań. Dla nas nie ma
          rzeczy niemożliwych.
        </Paragraph>
        <Paragraph className="mb-10">
          Działamy na ternie całej Polski. Posiadamy także duże doświadczenie
          nabyte podczas współpracy z klientami zagranicznymi. Mamy odpowiednie
          doświadczenie w realizacji zleceń również poza dużymi ośrodkami
          miejskimi. Oferujemy usługi dostosowane do ich specyfiki pracy,
          zwracając dużą uwagę na wymagania przemysłu oraz oczekiwania
          mieszkańców tych terenów.
        </Paragraph>
        <Paragraph className="mb-10">
          Celem naszej działalności jest podnoszenie standardu i optymalizacji
          działania projektowanych i nadzorowanych sieci, instalacji i urządzeń
          cieplnych, wentylacyjnych, gazowych, wodociągowych oraz
          kanalizacyjnych dla potrzeb naszego zleceniodawcy. Wieloletnie
          doświadczenie oraz znakomity zespół specjalistów pozwala nam na
          realizacje bezpiecznych projektów w oparciu o nowoczesne rozwiązania.
          Naszą największą wartością są ludzie. Poprzez ciągły rozwój
          kompetencji i zaangażowanie naszych pracowników realizujemy z sukcesem
          powierzone nam zadania.
        </Paragraph>
      </article>
    </Section>
  );
}

import MainHeader from '@/ui/MainHeader';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

export default function JoinUsSection() {
  return (
    <Section>
      <MainHeader className="hidden">Dołącz do nas</MainHeader>
      <article>
        <SectionHeader className="mb-10 xl:mb-14">
          Dla studentów/stażystów
        </SectionHeader>
        <Paragraph className="mb-10">
          Jeśli jesteś absolwentem studiów wyższych lub studentem ostatnich lat
          i dopiero rozpoczynasz swoją karierę zawodową możesz dołączyć do
          naszego programu stażowego, który zakłada intensywny 2-letni rozwój w
          wybranym dziele fachowym. W trakcie trwania stażu będziesz miał okazję
          nie tylko podnosić swoje kwalifikacje zawodowe, ale również prowadzić
          samodzielne projekty.
        </Paragraph>
      </article>
      <article className="mt-12 xl:mt-14">
        <SectionHeader className="mb-10 xl:mb-14">
          Dla architektów
        </SectionHeader>
        <Paragraph className="mb-10 flex flex-col gap-6">
          <span>
            Marzysz o pracy, która pozwoli połączyć Twoją pasję z rozwojem
            zawodowym? Chciałbyś znaleźć się w otoczeniu, w którym wiele się
            zmienia i w którym możesz wiele zmienić? Chętnie doskonalisz swoje
            umiejętności, dzielisz się doświadczeniem, wyznaczasz cele, osiągasz
            zakładane rezultaty, masz silną potrzebę identyfikacji z firmą i jej
            strategią? Dołącz do naszego zespołu, by razem z nami uczestniczyć w
            budowaniu sukcesu firmy.
          </span>
          <span>
            Wierzymy, że ludzie, ich kompetencje, zaangażowanie i kreatywność
            stanowią najcenniejszy zasób firmy. Dużą wagę przywiązujemy do tego,
            by nasi Pracownicy byli zadowoleni i dumni z miejsca pracy. Naszym
            celem jest stworzenie optymalnych warunków, w których każdy
            Pracownik ma szansę na podnoszenie swoich kwalifikacji zawodowych.
          </span>
          <span>
            Pracując w firmie Przemysław Zalewski i Wspólnicy „PZW”, bierzesz
            udział w realizacji ciekawych i nowoczesnych projektów. Jeśli chcesz
            wywrzeć istotny i długotrwały wpływ na otaczający Cię świat dołącz
            do naszego zespołu i razem z nami buduj sukces firmy.
          </span>
        </Paragraph>
      </article>
      <article className="mt-12 xl:mt-14">
        <SectionHeader className="mb-10 xl:mb-14">
          Aktualne oferty
        </SectionHeader>
        <ul className="flex max-w-[60%] justify-between gap-2">
          <li>ARCHITEKT</li>
          <li>ARCHITEKT</li>
          <li>ARCHITEKT</li>
        </ul>
      </article>
    </Section>
  );
}

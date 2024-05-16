import GridList from '@/ui/GridList';
import List from '@/ui/List';
import MainHeader from '@/ui/MainHeader';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';
import ClientsImage from './ClientsImage';
import { type ClientsDataItem } from './clientsData';

// const clientsData = {
//   preparation: [
//     'Analiza kosztów budowy i użytkowania źródeł ciepła dla poszczególnych budynków;',
//     'Opracowywanie projektów przyłącz wodociągowych i kanalizacyjnych;',
//     'Opracowywanie projektów przyłącz gazu ziemnego;',
//     'Opracowywanie projektów przydomowych oczyszczalni ścieków;',
//     'Opracowywanie projektów zbiorników na propan;',
//     'Wykonywanie przyłącz wodociągowych (zaopatrzenie w wodę dla celów budowy);',
//     'Opracowywanie projektów zbiorników na nieczystości (szamba);',
//     'Opracowywanie projektów instalacji wewnętrznych: wodno kanalizacyjnych, centralnego ogrzewania, źródeł ciepła i wentylacji mechanicznej z odzyskiem ciepła;',
//   ],
//   realization: [
//     'wykonywanie przyłącz wodociągowych i kanalizacyjnych do budynków;',
//     'nadzór inwestorski nad wykonaniem wyżej wymienionych robót budowlanych;',
//     'odbiory inwestorskie wykonywanych instalacji, a w szczególności sprawdzenie poprawności pracy i bezpieczeństwa użytkowania;',
//   ],
//   use: [
//     'ocena poprawności pracy instalacji centralnego ogrzewania i źródła ciepła;',
//     'ocena bezpieczeństwa pracy instalacji centralnego ogrzewania i źródła ciepła;',
//   ],
// };

type Props = {
  clientsPageData: ClientsDataItem;
};

export default function ClientsSection({ clientsPageData }: Props) {
  const { title, photo, texts, preparation, realization, use } =
    clientsPageData;

  return (
    <Section className="relative">
      <div className="grid grid-cols-3 rounded-2xl bg-red px-6 py-4 xl:px-16 xl:pb-16 xl:pt-14">
        <div>
          <MainHeader uppercase>{title}</MainHeader>
          <ClientsImage photo={photo} />
        </div>
        <div className="col-span-2 pl-20">
          {texts.map((text, index) => (
            <Paragraph key={index} className="mb-10">
              {text}
            </Paragraph>
          ))}

          <GridList list={preparation} largerRectanglesIndexes={[7]} />
          <List title="Realizacja inwestycji:" list={realization} />
          <List title="Użytkowanie instalacji:" list={use} />
        </div>
      </div>
    </Section>
  );
}

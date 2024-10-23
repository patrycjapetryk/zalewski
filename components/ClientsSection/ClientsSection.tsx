import GridList from '@/ui/GridList';
import List from '@/ui/List';
import MainHeader from '@/ui/MainHeader';
import Paragraph from '@/ui/Paragraph';
import Section from '@/ui/Section';
import ClientsImage from './ClientsImage';
import { type ClientsDataItem } from './clientsData';

type Props = {
  clientsPageData: ClientsDataItem;
};

export default function ClientsSection({ clientsPageData }: Props) {
  const { title, photo, texts, preparation, realization, use } =
    clientsPageData;

  return (
    <Section className="relative">
      <div className="grid grid-cols-1 px-2 pb-12 xl:grid-cols-3 xl:px-16 xl:py-4 xl:pb-16 xl:pt-14">
        <div>
          <MainHeader className="mb-[380px]" uppercase>
            {title}
          </MainHeader>
          <ClientsImage photo={photo} />
        </div>
        <div className="xl:col-span-2 xl:pl-20">
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

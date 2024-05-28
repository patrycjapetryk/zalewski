import { notFound } from 'next/navigation';

import {
  type ClientsDataItem,
  clientsData,
} from '@/components/ClientsSection/clientsData';
import Main from '@/ui/Main';
import ClientsSection from '@/components/ClientsSection/ClientsSection';
import ContactFormSection from '@/components/ContactFormSection/ContactFormSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';

export function getPageDataByUID(uid: string): ClientsDataItem | null {
  const clientsPageDataIndex = clientsData.findIndex(
    (item) => item.uid === uid,
  );
  return clientsData[clientsPageDataIndex];
}

export default function ClientsPage({ params }: { params: { uid: string } }) {
  const clientsPageData = getPageDataByUID(params.uid);

  if (!clientsPageData) {
    return notFound();
  }

  return (
    <Main className="mt-4">
      <ClientsSection clientsPageData={clientsPageData} />
      <PartnersSection />
      <ContactFormSection />
    </Main>
  );
}

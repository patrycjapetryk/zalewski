import { notFound } from 'next/navigation';

import {
  type AllProjectsDataItem,
  allProjectsData,
} from '@/components/AllProjectsSection/allProjectsData';
import Main from '@/ui/Main';

import ContactFormSection from '@/components/ContactFormSection/ContactFormSection';
import PartnersSection from '@/components/PartnersSection/PartnersSection';
import ProjectSection from '@/components/ProjectSection/ProjectSection';

export function getPageDataByUID(uid: string): AllProjectsDataItem | null {
  const allProjectsDataIndex = allProjectsData.findIndex(
    (item) => item.uid === uid,
  );
  return allProjectsData[allProjectsDataIndex];
}

export default function ProjectPage({ params }: { params: { uid: string } }) {
  const projectData = getPageDataByUID(params.uid);

  if (!projectData) {
    return notFound();
  }

  return (
    <Main className="mt-4">
      <ProjectSection projectData={projectData} />
      <PartnersSection />
      <ContactFormSection />
    </Main>
  );
}

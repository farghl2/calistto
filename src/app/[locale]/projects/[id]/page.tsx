import { notFound } from 'next/navigation';
import { projectsData } from '@/src/shared/constans/data';
import SingleProject from '@/src/features/projects/components/SingleProject';


export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return <SingleProject projectId={project.id} />;
}

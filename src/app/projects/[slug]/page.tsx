import { notFound } from 'next/navigation';
import { translations } from '@/context/translations';
import ProjectDetailClient from './project-detail-client';

// This function is needed for Next.js to know which dynamic routes to pre-render at build time.
export async function generateStaticParams() {
    const slugs = new Set<string>();
    Object.values(translations).forEach(lang => {
        lang.projects.projects.forEach(project => {
            slugs.add(project.slug);
        });
    });

    return Array.from(slugs).map(slug => ({ slug }));
}

function findProjectBySlug(slug: string) {
    for (const lang of Object.keys(translations)) {
        const key = lang as keyof typeof translations;
        const foundProject = translations[key].projects.projects.find(p => p.slug === slug);
        if (foundProject) {
            return { project: foundProject, projectLang: key };
        }
    }
    return null;
}


export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const result = findProjectBySlug(params.slug);

  if (!result) {
    notFound();
  }

  const { project, projectLang } = result;

  return <ProjectDetailClient project={project} projectLang={projectLang} />;
}

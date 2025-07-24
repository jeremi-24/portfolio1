import { notFound } from 'next/navigation';
import { translations } from '@/context/translations';
import ProjectDetailClient from './project-detail-client';
import type { Project } from '@/context/translations';

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

function findProjectData(slug: string) {
    for (const lang of Object.keys(translations)) {
        const key = lang as keyof typeof translations;
        const projectList = translations[key].projects.projects;
        const projectIndex = projectList.findIndex(p => p.slug === slug);

        if (projectIndex !== -1) {
            const project = projectList[projectIndex];
            const previousProject = projectIndex > 0 ? projectList[projectIndex - 1] : null;
            const nextProject = projectIndex < projectList.length - 1 ? projectList[projectIndex + 1] : null;
            
            return { 
                project, 
                projectLang: key,
                previousProject,
                nextProject
            };
        }
    }
    return null;
}


export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const result = findProjectData(params.slug);

  if (!result) {
    notFound();
  }

  const { project, projectLang, previousProject, nextProject } = result;

  return <ProjectDetailClient project={project} projectLang={projectLang} previousProject={previousProject} nextProject={nextProject} />;
}

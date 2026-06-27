import { ArrowUpRight, GitFork } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work you can shape into a stronger portfolio."
          description="These sample cards are ready to be replaced with real projects, case studies, deployments, and repositories as your body of work grows."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="glass-panel card-hover flex h-full flex-col rounded-lg p-6"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-md bg-teal-300/10 text-teal-100 ring-1 ring-teal-200/20">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-md border border-amber-200/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
                    Sample
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-stone-50">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-stone-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-stone-300 ring-1 ring-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-stone-100 px-4 py-2.5 text-sm font-bold text-stone-950 transition hover:bg-teal-200"
                  >
                    View Project
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-stone-100 transition hover:border-rose-200/30 hover:bg-rose-300/10"
                  >
                    GitHub
                    <GitFork className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

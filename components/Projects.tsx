import { ArrowUpRight, GitFork } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          id="projects-heading"
          eyebrow="Software Projects"
          title="Practical project ideas connected to real workflows."
          description="These concepts are intentionally grounded in the environments I understand: scholarship administration, clinic operations, finance planning, and executive support."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Card
                as="article"
                key={project.title}
                className="flex h-full flex-col p-6"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-md bg-teal-300/10 text-teal-100 ring-1 ring-teal-200/20">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <Pill className="border-amber-200/20 bg-amber-300/10 py-1 font-semibold text-amber-100">
                    {project.status}
                  </Pill>
                </div>

                <h3 className="text-xl font-semibold text-stone-50">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-stone-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Pill
                      key={tech}
                      className="bg-white/[0.05] ring-1 ring-white/10"
                    >
                      {tech}
                    </Pill>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <ButtonLink
                    href={project.liveUrl}
                    icon={ArrowUpRight}
                    variant="light"
                    size="sm"
                    disabledReason="Live project link coming soon"
                  >
                    View Project
                  </ButtonLink>
                  <ButtonLink
                    href={project.githubUrl}
                    icon={GitFork}
                    variant="ghost"
                    size="sm"
                    disabledReason="GitHub repository link coming soon"
                  >
                    GitHub
                  </ButtonLink>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

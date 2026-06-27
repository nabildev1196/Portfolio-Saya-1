import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Technical skills supported by real business experience."
          description="I combine modern web development fundamentals with professional experience in operations, client service, coordination, and workflow management."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Card
                as="article"
                key={group.title}
                className="p-5"
              >
                <div
                  className={`mb-5 grid size-11 place-items-center rounded-md ring-1 ${group.accent}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-stone-50">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Pill
                      key={skill}
                      className="transition hover:border-teal-200/30 hover:text-white"
                    >
                      {skill}
                    </Pill>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

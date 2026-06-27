import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A focused toolkit for modern product engineering."
          description="My skill set spans user interfaces, APIs, databases, tooling, and the communication habits that help teams move with clarity."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="glass-panel card-hover rounded-lg p-5"
              >
                <div
                  className={`mb-5 grid size-11 place-items-center rounded-md ring-1 ${group.accent}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-stone-50">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-stone-300 transition hover:border-teal-200/30 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { professionalExperiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow="Professional Experience"
          title="Business experience that strengthens my software thinking."
          description="My background spans administration, healthcare operations, financial planning, client service, and executive support. This helps me understand real workflows before designing digital solutions."
        />

        <div className="mt-12 grid gap-5">
          {professionalExperiences.map((experience, index) => (
            <Card as="article" key={`${experience.title}-${experience.duration}`} className="p-6">
              <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="font-mono text-xs font-semibold text-amber-200">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-stone-50">
                    {experience.title}
                  </h3>
                  {experience.company ? (
                    <p className="mt-2 text-sm font-semibold text-teal-100">
                      {experience.company}
                    </p>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Pill className="border-teal-200/20 bg-teal-300/10 text-teal-100">
                      {experience.duration}
                    </Pill>
                    <Pill>{experience.type}</Pill>
                    {experience.location ? <Pill>{experience.location}</Pill> : null}
                  </div>
                </div>

                <ul className="grid gap-3">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-stone-300">
                      <CheckCircle2
                        className="mt-1 size-4 shrink-0 text-teal-200"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

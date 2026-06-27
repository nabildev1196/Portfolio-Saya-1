import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { aboutHighlights, profile } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" className="relative">
      <Container>
        <SectionHeading
          id="about-heading"
          eyebrow="About Me"
          title="Software engineering shaped by real-world operations."
          description={profile.about}
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          {aboutHighlights.map((highlight) => (
            <Card
              key={highlight}
              className="p-5"
            >
              <CheckCircle2 className="mb-4 size-6 text-teal-200" aria-hidden="true" />
              <p className="text-sm font-semibold text-stone-100">{highlight}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

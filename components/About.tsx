import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/portfolio";

const highlights = [
  "Practical problem solving",
  "Clean, readable implementation",
  "Curiosity about systems and products",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Building the kind of software people can trust."
          description={profile.about}
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="glass-panel card-hover rounded-lg p-5"
            >
              <CheckCircle2 className="mb-4 size-6 text-teal-200" aria-hidden="true" />
              <p className="text-sm font-semibold text-stone-100">{highlight}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

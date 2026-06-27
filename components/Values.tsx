import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/Card";
import { engineeringConnection, values } from "@/data/portfolio";

export function Values() {
  return (
    <Section id="software-fit">
      <Container>
        <SectionHeading
          id="software-fit-heading"
          eyebrow="Software Engineering Fit"
          title={engineeringConnection.title}
          description={engineeringConnection.text}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                as="article"
                key={value.title}
                className="p-5"
              >
                <div className="mb-5 grid size-11 place-items-center rounded-md bg-white/[0.05] text-amber-100 ring-1 ring-white/10">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold leading-6 text-stone-50">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{value.text}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

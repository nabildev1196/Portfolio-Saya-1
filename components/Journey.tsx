import { Circle } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { journey } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="A steady path toward stronger engineering judgment."
          description="My journey is about consistent progress: learning the fundamentals, building projects, and developing the habits that make software dependable."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-teal-300 via-amber-200 to-rose-300 sm:left-1/2" />
            <div className="space-y-8">
              {journey.map((item, index) => (
                <article
                  key={item.title}
                  className={`relative grid gap-5 sm:grid-cols-2 ${index % 2 === 0 ? "" : "sm:[&>div:first-child]:col-start-2"}`}
                >
                  <span className="absolute left-4 top-6 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-md border border-teal-200/30 bg-stone-950 text-teal-100 sm:left-1/2">
                    <Circle className="size-3 fill-current" aria-hidden="true" />
                  </span>
                  <div className="glass-panel card-hover ml-10 rounded-lg p-5 sm:ml-0">
                    <p className="font-mono text-xs font-semibold text-amber-200">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-stone-50">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-300">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

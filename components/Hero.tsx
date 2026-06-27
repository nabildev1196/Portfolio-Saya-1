import { ArrowRight, Mail, MousePointer2, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { heroHighlights, profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative min-h-screen overflow-hidden pt-36 md:pt-32"
    >
      <div className="animated-grid" aria-hidden="true" />
      <Container className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="reveal-up inline-flex items-center gap-2 rounded-md border border-teal-200/20 bg-teal-300/10 px-3 py-2 text-sm font-medium text-teal-100">
            <Sparkles className="size-4" aria-hidden="true" />
            Software engineering with real business context
          </div>

          <h1
            id="home-heading"
            className="reveal-up-delay-1 mt-7 max-w-4xl text-5xl font-semibold leading-tight text-stone-50 sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{profile.headline}</span>
          </h1>

          <p className="reveal-up-delay-2 mt-6 max-w-2xl text-xl leading-9 text-stone-200 sm:text-2xl">
            {profile.subheadline}
          </p>

          <p className="reveal-up-delay-3 mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            {profile.intro}
          </p>

          <div className="reveal-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="#projects"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              View My Work
            </ButtonLink>
            <ButtonLink
              href="#contact"
              icon={Mail}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Contact Me
            </ButtonLink>
          </div>
        </div>

        <div className="reveal-up-delay-2 relative">
          <Card hover={false} className="p-5 sm:p-6">
            <div className="mb-5 grid gap-5 border-b border-white/10 pb-5 sm:grid-cols-[132px_1fr]">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-stone-100">
                <img
                  src={profile.photo}
                  alt="Portrait of Nabil Khairi"
                  className="aspect-[4/5] h-full w-full object-cover object-[center_35%]"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-amber-200">
                    Professional Profile
                  </p>
                  <p className="mt-1 text-xl font-semibold text-stone-50">{profile.name}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    Software engineering enthusiast with hands-on experience in operations,
                    administration, client service, finance, and healthcare workflows.
                  </p>
                </div>
                <div className="grid size-11 shrink-0 place-items-center rounded-md bg-rose-300/10 text-rose-100 ring-1 ring-rose-200/20">
                  <MousePointer2 className="size-5" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {heroHighlights.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md border border-white/10 bg-black/20 p-4 transition hover:border-teal-200/30"
                >
                  <p className="font-mono text-xs uppercase text-stone-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-200">{value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

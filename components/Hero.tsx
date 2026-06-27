import { ArrowRight, Mail, MousePointer2, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <div className="animated-grid" aria-hidden="true" />
      <Container className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <div className="reveal-up inline-flex items-center gap-2 rounded-md border border-teal-200/20 bg-teal-300/10 px-3 py-2 text-sm font-medium text-teal-100">
            <Sparkles className="size-4" aria-hidden="true" />
            Open to software engineering opportunities
          </div>

          <h1 className="reveal-up-delay-1 mt-7 max-w-4xl text-5xl font-semibold leading-tight text-stone-50 sm:text-6xl lg:text-7xl">
            <span className="gradient-text">{profile.headline}</span>
          </h1>

          <p className="reveal-up-delay-2 mt-6 max-w-2xl text-xl leading-9 text-stone-200 sm:text-2xl">
            {profile.subheadline}
          </p>

          <p className="reveal-up-delay-3 mt-5 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            {profile.intro}
          </p>

          <div className="reveal-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-teal-200"
            >
              View My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/5 px-5 py-3 text-sm font-bold text-stone-50 transition hover:border-amber-200/40 hover:bg-amber-300/10"
            >
              Contact Me
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="reveal-up-delay-2 relative">
          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-xs uppercase text-amber-200">
                  Engineer Profile
                </p>
                <p className="mt-1 text-lg font-semibold text-stone-50">{profile.name}</p>
              </div>
              <div className="grid size-11 place-items-center rounded-md bg-rose-300/10 text-rose-100 ring-1 ring-rose-200/20">
                <MousePointer2 className="size-5" aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                ["Focus", "Clean code, scalable systems, useful products"],
                ["Mindset", "Problem solver with strong product curiosity"],
                ["Current Goal", "Growing into a trusted software engineer"],
              ].map(([label, value]) => (
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
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Mail, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, socialLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Build Something Together"
          description="Have an opportunity, collaboration, or project idea? I’d be glad to connect and talk through how I can help."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-lg p-6">
            <div className="grid size-12 place-items-center rounded-md bg-teal-300/10 text-teal-100 ring-1 ring-teal-200/20">
              <Mail className="size-6" aria-hidden="true" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-stone-50">
              Start a conversation
            </h3>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              I’m interested in software engineering roles, freelance projects, and meaningful
              product conversations where thoughtful engineering can create real value.
            </p>

            <a
              href={profile.links.email}
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-stone-100 transition hover:border-teal-200/30 hover:bg-teal-300/10"
            >
              {profile.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-semibold text-stone-200 transition hover:border-amber-200/30 hover:text-white"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <form className="glass-panel rounded-lg p-6">
            {/* This form is currently UI-only. Connect it to an API route or form service later. */}
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-stone-200">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-teal-200/50 focus:ring-4 focus:ring-teal-300/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-stone-200">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-teal-200/50 focus:ring-4 focus:ring-teal-300/10"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-semibold text-stone-200">Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                className="mt-2 w-full resize-none rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-teal-200/50 focus:ring-4 focus:ring-teal-300/10"
              />
            </label>

            <button
              type="button"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-teal-200 sm:w-auto"
            >
              Send Message
              <Send className="size-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

import { Mail, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { TextField } from "@/components/ui/TextField";
import { profile, socialLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let’s Build Something Together"
          description="Have an opportunity, collaboration, or project idea? I’d be glad to connect and talk through how I can help."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card hover={false} className="p-6">
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

            <ButtonLink
              href={profile.links.email}
              variant="outline"
              size="sm"
              className="mt-6 w-full justify-center sm:w-auto"
            >
              {profile.email}
            </ButtonLink>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <ButtonLink
                    key={link.label}
                    href={link.href}
                    icon={Icon}
                    variant="ghost"
                    size="sm"
                  >
                    {link.label}
                  </ButtonLink>
                );
              })}
            </div>
          </Card>

          <Card
            as="section"
            hover={false}
            className="p-6"
            aria-label="Contact form"
          >
            <form action={profile.links.email} method="post" encType="text/plain">
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <TextField
                label="Message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                multiline
                required
                className="mt-5 block"
              />

              <button
                type="submit"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-teal-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300/20 sm:w-auto"
              >
                Send Message
                <Send className="size-4" aria-hidden="true" />
              </button>
            </form>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

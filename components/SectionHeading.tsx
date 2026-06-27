type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs font-semibold uppercase text-teal-200">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-semibold text-stone-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-stone-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

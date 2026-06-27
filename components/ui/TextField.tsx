type TextFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  className?: string;
};

const fieldClassName =
  "mt-2 w-full rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-teal-200/50 focus:ring-4 focus:ring-teal-300/10";

export function TextField({
  label,
  name,
  placeholder,
  autoComplete,
  type = "text",
  multiline = false,
  rows = 6,
  required = false,
  className,
}: TextFieldProps) {
  const id = `contact-${name}`;

  return (
    <label className={className ?? "block"} htmlFor={id}>
      <span className="text-sm font-semibold text-stone-200">{label}</span>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className={`${fieldClassName} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className={fieldClassName}
        />
      )}
    </label>
  );
}

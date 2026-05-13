export function FormSection({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="premium-card rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-950">{title}</h2>
        {description ? <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p> : null}
      </div>
      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}

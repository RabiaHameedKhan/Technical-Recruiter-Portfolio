const industries = ["Fintech", "SaaS", "E-commerce", "HealthTech", "EdTech", "PropTech", "AI Startups", "Enterprise"];

export function TrustBar() {
  return (
    <section className="theme-purple overflow-hidden border-y border-white/20 py-7">
      <div className="container-page flex flex-col gap-5 md:flex-row md:items-center">
        <p className="shrink-0 text-sm font-bold uppercase tracking-[0.18em] text-white">Trusted by companies in</p>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee gap-3">
            {[...industries, ...industries].map((item, index) => (
              <span key={`${item}-${index}`} className="rounded-full border border-white/30 bg-transparent px-5 py-2 text-sm font-medium text-white shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

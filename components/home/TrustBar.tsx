const industries = ["Fintech", "SaaS", "E-commerce", "HealthTech", "EdTech", "PropTech", "AI Startups", "Enterprise"];

export function TrustBar() {
  return (
    <section className="theme-purple overflow-hidden border-y border-[#F5F0FF]/15 py-7">
      <div className="container-page flex flex-col gap-5 md:flex-row md:items-center">
        <p className="shrink-0 text-sm font-bold uppercase tracking-[0.18em] text-[#F5F0FF]/80">Trusted by companies in</p>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee gap-3">
            {[...industries, ...industries].map((item, index) => (
              <span key={`${item}-${index}`} className="rounded-full border border-[#F5F0FF]/25 bg-[#F5F0FF]/12 px-5 py-2 text-sm font-medium text-[#F5F0FF] shadow-sm backdrop-blur-xl">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

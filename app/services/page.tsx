import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description: "Recruitment services for candidate screening, technical hiring, and non-technical hiring."
};

const services = [
  {
    id: "screening-candidates",
    title: "Screening Candidates",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
    description:
      "We review candidate profiles, qualifications, and fit so hiring teams spend time only with the strongest matches."
  },
  {
    id: "technical-hiring",
    title: "Technical Hiring",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
    description:
      "Support for software, cloud, data, QA, product, and other technical roles that need careful skills alignment."
  },
  {
    id: "non-technical-hiring",
    title: "Non-Technical Hiring",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    description:
      "Recruitment support for operations, sales, marketing, support, and business roles across growing teams."
  }
];

export default function ServicesPage() {
  return (
    <section className="theme-light section-padding pt-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Services"
          title="Recruitment Built Around the Roles You Need"
          subtitle="NextHire keeps the service menu focused: candidate screening, technical hiring, and non-technical hiring support."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} id={service.id} className="premium-card scroll-mt-28 overflow-hidden rounded-2xl">
              <div
                className="h-52 bg-primary"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(19, 116, 116, 0.55), rgba(19, 116, 116, 0.05)), url('${service.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
                aria-hidden="true"
              />
              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary/75">Recruitment</p>
                <h2 className="mt-4 font-serif text-2xl font-bold text-violet-700">{service.title}</h2>
                <p className="mt-4 leading-7 text-gray-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

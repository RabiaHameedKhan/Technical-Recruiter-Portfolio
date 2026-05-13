import { RolesGrid } from "@/components/shared/RolesGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function RolesPreview() {
  return (
    <section className="theme-purple section-padding">
      <div className="container-page">
        <SectionHeading title="Roles I Specialize In" subtitle="Technical hiring support across engineering, product, design, data, and cloud roles." />
        <RolesGrid />
      </div>
    </section>
  );
}

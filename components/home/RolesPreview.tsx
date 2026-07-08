import { ClosedPositionsGrid } from "@/components/shared/ClosedPositionsGrid";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function RolesPreview() {
  return (
    <section className="theme-light section-padding">
      <div className="container-page">
        <SectionHeading title="Positions We've Successfully Closed" subtitle="Recent hires across technical, commercial, operations, and customer-facing teams." />
        <ClosedPositionsGrid />
      </div>
    </section>
  );
}

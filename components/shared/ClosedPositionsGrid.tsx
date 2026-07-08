import { BriefcaseBusiness } from "lucide-react";
import { closedPositions } from "@/data/closedPositions";

export function ClosedPositionsGrid() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {closedPositions.map((position) => (
        <article key={`${position.title}-${position.context}`} className="premium-card rounded-2xl p-6 transition-all duration-200 hover:shadow-md">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>
          <p className="premium-chip inline-flex rounded-full px-3 py-1 text-xs font-medium">{position.context}</p>
          <h3 className="mt-4 text-lg font-bold text-gray-950">{position.title}</h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">{position.detail}</p>
        </article>
      ))}
    </div>
  );
}

"use client";

import { roles } from "@/data/roles";
import { RoleCard } from "@/components/shared/RoleCard";

export function RolesGrid() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {roles.map((role) => (
        <RoleCard key={role.title} {...role} />
      ))}
    </div>
  );
}

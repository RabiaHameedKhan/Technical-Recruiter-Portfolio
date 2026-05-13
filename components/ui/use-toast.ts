"use client";

import * as React from "react";

type Toast = {
  id: string;
  title?: string;
  description?: string;
};

const listeners: Array<(toasts: Toast[]) => void> = [];
let memoryState: Toast[] = [];

function dispatch(toast: Toast) {
  memoryState = [toast];
  listeners.forEach((listener) => listener(memoryState));
}

export function toast({ title, description }: Omit<Toast, "id">) {
  dispatch({ id: crypto.randomUUID(), title, description });
}

export function useToast() {
  const [toasts, setToasts] = React.useState<Toast[]>(memoryState);

  React.useEffect(() => {
    listeners.push(setToasts);
    return () => {
      const index = listeners.indexOf(setToasts);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return { toasts };
}

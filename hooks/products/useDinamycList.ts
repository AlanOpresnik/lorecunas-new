import { useState } from "react";

export function useDynamicList<T>(initial: T[], emptyItem: T) {
  const [items, setItems] = useState<T[]>(initial.length ? initial : [emptyItem]);

  const update = (index: number, value: T) => {
    setItems((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const add = () => setItems((prev) => [...prev, emptyItem]);

  const remove = (index: number) => {
    setItems((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));
  };

  const reset = (next: T[]) => setItems(next.length ? next : [emptyItem]);

  return { items, update, add, remove, reset, setItems };
}
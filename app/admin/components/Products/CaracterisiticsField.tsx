import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import type { Caracteristics } from "@/lib/types";

export function ProductCaracteristicsField({
  items,
  onUpdate,
  onAdd,
  onRemove,
}: {
  items: Caracteristics[];
  onUpdate: (index: number, value: Caracteristics) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}) {
  return (
    <Field>
      <FieldLabel>Características</FieldLabel>
      <div className="flex flex-col gap-2">
        {items.map((c, i) => (
          <div key={i} className="flex gap-2">
            <Input
              value={c.title}
              placeholder="Título (ej. Material)"
              onChange={(e) => onUpdate(i, { ...c, title: e.target.value })}
            />
            <Input
              value={c.value}
              placeholder="Valor (ej. Madera de pino)"
              onChange={(e) => onUpdate(i, { ...c, value: e.target.value })}
            />
            <Button type="button" variant="outline" size="icon" onClick={() => onRemove(i)}>
              <Trash2 className="size-4" />
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="self-start"
          onClick={onAdd}
        >
          <Plus className="size-4" data-icon="inline-start" />
          Agregar característica
        </Button>
      </div>
    </Field>
  );
}
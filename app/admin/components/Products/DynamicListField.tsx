import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";

export function DynamicListField({
  label,
  items,
  placeholder,
  onUpdate,
  onAdd,
  onRemove,
  addLabel,
}: {
  label: string;
  items: string[];
  placeholder: string;
  onUpdate: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  addLabel: string;
}) {
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <div className="flex flex-col gap-2">
        {items.map((value, i) => (
          <div key={i} className="flex gap-2">
            <Input
              value={value}
              placeholder={placeholder}
              onChange={(e) => onUpdate(i, e.target.value)}
            />
            <Button type="button" variant="outline" size="icon" onClick={() => onRemove(i)}>
              <Trash2 className="size-4" />
            </Button>
          </div>
        ))}
        <Button type="button" variant="outline" size="sm" className="self-start" onClick={onAdd}>
          <Plus className="size-4" data-icon="inline-start" />
          {addLabel}
        </Button>
      </div>
    </Field>
  );
}
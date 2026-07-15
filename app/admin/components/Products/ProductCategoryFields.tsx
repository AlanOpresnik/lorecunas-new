import { PRODUCT_CATEGORIES } from "@/lib/types";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductCategoryStatusFields({
  category,
  status,
  error,
  onCategoryChange,
  onStatusChange,
}: {
  category: string;
  status: string;
  error?: string;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field data-invalid={error ? true : undefined}>
        <FieldLabel>Categoría</FieldLabel>
        <Select value={category} onValueChange={(v) => onCategoryChange(v ?? "")}>
          <SelectTrigger aria-invalid={error ? true : undefined}>
            <SelectValue placeholder="Elegí una" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {PRODUCT_CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {error ? <FieldError>{error}</FieldError> : null}
      </Field>

      <Field>
        <FieldLabel>Estado</FieldLabel>
        <Select value={status} onValueChange={(v) => onStatusChange(v ?? "active")}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="active">Activo</SelectItem>
              <SelectItem value="draft">Inactivo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </div>
  );
}
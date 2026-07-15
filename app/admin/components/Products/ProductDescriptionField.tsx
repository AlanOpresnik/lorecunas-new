import type { Product } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

export function ProductDescriptionFields({
  product,
  error,
}: {
  product?: Product;
  error?: string;
}) {
  return (
    <>
      <Field data-invalid={error ? true : undefined}>
        <FieldLabel htmlFor="shortDescription">Descripción corta</FieldLabel>
        <Input
          id="shortDescription"
          name="shortDescription"
          defaultValue={product?.shortDescription}
          placeholder="Resumen breve para el listado"
          aria-invalid={error ? true : undefined}
        />
        {error ? <FieldError>{error}</FieldError> : null}
      </Field>

      <Field>
        <FieldLabel htmlFor="description">Descripción</FieldLabel>
        <Textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={product?.description}
          placeholder="Detalles, materiales, medidas…"
        />
      </Field>
    </>
  );
}
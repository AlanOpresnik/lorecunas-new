import type { Product } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

export function ProductPricingFields({
  product,
  errors,
}: {
  product?: Product;
  errors: Record<string, string>;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Field data-invalid={errors.price ? true : undefined}>
        <FieldLabel htmlFor="price">Precio CONTADO</FieldLabel>
        <Input
          id="price"
          name="price"
          type="number"
          min={0}

          defaultValue={product?.price}
          placeholder="0"
          aria-invalid={errors.price ? true : undefined}
        />
        {errors.price ? <FieldError>{errors.price}</FieldError> : null}
      </Field>

      <Field data-invalid={errors.originalPrice ? true : undefined}>
        <FieldLabel htmlFor="originalPrice">Precio con tarjeta</FieldLabel>
        <Input
          id="originalPrice"
          name="originalPrice"
          type="text"
          defaultValue={product?.originalPrice}
          placeholder="0"
          aria-invalid={errors.originalPrice ? true : undefined}
        />
        {errors.originalPrice ? <FieldError>{errors.originalPrice}</FieldError> : null}
      </Field>

      <Field data-invalid={errors.stock ? true : undefined}>
        <FieldLabel htmlFor="stock">Stock</FieldLabel>
        <Input
          id="stock"
          name="stock"
          type="number"
          min={0}
          step={1}
          defaultValue={product?.stock}
          placeholder="0"
          aria-invalid={errors.stock ? true : undefined}
        />
        {errors.stock ? <FieldError>{errors.stock}</FieldError> : null}
      </Field>
    </div>
  );
}
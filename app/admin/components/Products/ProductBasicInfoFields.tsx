import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

export function ProductBasicInfoFields({
  name,
  slug,
  errors,
  onNameChange,
  onSlugChange,
}: {
  name: string;
  slug: string;
  errors: Record<string, string>;
  onNameChange: (value: string) => void;
  onSlugChange: (value: string) => void;
}) {
  return (
    <>
      <Field data-invalid={errors.name ? true : undefined}>
        <FieldLabel htmlFor="name">Nombre</FieldLabel>
        <Input
          id="name"
          name="name"
          value={name}
          placeholder="Ej. Cuna Convertible Luna"
          aria-invalid={errors.name ? true : undefined}
          onChange={(e) => onNameChange(e.target.value)}
        />
        {errors.name ? <FieldError>{errors.name}</FieldError> : null}
      </Field>

      <Field data-invalid={errors.slug ? true : undefined}>
        <FieldLabel htmlFor="slug">Slug</FieldLabel>
        <Input
          id="slug"
          name="slug"
          value={slug}
          placeholder="cuna-convertible-luna"
          aria-invalid={errors.slug ? true : undefined}
          onChange={(e) => onSlugChange(e.target.value)}
        />
        {errors.slug ? <FieldError>{errors.slug}</FieldError> : null}
      </Field>
    </>
  );
}
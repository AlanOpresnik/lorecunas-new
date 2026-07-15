export type ProductFormErrors = Record<string, string>;

export type ProductFormValues = {
  name: string;
  category: string;
  price: string;
  stock: string;
};

export function validateProductForm(values: ProductFormValues): ProductFormErrors {
  const errors: ProductFormErrors = {};

  if (!values.name.trim()) errors.name = "El nombre es obligatorio";
  if (!values.category) errors.category = "Elegí una categoría";
  if (!values.price || Number(values.price) < 0) errors.price = "Precio inválido";
  if (!values.stock || Number(values.stock) < 0) errors.stock = "Stock inválido";

  return errors;
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
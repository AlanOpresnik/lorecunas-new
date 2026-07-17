import { useState } from "react";
import { toast } from "sonner";
import type { Product, Caracteristics } from "@/lib/types";
import { slugify, validateProductForm } from "@/lib/validations";
import { api } from "@/lib/api";

type SubmitArgs = {
  formEl: HTMLFormElement;
  name: string;
  slug: string;
  category: string;
  status: string;
  featured: boolean;
  isNew: boolean;
  videoUrl: string;
  colors: string[];
  caracteristics: Caracteristics[];
  existingImages: string[];
  newImageFiles: File[];
};

export function     useProductForm(
  product: Product | undefined,
  onSaved?: () => void,
) {
  const isEdit = Boolean(product);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = async (args: SubmitArgs) => {
    setErrors({});
    const els = args.formEl.elements;
    const priceValue = (els.namedItem("price") as HTMLInputElement)?.value;
    const originalPriceValue = (
      els.namedItem("originalPrice") as HTMLInputElement
    )?.value;
    const stockValue = (els.namedItem("stock") as HTMLInputElement)?.value;
    const descriptionValue = (
      els.namedItem("description") as HTMLTextAreaElement
    )?.value;
    const shortDescriptionValue = (
      els.namedItem("shortDescription") as HTMLInputElement
    )?.value;

    const validationErrors = validateProductForm({
      name: args.name,
      category: args.category,
      price: priceValue,
      stock: stockValue,
      videoUrl: args.videoUrl,
    });
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return false;
    }

    const fd = new FormData();
    fd.set("name", args.name.trim());
    fd.set("slug", args.slug || slugify(args.name));
    fd.set("category", args.category);
    fd.set("categorySlug", slugify(args.category));
    fd.set("status", args.status);
    fd.set("price", priceValue);
    if (originalPriceValue) fd.set("originalPrice", originalPriceValue);
    fd.set("description", descriptionValue ?? "");
    fd.set("shortDescription", shortDescriptionValue ?? "");
    fd.set("videoUrl", args.videoUrl?.trim() ?? "");
    fd.set("stock", stockValue);
    fd.set("featured", String(args.featured));
    fd.set("isNew", String(args.isNew));
    fd.set(
      "colors",
      JSON.stringify(args.colors.map((c) => c.trim()).filter(Boolean)),
    );
    fd.set(
      "caracteristics",
      JSON.stringify(
        args.caracteristics.filter((c) => c.title.trim() || c.value.trim()),
      ),
    );
    fd.set("existingImages", JSON.stringify(args.existingImages));
    args.newImageFiles.forEach((file) => fd.append("imageFiles", file));

    setPending(true);
    try {

      const json = isEdit
        ? await api.updateProduct(product!._id, fd)
        : await api.CreateProduct(fd);

      toast.success("Guardado");
      onSaved?.();
      return true;
    } catch (error: unknown) {
      if (error && typeof error === "object") {
        const err = error as {
          errors?: Record<string, string>;
          message?: string;
        };
        if (err.errors) setErrors(err.errors);
        toast.error(err.message ?? "No se pudo conectar con el servidor");
      } else {
        console.error("submit product error:", error);
        toast.error("No se pudo conectar con el servidor");
      }
      return false;
    } finally {
      setPending(false);
    }
  };

  return { isEdit, pending, errors, setErrors, submit };
}

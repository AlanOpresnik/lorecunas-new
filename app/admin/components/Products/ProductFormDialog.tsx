"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useImageManager } from "@/hooks/products/useImageManager";
import { useDynamicList } from "@/hooks/products/useDinamycList";
import { useProductForm } from "@/hooks/products/useProductForm";
import { slugify } from "@/lib/validations";
import { ProductCategoryStatusFields } from "./ProductCategoryFields";
import { ProductPricingFields } from "./ProductPricingInfoFields";
import { ProductDescriptionFields } from "./ProductDescriptionField";
import { ProductImagesField } from "./ImagesField";
import { DynamicListField } from "./DynamicListField";
import { ProductCaracteristicsField } from "./CaracterisiticsField";
import { ProductFlagsFields } from "./ProductFlags";
import { ProductBasicInfoFields } from "./ProductBasicInfoFields";

export function ProductFormDialog({
  product,
  open,
  onOpenChange,
  onSaved,
}: {
  product?: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved?: () => void;
}) {
  const [name, setName] = useState(product?.name ?? "");
  const [category, setCategory] = useState(product?.category ?? "");
  const [status, setStatus] = useState(product?.status ?? "active");
  const [slug, setSlug] = useState(product?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(false);
  const [featured, setFeatured] = useState(product?.featured ?? false);
  const [isNew, setIsNew] = useState(product?.isNew ?? false);
  const [videoUrl, setVideoUrl] = useState(product?.videoUrl ?? "");

  const images = useImageManager(product?.images ?? []);
  const colors = useDynamicList<string>(product?.colors ?? [], "");
  const caracteristics = useDynamicList(product?.caracteristics ?? [], {
    title: "",
    value: "",
  });

  const { isEdit, pending, errors, setErrors, submit } = useProductForm(
    product,
    () => {
      onOpenChange(false);
      onSaved?.();
    },
  );

  useEffect(() => {
    if (open) {
      setErrors({});
      setName(product?.name ?? "");
      setCategory(product?.category ?? "");
      setStatus(product?.status ?? "active");
      setSlug(product?.slug ?? "");
      setSlugTouched(false);
      setFeatured(product?.featured ?? false);
      setIsNew(product?.isNew ?? false);
      setVideoUrl(product?.videoUrl ?? "");
      images.reset(product?.images ?? []);
      colors.reset(product?.colors ?? []);
      caracteristics.reset(product?.caracteristics ?? []);
    }
  }, [open, product]);

  const handleNameChange = (value: string) => {
    setName(value);
    if (!slugTouched) setSlug(slugify(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submit({
      formEl: e.currentTarget,
      name,
      slug,
      category,
      status,
      featured,
      isNew,
      videoUrl,
      colors: colors.items,
      caracteristics: caracteristics.items,
      existingImages: images.existingImages,
      newImageFiles: images.newImages.map((i) => i.file),
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif">
            {isEdit ? "Editar producto" : "Nuevo producto"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Actualizá la información del producto."
              : "Completá los datos para agregarlo al catálogo."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FieldGroup>
            <ProductBasicInfoFields
              name={name}
              slug={slug}
              errors={errors}
              onNameChange={handleNameChange}
              onSlugChange={(v) => {
                setSlugTouched(true);
                setSlug(slugify(v));
              }}
            />

            <ProductCategoryStatusFields
              category={category}
              status={status}
              error={errors.category}
              onCategoryChange={setCategory}
              onStatusChange={(value: string) =>
                setStatus(value as "active" | "inactive" | "draft")
              }
            />

            <ProductPricingFields product={product} errors={errors} />

            <ProductDescriptionFields
              product={product}
              error={errors.shortDescription}
            />

            <Field data-invalid={errors.videoUrl ? true : undefined}>
              <FieldLabel htmlFor="videoUrl">URL de YouTube</FieldLabel>
              <Input
                id="videoUrl"
                name="videoUrl"
                type="url"
                value={videoUrl}
                placeholder="https://www.youtube.com/watch?v=..."
                aria-invalid={errors.videoUrl ? true : undefined}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
              {errors.videoUrl ? <FieldError>{errors.videoUrl}</FieldError> : null}
            </Field>

            <ProductImagesField
              existingImages={images.existingImages}
              newImages={images.newImages}
              onFilesSelected={images.addFiles}
              onRemoveExisting={images.removeExisting}
              onRemoveNew={images.removeNew}
              error={errors.images}
            />

            <DynamicListField
              label="Colores"
              items={colors.items}
              placeholder="Ej. Blanco, Roble natural…"
              addLabel="Agregar color"
              onUpdate={colors.update}
              onAdd={colors.add}
              onRemove={colors.remove}
            />

            <ProductCaracteristicsField
              items={caracteristics.items}
              onUpdate={caracteristics.update}
              onAdd={caracteristics.add}
              onRemove={caracteristics.remove}
            />

            <ProductFlagsFields
              featured={featured}
              isNew={isNew}
              onFeaturedChange={setFeatured}
              onIsNewChange={setIsNew}
            />
          </FieldGroup>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={pending}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? <Spinner data-icon="inline-start" /> : null}
              {isEdit ? "Guardar cambios" : "Crear producto"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

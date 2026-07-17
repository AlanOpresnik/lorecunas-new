"use client";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/lib/api";
import { ProductCategory } from "@/lib/types";
import { useEffect, useState } from "react";

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
const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await api.getCategorys();
        console.log(res);
        setProductCategories(res);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field data-invalid={error ? true : undefined}>
        <FieldLabel>Categoría</FieldLabel>
        <Select
          value={category}
          onValueChange={(v) => onCategoryChange(v ?? "")}
        >
          <SelectTrigger aria-invalid={error ? true : undefined}>
            <SelectValue placeholder="Elegí una" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {productCategories.map((c: any) => (
                <SelectItem key={c._id ?? c.id} value={c.slug ?? c.slug}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {error ? <FieldError>{error}</FieldError> : null}
      </Field>

      <Field>
        <FieldLabel>Estado</FieldLabel>
        <Select
          value={status}
          onValueChange={(v) => onStatusChange(v ?? "active")}
        >
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

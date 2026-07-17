"use server";

import { revalidatePath } from "next/cache";
import { api } from "@/lib/api";

export async function createCategoryAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();

  if (!name) {
    return;
  }

  await api.createCategory({
    name,
    description,
    active: true,
  });

  revalidatePath("/admin/categorias");
}

export async function deleteCategoryAction(formData: FormData) {
  const categoryId = String(formData.get("categoryId") ?? "").trim();

  if (!categoryId) {
    return;
  }

  const deleted = await api.deleteCategory(categoryId);

  if (deleted) {
    revalidatePath("/admin/categorias");
  }
}

"use server";

import { api } from "@/lib/api";
import { revalidatePath } from "next/cache";

export async function deleteProductAction(formData: FormData) {
  const productId = String(formData.get("productId") ?? "").trim();

  if (!productId) {
    return;
  }

  await api.deleteProduct(productId);
  revalidatePath("/admin/products");
}

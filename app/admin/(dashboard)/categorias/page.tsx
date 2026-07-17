export const dynamic = "force-dynamic";
import { DashboardHeader } from "../../components/Dashboard/DashboardHeader";
import { CategoriesManager } from "../../components/Categories/CategoriesManager";
import { api } from "@/lib/api";

export default async function Page() {
  const categories = await api.getCategorys();

  return (
    <>
      <DashboardHeader
        title="Categorías"
        description="Gestioná las categorías del catálogo desde aquí."
      />

      <div className="p-4 md:p-6">
        <CategoriesManager initialCategories={categories} />
      </div>
    </>
  );
}

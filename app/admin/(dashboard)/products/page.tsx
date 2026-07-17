export const dynamic = "force-dynamic";
import { Package, CheckCircle2, DollarSign, AlertTriangle } from "lucide-react";
import { DashboardHeader } from "../../components/Dashboard/DashboardHeader";
import { NewProductButton } from "../../components/Products/NewProductButton";
import { StatCard } from "../../components/StatCard/StatCard";
import { formatCurrency } from "@/lib/format";
import { ProductsTable } from "../../components/Products/ProductsTable";
import { api } from "@/lib/api";

export default async function ProductsPage() {
  const [products, stats] = await Promise.all([
    api.getProducts(),
    api.getStats(),
  ]);

  return (
    <>
      <DashboardHeader
        title="Productos"
        description="Gestioná el catálogo de tu tienda."
        actions={<NewProductButton />}
      />
      <div className="flex flex-col gap-6 p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total productos"
            value={String(stats.activeProducts + stats.productsOutOfStock)}
            icon={Package}
          />
          <StatCard
            label="Activos"
            value={String(stats.activeProducts)}
            icon={CheckCircle2}
            tone="positive"
          />
          <StatCard
            label="Valor de inventario"
            value={formatCurrency(stats.inventoryValue)}
            icon={DollarSign}
          />
          <StatCard
            label="Sin stock"
            value={String(stats.productsOutOfStock)}
            icon={AlertTriangle}
            tone={stats.productsOutOfStock > 0 ? "warning" : "default"}
          />
        </div>

        <ProductsTable products={products} />
      </div>
    </>
  );
}

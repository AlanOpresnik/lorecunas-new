import { Stats } from "./interfaces/Stats";
import { Product } from "./types";

const API_URL = "http://localhost:8080/api";

export const api = {
  async getProducts(): Promise<Product[]> {
    try {
      const res = await fetch(`${API_URL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Error al obtener los productos");
      }

      return await res.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  },

  async getFeaturedProducts(): Promise<Product[]> {
    try {
      const res = await fetch(`${API_URL}/products/featured`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Error al obtener productos destacados");
      }

      return await res.json();
    } catch (error) {
      console.error("Error fetching featured products:", error);
      return [];
    }
  },

  async getProductById(id: string): Promise<Product | undefined> {
    try {
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Error al obtener el producto");
      }

      return await res.json();
    } catch (error) {
      console.error("Error fetching product by id:", error);
      return undefined;
    }
  },
  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const res = await fetch(`${API_URL}/products/category/${category}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Error al obtener productos por categoría");
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return [];
    }
  },
  async CreateProduct(data: FormData): Promise<Product | undefined> {
    try {
      console.log(data)
      const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: data,
      });

      return await res.json();
    } catch (error) {
      console.error("Error creating product:", error);
      return undefined;
    }
  },
  async updateProduct(id: string, data: FormData): Promise<Product | undefined> {
    try {
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      if (!res.ok) {
        throw new Error("Error al actualizar el producto");
      }
      return await res.json();
    }
    catch (error) {
      console.error("Error updating product:", error);
      return undefined;
    }
  },
  async getStats(): Promise<Stats> {
    try {
      const res = await fetch(`${API_URL}/stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }); 
      return await res.json();
    } catch (error) {
      console.error("Error fetching stats:", error);
      return {
        _id: "",
        totalProducts: 0,
        totalOrders: 0,
        inventoryValue: 0,
        productsOutOfStock: 0,
        activeProducts: 0,
        createdAt: "",
        updatedAt: "",
      };
    } 
  }
};

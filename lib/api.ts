import { authHeaders } from "./headers";
import { Stats } from "./interfaces/Stats";
import { Category, Order, Product, ProductCategory } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
      console.log(data);
      const res = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: data,
        headers: {
          ...(await authHeaders()),
        },
      });

      return await res.json();
    } catch (error) {
      console.error("Error creating product:", error);
      return undefined;
    }
  },
  async updateProduct(
    id: string,
    data: FormData,
  ): Promise<Product | undefined> {
    try {
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        body: data,
        headers: {
          ...(await authHeaders()),
        },
      });
      if (!res.ok) {
        throw new Error("Error al actualizar el producto");
      }
      return await res.json();
    } catch (error) {
      console.error("Error updating product:", error);
      return undefined;
    }
  },

  async deleteProduct(id: string) {
    try {
      const res = await fetch(`${API_URL}/products/${id}`, {
        method: "DELETE",
         headers: {
          "Content-Type": "application/json",
          ...(await authHeaders()),
        },
      });
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  },

  async createPreference(data: Record<string, unknown>) {
    console.log(data);
    try {
      const res = await fetch(`${API_URL}/mercadopago/create-preference`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return await res.json();
    } catch (error) {
      console.error("Error creating preference:", error);
      return undefined;
    }
  },
  async getStats(): Promise<Stats> {
    try {
      const res = await fetch(`${API_URL}/stats`, {
        method: "GET",
    headers: {
          "Content-Type": "application/json",
          ...(await authHeaders()),
        },
        cache: "no-store",
        credentials: "include",
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
  },
  async getCategorys(): Promise<Category[]> {
    try {
      const res = await fetch(`${API_URL}/categories`, {
        method: "GET",
      headers: {
          "Content-Type": "application/json",
          ...(await authHeaders()),
        },
        cache: "no-store",
        credentials: "include",
      });
      if (!res.ok) {
        throw new Error("Error al obtener categorias");
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  },
  async createCategory(data: {
    name: string;
    description?: string;
    image?: string;
    active?: boolean;
  }): Promise<ProductCategory | undefined> {
    try {
      const res = await fetch(`${API_URL}/categories`, {
        method: "POST",
    headers: {
          "Content-Type": "application/json",
          ...(await authHeaders()),
        },
        credentials: "include",
        body: JSON.stringify({
          name: data.name,
          description: data.description ?? "",
          image: data.image ?? "",
          active: data.active ?? true,
        }),
      });

      if (!res.ok) {
        throw new Error("Error al crear la categoría");
      }

      const text = await res.text();
      return text ? JSON.parse(text) : undefined;
    } catch (error) {
      console.error("Error creating category:", error);
      return undefined;
    }
  },

  async deleteCategory(categoryId: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_URL}/categories/${categoryId}`, {
        method: "DELETE",
    headers: {
          "Content-Type": "application/json",
          ...(await authHeaders()),
        },
        credentials: "include",
      });

      return res.ok;
    } catch (error) {
      console.error("Error deleting category:", error);
      return false;
    }
  },
  async getOrderByPreferenceId(preferenceId: string): Promise<Order | null> {
    try {
      const res = await fetch(
        `${API_URL}/orders/preferenceId/${preferenceId}`,
        {
          method: "GET",
          
        },
      );

      if (!res.ok) {
        console.error("Error:", res.status, res.statusText);
        return null;
      }

      const data = await res.json();

      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async getOrders(): Promise<Order[]> {
    try {
      const res = await fetch(`${API_URL}/orders`, {
        method: "GET",
      headers: {
          "Content-Type": "application/json",
          ...(await authHeaders()),
        },
        credentials: "include",
      });
      if (!res.ok) {
        console.error("Error:", res.status, res.statusText);
        return [];
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getOrderStats() {
    try {
      const res = await fetch(`${API_URL}/orders/stats`, {
        method: "GET",
       headers: {
          "Content-Type": "application/json",
          ...(await authHeaders()),
        },
        credentials: "include",
      });
      if (!res.ok) {
        console.error("Error:", res.status, res.statusText);
        return [];
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  async login(username: string, password: string) {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        return {
          success: false,
          message: data.message,
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  },
};

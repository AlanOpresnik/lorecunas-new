"use server";
 
import { cookies } from "next/headers";
 
const API_URL = process.env.NEXT_PUBLIC_API_URL;
 
type LoginResult =
  | { success: true }
  | { success: false; message: string };
 
export async function loginAction(
  username: string,
  password: string
): Promise<LoginResult> {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      cache: "no-store",
    });
 
const data = await res.json();
console.log("Respuesta del backend:", data); 

if (!res.ok) {
  return { success: false, message: data.error || data.message || "Credenciales inválidas." };
}

(await cookies()).set("token", data.token,);
 
    return { success: true };
  } catch (error) {
    console.error("Error en loginAction:", error);
    return { success: false, message: "No se pudo conectar con el servidor." };
  }
}
 
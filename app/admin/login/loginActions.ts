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
 
    if (!res.ok) {
      return {
        success: false,
        message: data.error || data.message || "Credenciales inválidas.",
      };
    }
 
    // Cookie httpOnly seteada en TU dominio (vercel.app), no en onrender.com.
    // Esto es lo que hace que la cookie no se pierda: el navegador solo
    // recibe Set-Cookie del mismo origen al que le está pegando (Next.js),
    // nunca directamente del backend en Render.
    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 2, // 2h — igual al expiresIn del JWT
    });
 
    return { success: true };
  } catch (error) {
    console.error("Error en loginAction:", error);
    return { success: false, message: "No se pudo conectar con el servidor." };
  }
}
 
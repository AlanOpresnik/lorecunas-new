// lib/auth.ts
import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET; 

interface AdminPayload {
  role: string;
  iat: number;
  exp: number;
}

export async function getSession(): Promise<AdminPayload | null> {
  const token = (await cookies()).get("token")?.value;

  if (!token) return null;

  try {
    const payload = jwt.verify(token, JWT_SECRET!) as AdminPayload;
    if (payload.role !== "admin") return null;
    return payload;
  } catch {
    return null; // token vencido o inválido
  }
}

export async function requireAdmin() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return session;
}
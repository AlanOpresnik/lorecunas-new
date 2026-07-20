
'use server'
import { cookies } from "next/headers";

export async function authHeaders(): Promise<Record<string, string>> {
  const token = (await cookies()).get("token")?.value;
  return token ? { Authorization: `Bearer ${token}` } : {};
}
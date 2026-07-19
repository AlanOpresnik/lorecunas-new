import { api } from "@/lib/api";
import PaymentSuccessCard from "../PaymentCard";

interface PaymentSuccessPageProps {
  searchParams: Promise<{
    preference_id?: string;
  }>;
}

export default async function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const { preference_id } = await searchParams;

  if (!preference_id) {
    return <div>No se encontró el preference_id.</div>;
  }

console.log(preference_id)

  const order = await api.getOrderByPreferenceId(preference_id);

  return <PaymentSuccessCard order={order} />;
}
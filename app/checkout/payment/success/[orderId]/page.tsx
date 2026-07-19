import { api } from "@/lib/api";
import PaymentSuccessCard from "../PaymentCard";

export default async function PaymentSuccessPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  const order = await api.getOrderByPreferenceId(orderId);

  return <PaymentSuccessCard order={order} />;
}
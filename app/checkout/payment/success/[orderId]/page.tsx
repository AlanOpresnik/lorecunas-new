import { api } from "@/lib/api";
import PaymentSuccessCard from "../PaymentCard";

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{
    orderId?: string;
    status?: string;
  }>;
}) {
  const { orderId } = await searchParams;

  if (!orderId) {
    return <div>Order not found</div>;
  }

  const order = await api.getOrderByPreferenceId(orderId);

  return <PaymentSuccessCard order={order} />;
}   
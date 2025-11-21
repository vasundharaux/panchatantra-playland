// pages/kingdoms/[kingdom].js
import { useRouter } from "next/router";

export default function KingdomDetailPage() {
  const router = useRouter();
  const { kingdom } = router.query;

  if (!kingdom) return null;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{kingdom} Kingdom</h2>
      <p>Stories from this kingdom will appear here soon.</p>
    </div>
  );
}

// pages/kingdoms/[kingdom].js
import { useRouter } from "next/router";

export default function KingdomDetail() {
  const router = useRouter();
  const { kingdom } = router.query;

  return (
    <div>
      <h2>{kingdom} Kingdom</h2>
      <p>Stories will appear here soon.</p>
    </div>
  );
}

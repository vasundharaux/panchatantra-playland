import { useRouter } from "next/router";

export default function StoryDetailPage() {
  const router = useRouter();
  const { storyId } = router.query;

  return (
    <div>
      <h2>Story: {storyId}</h2>
      <p>Full story content will go here.</p>
    </div>
  );
}

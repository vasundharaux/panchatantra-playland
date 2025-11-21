// pages/stories/[storyId].js
import { useRouter } from "next/router";

const STORIES = [
  {
    id: "lion-and-rabbit",
    title: "The Lion and the Clever Rabbit",
    kingdom: "Forest Kingdom",
    ageRange: "7–11",
    moralTag: "Smart Thinking",
    moral: "Smart thinking is stronger than brute strength.",
    body: [
      "Once upon a time in the Forest Kingdom, a fierce lion ruled over all the animals.",
      "Every day, the animals had to send one of their friends to be eaten by the lion.",
      "One day, it was the turn of a tiny rabbit, who decided to use his brain instead of his legs.",
      "He walked slowly, making the lion angry and impatient. When he finally arrived, he told the lion there was another lion in the forest, claiming to be stronger.",
      "The lion, furious, demanded to see this rival. The rabbit led him to a deep well and pointed to the lion's reflection in the water.",
      "The lion roared and jumped into the well to attack, but he fell in and drowned. The animals were free at last.",
    ],
  },
  {
    id: "monkey-and-crocodile",
    title: "The Monkey and the Crocodile",
    kingdom: "River Kingdom",
    ageRange: "7–11",
    moralTag: "Trust Carefully",
    moral: "Choose your friends wisely and think before you trust.",
    body: [
      "A clever monkey lived in a jamun tree by the river.",
      "A crocodile became his friend and visited every day, eating the fruits the monkey shared.",
      "The crocodile’s wife grew greedy and wanted to eat the monkey’s heart.",
      "The crocodile invited the monkey for a ride and tried to drown him in the middle of the river.",
      "The monkey quickly said, 'Oh no! I left my heart back in the tree!'",
      "The foolish crocodile swam back, and the monkey jumped safely onto his tree, ending the friendship.",
    ],
  },
];

export default function StoryDetailPage() {
  const router = useRouter();
  const { storyId } = router.query;

  const story = STORIES.find((s) => s.id === storyId);

  if (!story) {
    return <p style={{ padding: "1rem" }}>Story not found…</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{story.title}</h2>
      <p style={{ color: "#8b6b39", marginBottom: "1rem" }}>
        {story.kingdom} · Age {story.ageRange} · {story.moralTag}
      </p>

      {story.body.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}

      <div
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          borderRadius: "0.75rem",
          background: "#fff7e0",
          border: "1px solid #f0b653",
        }}
      >
        <strong>Moral:</strong> {story.moral}
      </div>
    </div>
  );
}

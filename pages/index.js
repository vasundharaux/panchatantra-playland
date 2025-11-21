// pages/index.js
import StoryCard from "../components/StoryCard";

const STORIES = [
  {
    id: "lion-and-rabbit",
    title: "The Lion and the Clever Rabbit",
    kingdom: "Forest Kingdom",
    teaser: "How a tiny rabbit saved all the animals from a greedy lion.",
    ageRange: "7–11",
    moralTag: "Smart Thinking",
  },
  {
    id: "monkey-and-crocodile",
    title: "The Monkey and the Crocodile",
    kingdom: "River Kingdom",
    teaser: "A clever monkey outwits a hungry crocodile using wit and words.",
    ageRange: "7–11",
    moralTag: "Trust Carefully",
  },
];

export default function HomePage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Welcome to Panchatantra PlayLand</h2>
      <p style={{ marginBottom: "1rem" }}>
        Choose a kingdom, pick a story, and talk about the moral together.
      </p>

      <h3 style={{ marginBottom: "0.75rem" }}>Featured Stories</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {STORIES.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

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
    teaser:
      "A clever monkey outwits a hungry crocodile using wit and words.",
    ageRange: "7–11",
    moralTag: "Trust Carefully",
  },
];

export default function HomePage() {
  return (
    <div className="page">
      <h2 className="page-title">Welcome to Panchatantra PlayLand</h2>
      <p className="page-subtitle">
        Choose a kingdom, pick a story, and talk about the moral together.
      </p>

      <h3 className="section-title">Featured Stories</h3>

      <div className="story-grid">
        {STORIES.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

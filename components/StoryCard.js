import Link from "next/link";

export default function StoryCard({ story }) {
  return (
    <article className="story-card">
      <p className="story-kingdom">{story.kingdom}</p>
      <h3 className="story-title">{story.title}</h3>
      <p className="story-teaser">{story.teaser}</p>

      <div className="story-meta-row">
        <span>Age {story.ageRange}</span>
        <span>{story.moralTag}</span>
      </div>

      <Link href={`/stories/${story.id}`} className="story-cta">
        Read story
      </Link>
    </article>
  );
}

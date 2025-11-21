// components/StoryCard.js
import Link from "next/link";

export default function StoryCard({ story }) {
  return (
    <article
      style={{
        borderRadius: "12px",
        padding: "1rem",
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div>
        <p style={{ fontSize: "0.8rem", color: "#8b6b39", margin: 0 }}>
          {story.kingdom}
        </p>
        <h3 style={{ margin: "0.15rem 0 0.4rem", fontSize: "1.05rem" }}>
          {story.title}
        </h3>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>{story.teaser}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8rem",
          color: "#8b6b39",
        }}
      >
        <span>Age {story.ageRange}</span>
        <span>{story.moralTag}</span>
      </div>

      <Link
        href={`/stories/${story.id}`}
        style={{
          marginTop: "0.4rem",
          alignSelf: "flex-start",
          padding: "0.35rem 0.75rem",
          borderRadius: "999px",
          border: "1px solid #f0b653",
          background: "#fff7e0",
          textDecoration: "none",
          fontSize: "0.85rem",
          color: "#7a4a00",
        }}
      >
        Read story
      </Link>
    </article>
  );
}

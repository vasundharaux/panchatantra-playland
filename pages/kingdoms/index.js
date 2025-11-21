// pages/kingdoms/index.js
import Link from "next/link";

const KINGDOMS = [
  {
    id: "mitra-bheda",
    name: "Mitra Bheda",
    tagline: "Loss of Friends",
    storyCount: 5,
    colorClass: "kingdom-card--coral",
  },
  {
    id: "mitra-laabha",
    name: "Mitra Laabha",
    tagline: "Gaining Friends",
    storyCount: 5,
    colorClass: "kingdom-card--mint",
  },
  {
    id: "kakulukiyam",
    name: "Kakulukiyam",
    tagline: "War & Peace",
    storyCount: 5,
    colorClass: "kingdom-card--teal",
  },
  {
    id: "labdhapranasam",
    name: "Labdhapranasam",
    tagline: "Loss of Gains",
    storyCount: 5,
    colorClass: "kingdom-card--gold",
  },
  {
    id: "apariksitakarakam",
    name: "Apariksitakarakam",
    tagline: "Rash Deeds",
    storyCount: 5,
    colorClass: "kingdom-card--purple",
  },
];

export default function KingdomsPage() {
  return (
    <div className="page kingdoms-page">
      <h2 className="page-title kingdoms-title">Choose Your Kingdom</h2>

      <div className="kingdom-grid">
        {KINGDOMS.map((k) => (
          <Link
            key={k.id}
            href={`/kingdoms/${k.id}`}
            className={`kingdom-card ${k.colorClass}`}
          >
            <div className="kingdom-card-main">
              <h3>{k.name}</h3>
              <p className="kingdom-tagline">{k.tagline}</p>
              <div className="kingdom-meta">
                <span>{k.storyCount} Stories</span>
                <span className="kingdom-arrow">➜</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

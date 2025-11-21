// pages/kingdoms/index.js
import Link from "next/link";

const KINGDOMS = [
  { slug: "forest", name: "Forest Kingdom" },
  { slug: "river", name: "River Kingdom" },
  { slug: "royal", name: "Royal Court" },
];

export default function KingdomsPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Kingdoms</h2>
      <ul>
        {KINGDOMS.map((k) => (
          <li key={k.slug}>
            <Link href={`/kingdoms/${k.slug}`}>{k.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// pages/kingdoms/index.js
import Link from "next/link";

const KINGDOMS = [
  {
    slug: "forest",
    name: "Forest Kingdom",
    description: "Lions, rabbits, and wise owls who solve tricky problems.",
  },
  {
    slug: "river",
    name: "River Kingdom",
    description: "Monkeys, crocodiles, and river adventures.",
  },
  {
    slug: "royal",
    name: "Royal Court",
    description: "Kings, ministers, and clever courtiers.",
  },
];

export default function KingdomsPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Kingdoms</h2>
      <ul>
        {KINGDOMS.map((k) => (
          <li key={k.slug}>
            <Link href={`/kingdoms/${k.slug}`}>{k.name}</Link>
            <p>{k.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

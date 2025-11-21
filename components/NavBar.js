import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="app-nav">
      <div className="app-nav-inner">
        <Link href="/" className="nav-pill">
          Home
        </Link>
        <Link href="/kingdoms" className="nav-pill">
          Kingdoms
        </Link>
        <Link href="/stories" className="nav-pill">
          Stories
        </Link>
      </div>
    </nav>
  );
}

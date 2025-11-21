import Link from "next/link";

const navStyle = {
  display: "flex",
  gap: "0.75rem",
  padding: "0.75rem 1.5rem",
  background: "#fff5e6",
  borderBottom: "1px solid #f2d7a0",
};

const pill = {
  padding: "0.35rem 0.75rem",
  background: "white",
  borderRadius: "999px",
  border: "1px solid #f2bf72",
  textDecoration: "none",
  color: "#7a4a00",
  fontSize: "0.9rem",
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <Link href="/" style={pill}>Home</Link>
      <Link href="/kingdoms" style={pill}>Kingdoms</Link>
      <Link href="/stories" style={pill}>Stories</Link>
    </nav>
  );
}

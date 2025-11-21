export default function Header() {
  return (
    <header
      style={{
        padding: "1rem 1.5rem",
        background: "linear-gradient(90deg, #f59e0b, #f97316)",
        color: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.6rem" }}>Panchatantra PlayLand</h1>
      <p style={{ marginTop: "0.25rem", fontSize: "0.9rem" }}>
        Interactive stories & morals for kids ✨
      </p>
    </header>
  );
}

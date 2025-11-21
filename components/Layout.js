import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <NavBar />

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "1rem" }}>
        {children}
      </main>
    </div>
  );
}

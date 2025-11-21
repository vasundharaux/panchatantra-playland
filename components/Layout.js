import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="app-root">
      <Header />
      <NavBar />
      <main className="app-shell">{children}</main>
    </div>
  );
}

import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      {/* Floating Glow Elements */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      <div className="glow glow-3"></div>

      {/* Main Content */}
      <div id="page-wrapper">
        <NavBar />
        <main>{children}</main>
      </div>
    </div>
  );
}

import React from "react";

/**
 * PUBLIC_INTERFACE
 * Minimal Navbar for the Tic Tac Toe app.
 * Displays app title and a Home link, with semantic <nav> and aria-label for accessibility.
 */
function Navbar() {
  // Colors from project style guide
  const primary = "#3b82f6";
  const secondary = "#64748b";

  return (
    <nav
      className="navbar"
      aria-label="Main navigation"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "#fff",
        borderBottom: `1px solid ${secondary}20`,
        padding: "0 1.5rem",
        minHeight: "56px",
        boxSizing: "border-box",
        boxShadow: "0 2px 8px 0 rgba(100,116,139,0.06)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          color: primary,
          fontSize: "1.25rem",
          letterSpacing: "0.02em",
          marginRight: "2rem",
        }}
      >
        Super tac
      </div>
      <a
        href="/"
        style={{
          color: secondary,
          textDecoration: "none",
          fontWeight: 500,
          fontSize: "1rem",
          padding: "0.3em 0.9em",
          borderRadius: "6px",
          transition: "background .15s, color .15s",
        }}
        onMouseOver={e => (e.target.style.background = "#f4f8fd")}
        onMouseOut={e => (e.target.style.background = "transparent")}
      >
        Home
      </a>
    </nav>
  );
}

export default Navbar;

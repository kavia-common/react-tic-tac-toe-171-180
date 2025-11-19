import React from "react";
import PropTypes from "prop-types";

/**
 * PUBLIC_INTERFACE
 * Minimal Navbar for the Tic Tac Toe app.
 * Displays app title and a Home link, with semantic <nav> and aria-label for accessibility.
 * Now accepts props: title, showHome, rightContent, onHomeClick.
 */
function Navbar({
  title = "Super tac",
  showHome = true,
  rightContent = null,
  onHomeClick
}) {
  // Colors from project style guide
  const primary = "#3b82f6";
  const secondary = "#64748b";

  // Handler for Home button: calls onHomeClick if provided
  const handleHomeClick = (e) => {
    if (onHomeClick) {
      e.preventDefault();
      onHomeClick(e);
    }
    // Otherwise, let <a> default (anchors to '#')
  };

  return (
    <nav
      className="navbar"
      aria-label="Main Navigation"
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
        {title}
      </div>
      {showHome && (
        <a
          href={onHomeClick ? "#" : "/"}
          style={{
            color: secondary,
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "1rem",
            padding: "0.3em 0.9em",
            borderRadius: "6px",
            transition: "background .15s, color .15s",
          }}
          onClick={handleHomeClick}
          onMouseOver={e => (e.target.style.background = "#f4f8fd")}
          onMouseOut={e => (e.target.style.background = "transparent")}
        >
          Home
        </a>
      )}
      {/* Spacer (flex) */}
      <div style={{ flex: 1 }} />
      {/* Right content (if provided) */}
      {rightContent && (
        <div style={{ marginLeft: "auto" }}>
          {rightContent}
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  /** Title string shown on the left */
  title: PropTypes.string,
  /** Whether to show the Home link/button */
  showHome: PropTypes.bool,
  /** Optional right-side content (React node) */
  rightContent: PropTypes.node,
  /** Handler for Home link/button click */
  onHomeClick: PropTypes.func,
};

Navbar.defaultProps = {
  title: "Super tac",
  showHome: true,
  rightContent: null,
  onHomeClick: undefined,
};

export default Navbar;

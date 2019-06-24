import React from "react";
import "./style.css"

function Header(props) {
  return (
    <div>
        <nav className="navbar">
            <span className="navbar-brand">React Clicky Game</span>
            <span class="navbar-text">
                Score: 0 | Top Score: 0
            </span>
        </nav>
    </div>
  );
}

export default Header;
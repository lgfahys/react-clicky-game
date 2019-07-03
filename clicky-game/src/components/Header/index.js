import React from "react";
import "./style.css"

function Header(props) {
  return (
    <div>
        <nav className="navbar">
            <span className="navbar-brand">{props.children}</span>
            <span className="navbar-text">
                Score: {props.score} | Top Score: {props.highscore}
            </span>
        </nav>
    </div>
  );
}

export default Header;
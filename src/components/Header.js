import React from "react";
import Nav from "./Nav";
import "../App.css";

export default function Header() {
  return (
    <div>
      <Nav />
      <h1 className="header">RYAN TIXIER</h1>
    </div>
  );
}
// make props = page-title

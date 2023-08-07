import { Link } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav() {
  return (
    <ul className="nav nav-tabs">
      <Link to={"/"} className="nav-item" style={{ marginRight: "2rem" }}>
        Home
      </Link>
      <Link to={"/blog"} className="nav-item" style={{ marginRight: "2rem" }}>
        Blog
      </Link>
      <Link to={"/about"} className="nav-item" style={{ marginRight: "2rem" }}>
        About
      </Link>
      <Link
        to={"/contact"}
        className="nav-item"
        style={{ marginRight: "2rem" }}
      >
        Contact
      </Link>
    </ul>
  );
}

export default Nav;

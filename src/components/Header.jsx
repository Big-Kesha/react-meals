import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="teal darken-4">
      <div className="nav-wrapper ">
        <Link href="#!" className="center brand-logo">
          React Meal Search
        </Link>
        <ul id="nav-mobile" className="center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contacts">Contacts</Link>
          </li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Big-Kesha/react-shop.git">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

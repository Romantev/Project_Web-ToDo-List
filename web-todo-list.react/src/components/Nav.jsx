import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink className="link" to="/">
        ToDo-Liste
      </NavLink>
      <NavLink className="link" to="/shopping">
        Einkaufs-Liste
      </NavLink>
    </nav>
  );
};

export default Nav;

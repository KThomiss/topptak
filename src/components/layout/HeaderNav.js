import { NavLink, Link, useLocation } from "react-router-dom";
import TopTakLogo from "../../images/toptaklogo.png";

export default function HeaderNav() {
  const { pathname } = useLocation();
  return (
    <div className="header-container">
      <nav className="header-nav" style={{ backgroundColor: pathname !== "/" ? "#E6E6E6" : "transparent" }}>
        <Link to="/">
          <img src={TopTakLogo} alt="logo of Topp Tak" className="header-logo"></img>
        </Link>
        <ul className="header-ul">
          <li className="header-ul-list">
            <NavLink end to="/" className="header-link">
              Hjem
            </NavLink>
          </li>
          <li className="header-ul-list">
            <NavLink to="/team" className="header-link">
              Om oss
            </NavLink>
          </li>
          <li className="header-ul-list">
            <NavLink to="/Galleri" className="header-link">
              Galleri
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

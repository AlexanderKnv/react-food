import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <nav className="blue-grey darken-2">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          React Foods
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

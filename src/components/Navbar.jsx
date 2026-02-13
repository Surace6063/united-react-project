import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container container">
        <div className="logo">
          <img src="logo.png" alt="logo" className="logo-img" />
          <p className="brand-name">MeroShop</p>
        </div>

        <ul className="nav-links">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>

          <Link className="link" to="/shop">
            <li>Shop</li>
          </Link>

          <li>Contact</li>
          <li>About</li>
        </ul>

        <div className="nav-actions">
          <Link to="/login">
            <button>login</button>
          </Link>

          <button className="btn-primary">register</button>
        </div>
      </div>
    </header>
  )
}
export default Navbar

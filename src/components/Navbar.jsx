import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>logo</div>
        
        <ul className='nav-links'>
           <Link to="/">
               <li>Home</li>
           </Link>

            <Link to="/shop">
              <li>Shop</li>
            </Link>

            <li>Contact</li>
            <li>About</li>
        </ul>

        <div className='nav-actions'>
            <Link to="/login">
              <button>login</button>
            </Link>

            <button>register</button>
        </div>
    </div>
  )
}
export default Navbar
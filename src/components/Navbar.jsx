import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <li><Link to="/">Characters</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/transformations">Transformation</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
    </nav>
  )
}

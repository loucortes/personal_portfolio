import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <p>Luciano Cortés</p>

      <ul className='nav-items'>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
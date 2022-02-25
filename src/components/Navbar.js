import { useState, useEffect } from 'react';
import { MenuOutlined } from '@ant-design/icons';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const navBackground = () => {
    if (window.scrollY > 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  }
  window.addEventListener('scroll', navBackground);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        LOGO
      </a>
      <button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
        <MenuOutlined style={{ color: '#0071BD', fontSize: "25px" }} />
      </button>
      {activeMenu && <ul className="nav-item-container">
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Contact</a></li>
        <li><a href="/"></a></li>
      </ul>}
    </nav>
  )
}

export default Navbar;

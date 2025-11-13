import Link from "next/link";
import '@/styles/components/Header.scss';

export default function Header() {
  return (
    <header>
      <div className="container-header flex">
        <div className="header-logo flex">
          {/* <img src="/logo.png" alt="Logo" /> */}
          Logo
        </div>

        <ul className="header-nav flex">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contactd">Contact</Link></li>
        </ul>

        <div className="header-menu">
          <button className="menu-button">Menu</button>

          <ul className="dropdown-menu hidden">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li className="menu-line"></li>
            <li><a href="">Phone: 0934.1900.61</a></li>
            <li><a href="">Email: abcxyz@example.com</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
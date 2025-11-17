import Link from "next/link";
import '@/styles/components/Navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
        <ul className="navbar-nav flex">
          <li><Link href="/">Number Head</Link></li>
          <li><Link href="/">Second prize</Link></li>
          <li><Link href="/">Infomation Head</Link></li>
          <li><Link href="/">Stock In</Link></li>
          <li><Link href="/">Live Head</Link></li>
          <li><Link href="/">Title Head</Link></li>
        </ul>
    </div>
  )
}
"use client";

import Link from "next/link";
import '@/styles/components/Header.scss';
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container-header flex">
        <div className="header-logo flex">
          {/* <img src="/logo.png" alt="Logo" /> */}
          Card Quizzes
        </div>

        <div className="header-search flex">
          <input type="text" placeholder="Search engine..." />
          <CiSearch className="search-icon" />
        </div>

        <div className="header-menu">
          <button className="menu-button" onClick={() => setOpen(true)}><RiMenu4Fill /></button>

          <div className={`dropdown-line ${open ? "visible" : "hidden"}`}>
            <ul className="dropdown-menu">
              <IoClose className="dropdown-close" onClick={() => setOpen(false)}/>
              <li><Link href="/">Number Head</Link></li>
              <li><Link href="/">Second prize</Link></li>
              <li><Link href="/">Infomation Head</Link></li>
              <li><Link href="/">Stock In</Link></li>
              <li><Link href="/">Live Head</Link></li>
              <li><Link href="/">Title Head</Link></li>
              <div className="menu-line"></div>
              <li><a href="">Phone / Zalo: abc def xyz</a></li>
              <li><a href="">Facebook / Messenger: abc def xyz</a></li>
              <li><a href="">Email Chinh: abcxyz@example.com</a></li>
              <li>
                <span><FaFacebookSquare /></span>
                <span><FaInstagramSquare /></span>
                <span><FaAppStoreIos /></span>
                <span><SiCashapp /></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
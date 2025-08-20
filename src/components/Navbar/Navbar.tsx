import Link from 'next/link'
import React from 'react'
import { BiSearchAlt, BiSolidUserCircle, BiPlus } from 'react-icons/bi'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left */}
      <div className="navbar-left">
        <Link href="/pages/profile"><BiSolidUserCircle className="icon" /></Link>
        <Link href="/pages/addblog"><BiPlus className="icon" /></Link>
        <Link href="/pages/search"><BiSearchAlt className="icon" /></Link>
      </div>

      {/* Middle */}
      <div className="navbar-middle">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Right */}
      <div className="navbar-right">
        <Link href="/">Home</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar

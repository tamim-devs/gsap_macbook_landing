import React from 'react'
import { navLinks } from '../constants'
import logo from './../../public/logo.svg'
import search from './../../public/search.svg'
import cart from './../../public/cart.svg'
const NavBar = () => {
  return (
    <header>
        <nav>
            <img src={logo} alt="logo" />

            <ul>
                {navLinks.map((link)=>(
                    <li key={link.label}>
                        <a href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button><img src={search} alt="search" /></button>
                <button><img src={cart} alt="cart" /></button>
            </div>
        </nav>


    </header>
  )
}

export default NavBar
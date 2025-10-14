import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
        <nav>
            <img src="/public/logo.svg" alt="logo" />

            <ul>
                {navLinks.map((link)=>(
                    <li key={link.label}>
                        <a href={link.label}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button><img src="/public/search.svg" alt="search" /></button>
                <button><img src="/public/cart.svg" alt="cart" /></button>
            </div>
        </nav>


    </header>
  )
}

export default NavBar
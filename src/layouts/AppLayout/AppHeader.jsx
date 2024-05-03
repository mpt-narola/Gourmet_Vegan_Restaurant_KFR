import React from 'react'
import heartIcon from "../../assets/images/heart-icon.svg"
import cartIcon from "../../assets/images/cart.svg"
import accountIcon from "../../assets/images/account.svg"
import logo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom'

const AppHeader = () => {
  return (
    <div className="navbar bg-[#ddbc7a] text-[#0b1928] md:px-10">
      <div className="navbar-start md:w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Restaurant</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <li>
              <Link to="">
                <img src={heartIcon} alt='heart-icon' />
                WishList(0)
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={cartIcon} alt='cart-icon' />
                My Cart(1)
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={accountIcon} alt='account-icon' />
                My Account
              </Link>
            </li>
          </ul>
        </div>
        <a className="">
          <img src={logo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex lg:justify-between lg:grow">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="" className='font-semibold text-sm'>Home</Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li>
            <Link to="">Restaurant</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="">
              <img src={heartIcon} alt='heart-icon' />
              WishList(0)
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={cartIcon} alt='cart-icon' />
              My Cart(1)
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={accountIcon} alt='account-icon' />
              My Account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AppHeader
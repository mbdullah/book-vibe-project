import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar py-6 px-5 work-sans">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink to="/" className="mx-4 px-5 py-4 text-lg text-[#131313] opacity-80">Home</NavLink>
<NavLink to="/about" className="mx-4 px-5 py-4 text-lg text-[#131313] opacity-80">About</NavLink>
<NavLink to="" className="mx-4 px-5 py-4 text-lg text-[#131313] opacity-80">Page to Read</NavLink>
      </ul>
    </div>
    <a className="text-2xl font-bold text-[#131313]">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to="/" className="mx-4 px-5 py-4 text-lg text-[#131313] opacity-80">Home</NavLink>
<NavLink to="/about" className="mx-4 px-5 py-4 text-lg text-[#131313] opacity-80">About</NavLink>
<NavLink to="" className="mx-4 px-5 py-4 text-lg text-[#131313] opacity-80">Page to Read</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a className=" text-white text-lg font-semibold bg-[#23BE0A] py-[14px] px-7 rounded-lg mr-4">Sign In</a>
    <a className="hidden md:block text-white text-lg font-semibold bg-[#59C6D2] py-[14px] px-7 rounded-lg">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;
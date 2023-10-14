import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-primary shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to='/'>
  <h1 className="font-bold sm:text-xl flex flex-wrap">
    <span className="text-slate-500">Dune</span>
    <span className="text-slate-700"> Estate</span>
  </h1>
</Link>
 
        <form className="bg-white p-2 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-primary" />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-heading hover:underline">
           <Link to='/'>Home</Link> </li>
          <li className="hidden sm:inline text-heading hover:underline">
           <Link to='about'>About</Link> 
          </li>
          <li className="hidden sm:inline text-heading hover:underline">
          <Link to='Sign-in'>Sign In</Link> 
          </li>
          <li className="hidden sm:inline text-heading hover:underline">
          <Link to='sign-up'>Sign Up</Link> 
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

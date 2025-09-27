import React from 'react'

 const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">daisyU</a>
  </div>

  {/* Desktop Menu: Visible on large screens and up */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link 1</a></li>
      <li><a>Link 2</a></li>
      <li><a>Parent</a></li>
    </ul>
  </div>

  {/* Mobile Menu: Dropdown visible on small screens */}
  <div className="navbar-end lg:hidden">
    <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="btn">Parent</div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-22 p-2 shadow">
        <li><a>Link 1</a></li>
        <li><a>Link 2</a></li>
        <li><a>Link 3</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}
export default NavBar


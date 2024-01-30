import React from 'react'

const Navbar = () => {
  return (
    <div className='menu-bar'>
    <img src='https://www.freepnglogos.com/uploads/bus-png/file-bus-svg-wikimedia-commons-29.png' />
        <ul className='menu-list'>
        <li><a>Home</a></li>
       <li><a>Book</a></li>
       <li className='btn-orange'>Login</li>
        </ul>
  </div>
     )
}

export default Navbar

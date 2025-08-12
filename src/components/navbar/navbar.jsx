import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/> 
        <ul>
            <li>Home</li>
            <li>tab1</li>
            <li>tab2</li>
            <li><button className='btn'>click-me</button></li>
        </ul>

    </nav>

  )
}

export default navbar

import './Logo.css'
import React from 'react'
import Logo from '../../assets/imgs/projeto.png'
import { Link } from 'react-router-dom'

export default propLink => 

<aside className="logLink">
   <Link to="/">
        <img src={Logo} alt="logo" />
   </Link>
</aside>
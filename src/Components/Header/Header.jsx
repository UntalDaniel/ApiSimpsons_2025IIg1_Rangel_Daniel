import React from 'react'
import BannerImagen from '../../assets/Icon/jcr_content.jpg'
import './Header.css'

const Header = () => {
  return (
    <header>
        <img src={BannerImagen} alt="logo principal" />
        <h1 id="Titulo">Los Simpsons</h1>
    </header>
  )
}

export default Header

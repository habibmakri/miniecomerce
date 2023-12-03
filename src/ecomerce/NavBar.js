import React, { useContext } from 'react'
import {NavLink } from 'react-router-dom'
import PanierContext from './PanierContext'

export default function NavBar() {
  const [panier,setPanier,isclicked,setIsclicked,handlepanierclick] = useContext(PanierContext)
  return (
    <nav>
        <ul><NavLink  to="./">Acceuil</NavLink ></ul>
        <ul><NavLink  to="../contact">Contact</NavLink ></ul>
        <ul><NavLink  to="./Acceuil.js">Sign/Log -in</NavLink ></ul>
        <ul onClick={()=>{handlepanierclick()}}>Panier({panier.length})</ul>
    </nav>
  )
}

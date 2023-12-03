import React, { useContext } from 'react'
import { createContext,useState,useEffect } from 'react'
import SideBarContext from "./SideBarContext"
import PanierContext from './PanierContext'
export default function Panier() {
  const [panier,setPanier,isclicked,setIsclicked,handlepanierclick] = useContext(PanierContext)
  // console.log(isclicked)
  // console.log(panier)
  let totalprice =0;
  panier.map((product)=>{
    totalprice = totalprice + product.price;
  })
  const deleteItem = (itemId) => {
    setPanier((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const HandleVider = ()=>{
    setPanier([]);
  }
  console.log(totalprice)
  return (
    <div className='panier' style={isclicked? {width:'330px'}:{width:'0px'}}>
      <div className='panierheadercontainer'>
      <p className='panierheader'>Panier</p>
      <p className='delete' style={{color:'red'}} onClick={()=>{HandleVider()}}>Vider</p>
      </div>
      <div className='panierarea'>
      {
        panier.map((product)=>(
          <div className='panieritem'>
          <img src={product.image} alt={product.title}  />
          <div className='infos'>
          <p style={{color: 'black',fontWeight: 600,fontSize: '18px',margin:0}}>{product.title.slice(0, 15)}</p>
          <p style={{color: 'black',fontSize: '18px',margin:0}}>Prix: ${product.price}</p>
          <p style={{color: 'red',fontSize: '18px',margin:0}} >Supprimer</p>
          </div>
          </div> 
        ))
      }
      </div>
      <div className='panierbottom'>
        <p>Total:{totalprice}$</p>
        <p className='payer' style={{color:'green'}}>Payer!</p>
      </div>
    </div>
  )
}

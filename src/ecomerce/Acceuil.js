import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AppContext from './Appcontext';
import Itemsspace from './itemsspace';
import PanierContext from './PanierContext'
import SideBarContext from './SideBarContext';

export default function Acceuil() {
    
    const [products,setProducts] = useState([])

    
    const getdata = () =>{
        fetch("https://fakestoreapi.com/products")
            .then((reponse)=>{
                return reponse.json();
            })
            .then((data)=>{
                setProducts(data)
            })
    } 
    
    
    
    useEffect(()=>{
        getdata();
    },[]);
    // console.log(products)
    return (
    <AppContext.Provider value={products}>
        <Itemsspace />
    </AppContext.Provider>
  )
}
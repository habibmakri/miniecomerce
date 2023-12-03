import React, { useState } from 'react';
// import FilterableProductTable from './productlist/FilterableProductTable.js';
import Ecomerce from "./ecomerce/Ecomerce.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './ecomerce/Contact.js';
import NavBar from './ecomerce/NavBar.js';
import "./ecomerce/ecomerce.css"
import PanierContext from './ecomerce/PanierContext.js';
import Panier from './ecomerce/Panier.js';
import Detail from './ecomerce/Detail.js'
import SideBarContext from './ecomerce/SideBarContext.js';
function App() {

    const [panier,setPanier] = useState([])
    const [isclicked,setIsclicked] = useState(false)

    const handlepanierclick =()=>{
        isclicked === false ? setIsclicked(true) : setIsclicked(false)
    }


    return (
        <>
            <Router>
            <PanierContext.Provider value={[panier,setPanier,isclicked,setIsclicked,handlepanierclick]}>
                <div className='alldisplay'>
                <Panier/>
                <div style={{width:'100%'}}>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Ecomerce />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/detail/:id" element={<Detail/>} />
                </Routes>
                </div>
                </div>
            </PanierContext.Provider>
            </Router>
        </>
    );
}

export default App;



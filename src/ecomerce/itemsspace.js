import React, { useContext, useEffect, useState } from 'react'
import AppContext from './Appcontext'
import PanierContext from './PanierContext'
import { Link, NavLink } from 'react-router-dom'

export default function Itemsspace() {
    const products = useContext(AppContext)
    const [panier, setPanier] = useContext(PanierContext)
    const [selectedCategory, setSelectedCategory] = useState('');

    const addtocart = (item) => {
        const existingItem = panier.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            setPanier((prevCart) =>
                prevCart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setPanier((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
        }
    }
    useEffect(() => {
        // console.log(panier);
    }, [panier]);


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
      };
    
      // Filtered products based on the selected category
      const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <>
            <div className='controlpan'>
                <p>Selectioner par categorie:</p>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="women's clothing">women's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    {/* Add more options for each category */}
                </select>            </div>
            <div className="itemsspace" >
                {filteredProducts.map((product) => (
                    <div key={product.id} >
                        <div className='image'>
                            <img src={product.image} alt={product.title} />
                            <div className='btns'>
                                <button className='addbtn' onClick={() => addtocart(product)}> Add </button>
                                <NavLink className='morebtn' to={`/detail/${product.id}`}>Detail</NavLink>
                            </div>
                        </div>
                        <div className='infos' style={{ paddingLeft: '5px', paddingTop: '8px' }}>
                            <p style={{ color: '#585454', margin: 0 }}>{product.category}</p>
                            <h3 style={{ color: 'black', fontWeight: 800, fontSize: '18px', margin: 0 }}>{product.title.slice(0, 15)}</h3>
                            <p style={{ color: 'black', fontWeight: 800, fontSize: '18px', margin: 0 }}>Price: ${product.price}</p>
                            {/* <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

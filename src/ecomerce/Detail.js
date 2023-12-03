import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import AppContext from './Appcontext'
import PanierContext from './PanierContext';
export default function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [panier,setPanier,isclicked,setIsclicked,handlepanierclick] = useContext(PanierContext)

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
    }, [panier]);


    useEffect(() => {
        // Fetch product details based on the product ID
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);
    if (!product) {
        return <p>Loading...</p>;
    }
    console.log(product)
    return (
        <div className='detail'>
            <div className='detailimage'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='details'>
                <h3>{product.title}</h3>
                <p className='detailprice'>${product.price}</p>
                <p className='detaildescription'>{product.description}</p>
                <button className='detailaddbtn' onClick={() => addtocart(product)} > Add to Cart! </button>
            </div>
        </div>
    )
}

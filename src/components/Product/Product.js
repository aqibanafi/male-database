import React, { useEffect, useState } from 'react';
import { addToDatabase, getStoredCart, removeAll, removeItem } from '../../utilities/dataLoad';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';

const Product = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect( () => {
         fetch('product.json')
         .then(res => res.json())
         .then(data => setProduct(data))
    }, [])
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = product.find(product => product.idMeal === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [product])
    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.idMeal === selectedProduct.idMeal)
        if (!exist) {
            selectedProduct.quantity =  1;
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.idMeal !== selectedProduct.idMeal)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDatabase(selectedProduct.idMeal);
        }
    const removeItemFromStorage = (cart) => {
        removeAll();
    }
    return (
        <div className='grid grid-cols-4 container mx-auto mt-12 gap-x-8'>
            <div className='col-span-3'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        product.map(product => <Shop key={product.idMeal} product={product} addToCart={addToCart}></Shop>)
                    }
                </div>
            </div>
            <div>
            <Cart cart={cart} product={product} deleteItem={removeItemFromStorage}></Cart>
            </div>
        </div>
        
    );
};

export default Product;
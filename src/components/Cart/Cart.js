import React from 'react';
import { removeItem } from '../../utilities/dataLoad';
const Cart = (props) => {
    const {cart, deleteItem} = props;
    console.log(cart)
    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for(let item of cart) {
        quantity = quantity + item.quantity;
        total = total + item.price * item.quantity;
        shipping = shipping + item.shipping;
    }
    const tax = total * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className='bg-red-100 h-full p-8 sticky top-0'>
            <h2 className='text-4xl font-bold mb-12'>Order Summary</h2>
            <h2 className='text-2xl font-semibold mb-8'>Selected Items: {quantity} </h2>
            <h2 className='text-2xl font-semibold mb-8'>Total Price:$ {parseFloat(total)} </h2>
            <h2 className='text-2xl font-semibold mb-8'>Total Shipping Charge:$ {parseFloat(shipping)} </h2>
            <h2 className='text-2xl font-semibold mb-8'>Tax: $ {parseFloat(tax)} </h2>
            <h2 className='text-2xl font-semibold'>Grand Total: $ {parseFloat(grandTotal)} </h2>
            <button onClick={deleteItem} className="btn btn-active btn-secondary w-full mt-8">Clear Cart</button>
        </div>
    );
};

export default Cart;
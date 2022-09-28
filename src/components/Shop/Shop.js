import React from 'react';

const Shop = (props) => {
    const {strArea, strIngredient, strMealThumb, strMeal, price, shipping} = props.product;
    return (
        <div className='shadow-lg rounded-lg p-4'>
            <img className='rounded-lg mb-8' src={strMealThumb} alt="" />
            <h2 className='text-2xl font-semibold mb-3'>{strMeal}</h2>
            <h2> <span className='font-bold mr-3'>Ingredient:</span> {strIngredient}</h2>
            <h2> <span className='font-bold mr-3'>Area:</span> {strArea}</h2>
            <h2> <span className='font-bold mr-3'>Shipping Cost:</span> {shipping}</h2>
            <h2> <span className='font-bold mr-3'>Price: </span> <span className='text-xl'>$ {price} </span></h2>
            <button onClick={() => props.addToCart(props.product)} className="btn btn-active btn-secondary w-full mt-8">Add To Cart</button>
        </div>
    );
};

export default Shop;
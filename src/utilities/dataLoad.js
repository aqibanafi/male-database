const addToDatabase = (id) => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('Cart', JSON.stringify(shoppingCart))
}
const getStoredCart =  () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}
const removeItem = idMeal => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (idMeal in shoppingCart) {
            delete shoppingCart[idMeal];
        }
        localStorage.setItem('Cart', JSON.stringify(shoppingCart))
    }
}
const removeAll = () => {
    let shoppingCart = {};
    if(shoppingCart) {
        localStorage.clear('Cart')
        localStorage.setItem('Cart', JSON.stringify(shoppingCart))
    }
    
}
export{addToDatabase, getStoredCart, removeItem, removeAll}
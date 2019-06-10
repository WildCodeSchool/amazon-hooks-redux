export const setCart = (cart) => {
  if(localStorage.getItem('cart')) {
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

export const getCart = () => {
  if(localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
}
const addToDb = (id) => {
  let shoppingCart = {};
  const StoredCart = localStorage.getItem("ShoppingCart");
  if (StoredCart) {
    shoppingCart = JSON.parse(StoredCart);
  }
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("ShoppingCart", JSON.stringify(shoppingCart));
};


const getStorCart = () => {
  let shoppingCart = {};
  const StoredCart = localStorage.getItem("ShoppingCart");
  if (StoredCart) {
    shoppingCart = JSON.parse(StoredCart);
  }
  return shoppingCart;
};


export { addToDb, getStorCart };

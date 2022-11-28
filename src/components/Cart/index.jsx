import "./style.css";
import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";

function Cart({ cart, removeCart, setCart }) {
  return (
    <div className="carrinho">
      <div className="logo">
        <p>Carrinho de compras</p>
      </div>
      <CartProduct cart={cart} removeCart={removeCart} />
      <CartTotal cart={cart} setCart={setCart} />
    </div>
  );
}

export default Cart;

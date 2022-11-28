import { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [cart, setCart] = useState([]);
  const [salvarProdutos, setSalvarProdutos] = useState([]);

  function removeCart(index) {
    const copiaCart = [...cart];
    cart.map((prod, idx) => {
      if (idx === index) {
        prod.quantidade--;
        if (prod.quantidade < 1) {
          copiaCart.splice(index, 1);
        }
      }
    });
    setCart(copiaCart);
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) =>
        response.json().then((response) => setProdutos(response))
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header produtos={produtos} setSalvarProdutos={setSalvarProdutos} />
      <div className="main">
        <ProductList
          salvarProdutos={salvarProdutos}
          produtos={produtos}
          cart={cart}
          setCart={setCart}
        />
        <Cart removeCart={removeCart} cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;

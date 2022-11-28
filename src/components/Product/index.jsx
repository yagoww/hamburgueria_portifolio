import { useState } from "react";
import "./style.css";

function Product({ name, produtos, id, category, price, cart, setCart, img }) {
  const [item, setItem] = useState({
    name: name,
    category: category,
    price: price,
    quantidade: 0,
    img: img,
  });

  function Adicionar() {
    const produtoEncontrado = produtos.find((produto) => produto.id === id);
    const produtoNoCarrinho = cart.find(
      (produtinho) => produtinho.id === produtoEncontrado.id
    );
    if (produtoNoCarrinho) {
      produtoNoCarrinho.quantidade++;
      setCart([...cart]);
    } else {
      produtoEncontrado.quantidade = 1;
      setCart([...cart, produtoEncontrado]);
    }
  }

  return (
    <div className="produto">
      <div className="fundoDaImagem">
        <img className="imagem" src={img} />
      </div>
      <div className="card">
        <p className="nome">{name}</p>
        <p className="categoria">{category}</p>
        <p className="preco"> R$ {price.toFixed(2)}</p>
        <button className="adicionar" onClick={Adicionar}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Product;

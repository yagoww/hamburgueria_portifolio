import imagem from "../../img/Mask Group.svg";
import "./style.css";
import { useState } from "react";

function Header({ produtos, setSalvarProdutos }) {
  const [busca, setBusca] = useState("");

  function filtro() {
    const vitrineFiltrada = produtos.filter((item) => {
      return (
        item.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()) ||
        item.category.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
      );
    });

    if (vitrineFiltrada) {
      setSalvarProdutos(vitrineFiltrada);
    } else {
      setSalvarProdutos([]);
    }
  }

  return (
    <div>
      <div className="header">
        <img
          className="img"
          alt="imagem"
          src={imagem}
          onClick={setSalvarProdutos}
        />
        <div className="busca">
          <input
            className="pesquisa"
            placeholder="Digite Pesquisa"
            onChange={(e) => setBusca(e.target.value)}
          />
          <button className="botao" onClick={filtro}>
            Pesquisar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

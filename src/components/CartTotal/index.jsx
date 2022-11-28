import { useEffect, useState } from "react";
import "./style.css";

function CartTotal({ cart, setCart }) {
  const [pagamento, setPagamento] = useState(0);

  function esvaziar() {
    setCart([]);
  }

  useEffect(() => {
    setPagamento(
      cart?.reduce((a, b) => {
        return a + b.price * b.quantidade;
      }, 0)
    );
  }, [cart]);

  return (
    <div>
      <p>
        {pagamento > 0 ? (
          <div>
            <div className="precinho">
              <p>Total</p>
              <section>R$ {pagamento.toFixed(2)}</section>
            </div>
            <button onClick={esvaziar} className="buttonR">
              Remover todos
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </p>
    </div>
  );
}

export default CartTotal;

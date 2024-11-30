import React, { useContext } from "react";
import "./header.css";
import { useState } from "react";
import { AppContext } from "../../contexts/AppContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useContext(AppContext);

  const { removeItem } = useContext(AppContext);

  const { isAdd } = useContext(AppContext);

  const { isRemoved } = useContext(AppContext);

  const { total } = useContext(AppContext);

  const { quantidadeItems } = useContext(AppContext);

  function showCart() {
    setIsOpen((state) => !state);
  }

  function compraFinalizada() {
    alert(total);
  }

  return (
    <>
      <header className="headerContent">
        <h1>Fly With Us</h1>
        <ul className="menuContent">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#destinations">Destinations</a>
          </li>
          <li>
            <a href="#">Tickets</a>
          </li>
        </ul>
        <button className="carContent" onClick={showCart}>
          Carrinho
          <span className="qtdItems">{quantidadeItems}</span>
        </button>
      </header>
      {isAdd && <div className="itemAdd">Item Adicionado !</div>}
      {isRemoved && <div className="itemRemoved">Item Removido !</div>}
      {isOpen && (
        <div className="shoppingCart">
          (
          {cart.map((item) => (
            <ul key={item.id} className="productsList">
              <li>{item.nome}</li>
              <li>R$ {item.valor.toFixed(2).replace(".", ",")}</li>
              <li>Qtd:{item.quantidade}</li>
              <button
                onClick={() => removeItem(item.id)}
                className="removerItem"
              >
                X
              </button>
            </ul>
          ))}
          )
          <p className="totalContent">
            Total : R$ {total.toFixed(2).replace(".", ",")}{" "}
          </p>
          <div className="finalizarCompra">
            <button className="btnFinalizarCompra" onClick={compraFinalizada}>
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

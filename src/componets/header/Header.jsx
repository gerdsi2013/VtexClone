import React from "react";
import "./style.scss";
import Logo from "../header/assets/vtex.svg";
import Globo from "../header/assets/globo.png";
import Seta from "../header/assets/seta.png";
import SetaDireita from "../header/assets/seta-direita.png";

export function Header() {
  return (
    <header className="menu-main">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="logo" title="logo" />
        </a>
      </div>

      <div className="menu-left">
        <ul>
          <li>
            <a href="#">Produto</a>
          </li>
          <li>
            <a href="#">Arquitetura</a>
          </li>
          <li>
            <a href="#">Clientes</a>
          </li>
          <li>
            <a href="#">Parceiros</a>
          </li>
          <li>
            <a href="#">Empresa</a>
          </li>
          <li>
            <a href="#">Recursos</a>
          </li>
          <li>
            <a href="#">Planos</a>
          </li>
          <li className="last">
            <a href="#">contato</a>
            <img src={SetaDireita} alt="setaDireita" title="setaDireita" />
          </li>
        </ul>
      </div>

      <div className="menu-rigth">
        <div className="globo-icons">
          <img src={Globo} alt="globo" title="globo" />
        </div>

        <div className="seta-icons">
          <img src={Seta} alt="seta" title="Seta" />
        </div>
      </div>
    </header>
  );
}

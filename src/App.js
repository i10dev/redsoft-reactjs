import { useState } from "react";
import { Logo, Menu, Search, Card } from "./Components";

import { db } from "./db";

import logoLight from "./assets/logo-light.png";
import logoDark from "./assets/logo-dark.png";

import phone from "./assets/phone.svg";
import location from "./assets/location.svg";

import "./App.scss";

function App() {
  const [navItem] = useState([
    {
      name: "Каталог",
      url: "/"
    },
    {
      name: "Доставка",
      url: "/delivery"
    },
    {
      name: "Оплата",
      url: "/payment"
    },
    {
      name: "Контакты",
      url: "/contact"
    },
    {
      name: "О галерее",
      url: "/about"
    }
  ]);

  return (
    <div className="App flex flex-col flex-between">
      <header className="header">
        <div className="header__inner wrapper flex flex-between flex-center">
          <Logo src={logoLight} />
          <Menu list={navItem} />
          <Search className="flex-1" />
        </div>
      </header>
      <div className="content wrapper flex-1">
        <h1 className="content__label">Картины эпохи Возрождения</h1>
        <div className="content__collection flex flex-between">
          {db.map((el, index) => (
            <Card key={index} {...el} />
          ))}
        </div>
      </div>
      <footer className="footer wrapper">
        <div className="footer__inner wrapper flex flex-between flex-center">
          <Logo src={logoDark} />
          <Menu list={navItem} />
          <div className="contacts flex flex-1 flex-end">
            <a className="footer__tel" href="tel:+74955555555">
              +7 (495) 555-55-55
            </a>
            <address className="footer__address">
              г. Москва, ул. Расплетина, 24
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

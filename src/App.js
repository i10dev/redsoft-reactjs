import { useState } from "react";
import { Logo, Menu, Search, Card } from "./Components";

import { db } from "./db";

import logoLight from "./assets/logo-light.png";
import logoDark from "./assets/logo-dark.png";

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
    },
  ]);

  return (
    <div className="App flex flex-col flex-between">
      <header className="header">
        <div className="header__inner wrapper flex flex-between flex-center">
          <Logo src={logoLight} />
          <Menu list={navItem}/>
          <Search />
        </div>
      </header>
      <div className="content wrapper flex-1">
        <h1>Картины эпохи Возрождения</h1>
        <div className="content__collection flex flex-between">
          {db.map((el, index) => (
            <Card key={index} {...el} />
          ))}
        </div>
      </div>
      <footer className="footer wrapper">
        <div className="footer__inner wrapper flex flex-between flex-center">
          <Logo src={logoDark} />
          <Menu list={navItem}/>
        </div>
      </footer>
    </div>
  );
}

export default App;

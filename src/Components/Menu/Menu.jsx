import "./Menu.scss";

function Menu({ list }) {
  return (
    <menu className="menu">
      {list.map((el, index) => (
        <a className="menu__link" key={index} href={el.url}>
          {el.name}
        </a>
      ))}
    </menu>
  );
}

export default Menu;

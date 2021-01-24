import React from "react";

import { Button } from "../index";

import "./Card.scss";

function Card({ isSale, name, autor, price, src }) {
  const [imgSrc, setImgSrc] = React.useState("");
  const img = import(`../../assets/${src.small}`);
  img.then(r => setImgSrc(r.default));

  const pricePrevious = () => (
    <span className="price__previous">
      {new Intl.NumberFormat().format(price.previous)}&#36;
    </span>
  );

  function priceBlock() {
    if (!isSale) {
      return <h3>Продана на аукционе</h3>;
    } else {
      return (
        <>
          <div className="card__price price">
            {price.previous && pricePrevious()}
            <span className="price__current">
              {new Intl.NumberFormat().format(price.current)}&#36;
            </span>
          </div>
          <div className="card__action">
            <Button />
          </div>
        </>
      );
    }
  }

  return (
    <div className="card flex flex-col">
      <div className="card__image">
        <img src={imgSrc} alt="" />
      </div>
      <div className="inner flex-1">
        <div className="card__label label">
          <div className="label__name">&#171;{name}&#187;</div>
          <div className="label__autor">{autor}</div>
        </div>
        <div className="card__footer flex flex-between">{priceBlock()}</div>
      </div>
    </div>
  );
}

export default Card;

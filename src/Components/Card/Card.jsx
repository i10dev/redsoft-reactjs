import React from "react";

import { Button } from "../index";

import "./Card.scss";

function Card({
  isSale,
  isBuy,
  name,
  autor,
  price,
  src,
  btnW,
  actionClick = null
}) {
  const [imgSrc, setImgSrc] = React.useState("");

  const img = import(`../../assets/${src.small}`).then(r =>
    setImgSrc(r.default)
  );

  const btnText = isBuy ? 'В корзине':'купить'

  const pricePrevious = () => (
    <span className="price__previous">
      {new Intl.NumberFormat().format(price.previous)}{" "}
      <span className="sign">&#36;</span>
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
              {new Intl.NumberFormat().format(price.current)}
              <span className="sign">&#36;</span>
            </span>
          </div>
          <div className="card__action">
            <Button
              textDefault={btnText}
              width={btnW}
              actionClick={actionClick}
            />
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
      <div className="inner flex flex-between flex-col flex-1">
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

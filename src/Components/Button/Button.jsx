import "./Button.scss";

function Button({
  textDefault = "Купить",
  className = "",
  width = "118",
  actionClick = null
}) {
  let style = {
    width: width + "px" || "initial"
  };

  return (
    <button style={style} className={"btn " + className} onClick={actionClick}>
      {textDefault}
    </button>
  );
}

export default Button;

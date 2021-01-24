import "./Button.scss";

function Button({ textDefault = "Купить", className = "", width = "118" }) {
  let style = {
    width: width + "px" || "initial"
  };
  return (
    <button style={style} className={"btn " + className}>
      {textDefault}
    </button>
  );
}

export default Button;

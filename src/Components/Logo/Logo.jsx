import "./Logo.scss";

function Logo({ src }) {
  return (
    <div className="logo">
      <img src={src} alt="" />
    </div>
  );
}

export default Logo;

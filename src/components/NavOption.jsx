import "./NavOption.css";

const NavOption = (props) => {
  return (
    <div className="nav-option">
      <a href={props.href}>{props.children}</a>
    </div>
  );
};

export default NavOption;

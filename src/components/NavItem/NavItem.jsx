import "./NavItem.css";

<<<<<<< HEAD
const NavItem = () => {
  // return <li className="nav-item">{props.children}</li>;
};

const NavItemDropDown = () => {
  // return <li className="nav-item dropdown">{props.children}</li>;
=======
const NavItem = (props) => {
  return <li className="nav-item">{props.children}</li>;
};

const NavItemDropDown = (props) => {
  return <li className="nav-item dropdown">{props.children}</li>;
>>>>>>> 3f25108b6adad0a44bf8ae1469fdf9c4e4e41d1c
};

export default NavItem;
export { NavItemDropDown };

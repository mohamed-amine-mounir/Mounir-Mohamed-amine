import "./Header.css";

<div id="container">
  <h1>
<<<<<<< HEAD
    <span className="blink-01">Blinking </span>
    <span className="blink-02">Text</span>
=======
    <span class="blink-01">Blinking </span>
    <span class="blink-02">Text</span>
>>>>>>> 3f25108b6adad0a44bf8ae1469fdf9c4e4e41d1c
  </h1>
</div>;

const Header = () => {
  return (
    // to do more than one element write them inside div or <>
    <div className="navbar  navbar-expand-md fixed-top" id="nav">
      <div className="container">
        <span className="navbar-brand fw-bold text-dark " id="logo">
          Amine.dev
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#hero" className="nav-link  ">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link  ">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link  ">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link  ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default Header;
=======

export default Header;
// props we use it to send from biggest components  to a smallest component
//  for example we want to write header from app js instead of
>>>>>>> 3f25108b6adad0a44bf8ae1469fdf9c4e4e41d1c

import Cart from "./Cart";
import Nav from "./Nav";

function Header({ title, showMenu, visibility }) {
  return (
    <>
      <header className="header">
        <div
          className={visibility === false ? "menu-icon" : "menu-icon-close"}
          onClick={showMenu}
        ></div>
        <h1 id={visibility === true ? "margin-left" : ""}>{title}</h1>
        <Nav showMenu={showMenu} visibility={visibility} />
        <Cart />
      </header>
      <hr />
    </>
  );
}
export default Header;

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="flex">
      <img id="navbar-logo" src="images/logo.svg" />
      <span>
        <span className="flex" id="navbar-btns">
          <a href="">Entrar</a>
          <a href="">Sobre</a>
          <input
            id="src-bar"
            name="src-bar"
            type="text"
            placeholder="Pesquisar títulos"
          />
        </span>
      </span>
    </nav>
  );
}

export default Navbar;

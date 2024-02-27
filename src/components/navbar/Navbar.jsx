import "./Navbar.css";

function Navbar() {
  return (
    <nav className="flex">
      <a id="navbar-logo-id" href="">
        <img id="navbar-logo" src="src/assets/logo.svg" />
      </a>
      <span>
        <span className="flex" id="navbar-btns">
          <a href="" className="navbar-link">Entrar</a>
          <a href="" className="navbar-link">Criar uma conta</a>
          <a href="" className="navbar-link">Sobre</a>
          <div id="searchbar" className="flex">
            <input
              id="src-bar"
              name="src-bar"
              type="text"
              placeholder="Pesquisar títulos"
            />
            <button id="src-btn">
              <p className="sr-only">Pesquisar</p>
              <img src="src/assets/lupa.svg"/>
            </button>
          </div>
          <a id="user-btn" href="" className="flex">
            Bem vindo(a),<em id="user-name">Visitante</em>.
          </a>
        </span>
      </span>
    </nav>
  );
}

export default Navbar;

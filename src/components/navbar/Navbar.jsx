function Navbar(){
    return (
        <nav class="flex">
            <img id="navbar-logo" src="images/logo.svg"/>
            <span>
                <span class="flex" id="navbar-btns">
                    <a href="">Entrar</a>
                    <a href="">Sobre</a>
                    <input id="src-bar" name="src-bar" type="text" placeholder="Pesquisar títulos"/>
                </span>
            </span>
        </nav>
    );
}
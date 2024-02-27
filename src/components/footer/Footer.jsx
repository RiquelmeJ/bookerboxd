import "./Footer.css"

function Footer() {
    return (<footer>
        <div className="footer-div">
            <ul id="footer-nav">
                <li><a href="">Sobre</a></li>
                <li><a href="">Ajuda</a></li>
                <li><a href="">Contatos</a></li>
                <li><a href="">App</a></li>
            </ul>
            <p>@Feito por nós para a matéria de Web. Banco de dados: link aqui.</p>
        </div>
        <div>
            <ul id="footer-img">
                <li><img src="src/assets/instagram.svg" alt="instagram" /></li>
                <li><img src="src/assets/tiktok.svg" alt="tiktok" /></li>
                <li><img src="src/assets/facebook.svg" alt="facebook" /></li>
                <li><img src="src/assets/youtube.svg" alt="youtube" /></li>
                <li><img src="src/assets/x.svg" alt="twitter" /></li>
                <li><img src="src/assets/github.svg" alt="github" /></li>
            </ul>
        </div>
    </footer>)
}

export default Footer
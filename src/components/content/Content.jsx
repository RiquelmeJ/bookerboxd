import "./Conteudo.css"

function Content() {
    return (<>
    
        <header id="comeco-conteudo">
            <h1> Updates</h1>
        </header>

        <main id="conteudo-homepage">

            <section id="avisos">
                <p>Hello</p>
            </section>

            <section id="tweet">

                <div id="titulo-tweet">

                    <div id="foto-titulo">
                        <img id="foto-perfil" src="src/assets/gato.jpg" alt="gato-perfil" />
                        <h3 id="usuario-avaliou"> Pedro Pascal! avaliou A guerra dos Tronos</h3>
                    </div>
                    <p>13/02/24</p>

                </div>

                <div id="corpo-tweet">

                    <a href="">
                    <img id="foto-livro" src="src/assets/guerra dos tronos.jpg" alt="" />
                    </a>
                    
                    



                    <div id="texto-tweet">
                        
                        <h2>A Guerra dos Tronos - George R.R. Martin</h2>
                        <h2>Avaliação</h2>
                        <p> O aspecto mais impressionante de "A Guerra dos Tronos" é a maneira como Martin
                            subverte as expectativas do leitor. Nenhum personagem está seguro e nenhum
                            evento é previsível. Isso cria uma sensação de urgência e imprevisibilidade que
                            mantém o leitor à beira do assento, ansioso para descobrir o que acontecerá a seguir.
                            Além disso, a prosa de Martin é fluida e envolvente, tornando fácil... Leia Mais</p>

                    </div>



                </div>
            </section>

        </main>



        </>);
}

export default Content
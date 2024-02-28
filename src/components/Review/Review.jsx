import "./Review.css"
import { Rating } from '@mui/material';

function Review() {
    return (<body>

        <main id="conteudo-homepage">
            <section id="tweet-logged">

                <div className="header">
                    <div className="titulo">
                        <img id="foto-perfil" src="src/assets/gato.jpg" alt="gato-perfil" />
                        <p> <span id="username">Pedro Pascal!</span> avaliou <span id="booktitle">A Guerra dos Tronos</span>.</p>
                    </div>
                    <p>13/02/24</p>
                </div>

                <div id="corpo-tweet">

                    <a href="">
                        <img id="foto-livro" src="src/assets/guerra dos tronos.jpg" alt="" />
                    </a>

                    <div id="texto-tweet">
                        <h2>A Guerra dos Tronos - George R.R. Martin</h2>
                        <Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly/>
                        <p> O aspecto mais impressionante de "A Guerra dos Tronos" é a maneira como Martin
                            subverte as expectativas do leitor. Nenhum personagem está seguro e nenhum
                            evento é previsível. Isso cria uma sensação de urgência e imprevisibilidade que
                            mantém o leitor à beira do assento, ansioso para descobrir o que acontecerá a seguir.
                            Além disso, a prosa de Martin é fluida e envolvente, tornando fácil... <a href=""></a>Leia Mais</p>
                    </div>

                </div>

                <hr id="linha" />
                <div id="like-tweet">
                    <ul id="icons">
                        <li className="link">
                            <a className="link" href="">
                                <img src="src/assets/like.svg" alt="" />
                            </a>
                        </li>
                        <li className="link">
                            <a className="link" href="">
                                <img src="src/assets/follow.svg" alt="" />
                            </a>
                        </li>
                        <li className="link">
                            <input id="comentario" type="text" placeholder=" Escreva um comentário" />
                            <a className="link" href="">
                                <img src="src/assets/send-icon.svg" alt="" />
                            </a>
                        </li>
                    </ul>




                </div>


            </section>

        </main>



    </body>)
}

export default Review
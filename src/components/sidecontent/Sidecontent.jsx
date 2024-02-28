import "./Sidecontent.css"
function Sidecontent() {
    return (
        <div id="sidecontent">
            <div id="popup">
                <p>Aproveite todos os recursos do rateABook.<b> É grátis!</b></p>

                    <button>Entrar</button>
                    <a href="">ou crie uma conta.</a>
            </div>
            <div id="sentence">
                <p>Sua experiência com a leitura <br></br><b>como nunca vista antes</b>.</p>
            </div>
            <div id="side">
                <h1>Os mais comentados</h1>
                <div id="book-holder">
                    <a href="" className="bookCover">
                        <img src="https://cdn.kobo.com/book-images/e2af39a7-d302-4788-aff7-ebd684bf8930/1200/1200/False/old-fashion-cupcake.jpg"/>
                    </a>
                    <a  href=""className="bookCover">
                        <img src="https://m.media-amazon.com/images/I/81bckDPQ44L._AC_UF1000,1000_QL80_.jpg"/>
                    </a>
                    <a href="" className="bookCover">
                        <img src="https://m.media-amazon.com/images/I/51MxY5x+pAL._AC_UF1000,1000_QL80_.jpg"/>
                    </a>
                    <a href="" className="bookCover">
                        <img src="https://m.media-amazon.com/images/I/41l4Rca8kAS.jpg"/>
                    </a>
                    <a href="" className="bookCover">
                        <img src="https://m.media-amazon.com/images/I/71ieivsk2zL._AC_UF1000,1000_QL80_.jpg"/>
                    </a>
                    <a href="" className="bookCover">
                        <img src="https://m.media-amazon.com/images/I/81STWXM2mHS._AC_UF1000,1000_QL80_.jpg"/>
                    </a>
                </div>
                <a id="verMais" href="" target="blank">Ver mais</a>
            </div>
        </div>
    )
}

export default Sidecontent
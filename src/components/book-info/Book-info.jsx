import Review from "../Review/Review";
import "./Book-info.css"

function Bookinfo() {
    return (
        <div>
            <h3>As Crônicas de Gelo e Fogo #1</h3>
            <h1>Sinopse</h1>
            <p>A guerra dos tronos é o primeiro livro da série best-seller internacional As Crônicas de Gelo e Fogo, que deu origem à adaptação de sucesso da HBO, Game of Thrones. O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou.Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem.. e onde um inimigo morto é algo a ser admirado.Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância.Nas flrestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros</p>
            <p>Genero:{"Aventura, Fantasia, Romance"}</p>
            <hr />
            <h1>Sobre o Autor</h1>
            <p>George R. R. Martin nasceu em Bayonne, Nova Jérsei, filho de um estivador, cuja família de classa operária vivia perto das docas de Bayonne. Quando jovem, ele se tornou um leitor ávido de quadrinhos de superheróis. A edição de novembro de 1968 do Quarteto Fantástico possui uma nota ao editor que Martin escreveu quando ainda estava na escola. Ele credita a atenção que ele recebeu com a carta, junto com seu interesse em quadrinhos, como sua inspiração para se tornar escritor. Em 1970, Martin recebeu sue Bacharelado em jornalismo na Universidade Northwestern, Illinois, se formando com muitos elogios. Ele depois completou um Mestrado em jornalismo, também em Northwestern, em 1971. Martin começou a escrever contos de ficção científica no começo da década de 1970, apesar de o início de sua carreira não ter sido fácil (uma de suas histórias foi rejeitada por diferentes revistas 42 vezes), ele nunca se desencorajou; anos depois ele venceria seu primeiro Hugo Award e Nebula Award por um de seus contos.</p>
            <hr />
            <h1>Avaliações da Comunidade</h1>
            {<Review />}
        </div>
    );
}

export default Bookinfo;
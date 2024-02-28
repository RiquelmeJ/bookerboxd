import "./cadastro.css"

function Cadastro(){

    function cadastrar() {

        var email = document.getElementById("email").value;
        var usuario = document.getElementById("usuario").value;
        var senha = document.getElementById("senha").value;

        }

        console.log("Email: " + email);
        console.log("Usuário: " + usuario);
        console.log("Senha: " + senha);

        document.getElementById("meuForm").reset();

    return(

        <body>
            <header>
                <h1>Cadastre-se</h1>
            </header>
            <form id ="form-cadastro">
                E-mail:
            <input type="text" id="email" name="email"></input><br></br>
                Usuário:
            <input type="text" id="usuario" name="usuario"></input><br></br>
                Senha:
            <input type="text" id="senha" name="senha"></input><br></br>

            <input type="button" value="cadastrar" onclick ="Cadastrar()"></input>
            </form>

        </body>
    );

}
var personagem
var escolha1

function escolhaDePersona() {
    elem=document.querySelector ('#Start')
    elem.style.display=("none")
    elem = document.querySelector('#pagFase');
    elem.style.backgroundImage = "url('./IMAGENS/personagens.jfif')";
    

    setTimeout(function () {
        personagem = prompt("Escolha seu personagem digitando o numero correspondente.");
        if (personagem == 1) {
            hacker()
        }
        else if (personagem == 2){
            Estagiario()
        }
        else if (personagem == 3 ){
            adolescente()
        }
    }, 300)
}
